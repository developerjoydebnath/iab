<?php

namespace App\Swagger;

use OpenApi\Attributes as OA;

#[OA\Info(
  title: "Islamic Andolon Project API",
  version: "1.0.0",
  description: "API documentation"
)]
#[OA\Server(
  url: "http://localhost:8000",
  description: "Local server"
)]
#[OA\SecurityScheme(
  securityScheme: "apiAuth",
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT"
)]
class OpenApi {}
