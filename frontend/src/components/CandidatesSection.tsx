

export function CandidatesSection() {
  const stats = [
    { value: "৩০০", label: "মোট আসন" },
    { value: "৬৪", label: "জেলা" },
    { value: "৮", label: "বিভাগ" },
    { value: "১০০%", label: "কভারেজ" },
  ];

  return (
    <div id="candidates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bn text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            আমাদের প্রার্থীগণ
          </h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            ৩০০ টি আসনে আমাদের যোগ্য, সৎ ও দক্ষ প্রার্থীরা প্রতিদ্বন্দ্বিতা করছেন
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            {stats.map((stat, index) => (
              <div key={index} className='islamic-pattern py-4 px-2 rounded-lg bg-linear-to-br from-emerald-600 to-green-600'>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
