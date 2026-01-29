<?php

namespace Database\Seeders;

use App\Models\Seat;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use PhpOffice\PhpSpreadsheet\IOFactory;

class SeatSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::statement('SET FOREIGN_KEY_CHECKS=0;');
    Seat::truncate();
    DB::statement('SET FOREIGN_KEY_CHECKS=1;');

    $filePath = base_path('../frontend/public/seats.xlsx');

    if (!file_exists($filePath)) {
      $this->command->error("File not found at: $filePath");
      return;
    }

    $spreadsheet = IOFactory::load($filePath);
    $worksheet = $spreadsheet->getActiveSheet();
    $rows = $worksheet->toArray();

    // Assuming first row is header
    $header = array_shift($rows);

    foreach ($rows as $row) {
      // Check if row is empty
      if (empty($row[0]) && empty($row[1])) {
        continue;
      }

      $seatNo = trim($row[0]); // জাতীয় আসন
      $seatName = trim($row[1]); // সংসদ আসন
      $areaRaw = $row[2] ?? ''; // ভোটার এরিয়া

      $areaList = $this->processArea($areaRaw);

      Seat::create([
        'seat_no' => $seatNo,
        'seat_name' => $seatName,
        'area' => $areaList, // Casts to JSON automatically in Model
      ]);
    }

    $this->command->info('Seats seeded successfully!');
  }

  private function processArea($text)
  {
    if (empty($text)) return [];

    // Split by newline if present
    $lines = explode("\n", $text);
    $areas = [];

    foreach ($lines as $line) {
      $line = trim($line);
      if (empty($line)) continue;

      // Remove (ক), (খ) prefix
      // Regex match starts with (any bangla char) or (a-z) followed by space
      $cleanLine = preg_replace('/^\([^\)]+\)\s*/u', '', $line);

      // Remove trailing " এবং" for clean list? 
      // The user example kept " এবং" in "তেতুলিয়া উপজেলা এবং". match user req exactly.
      // User output: "তেতুলিয়া উপজেলা এবং"

      $areas[] = $cleanLine;
    }

    // If no newlines, maybe it's all in one line but split by the (ক) pattern?
    if (count($areas) === 1 && preg_match('/\([খ-হ]\)/u', $areas[0])) {
      // This logic handles if multiple items are on one line like "(k) item (kh) item"
      // But usually Excel cells uses alt+enter for newlines.
      // Lets assume basic newline separation first as displayed in user prompt.
    }

    return $areas;
  }
}
