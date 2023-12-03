resource "google_project_service" "auth" {
  provider = google-beta

  project = google_project.default.project_id
  service = "identitytoolkit.googleapis.com"

  disable_on_destroy = false
}

resource "google_identity_platform_config" "auth" {
  provider = google-beta
  project  = google_project.default.project_id

  autodelete_anonymous_users = true
  sign_in {
    allow_duplicate_emails = false

    anonymous {
      enabled = true
    }

    email {
      enabled           = true
      password_required = true
    }
  }

  authorized_domains = [
    "localhost",
    "discflow.net",
  ]

  depends_on = [google_project_service.auth]
}

resource "google_identity_platform_default_supported_idp_config" "google_sign_in" {
  provider = google-beta
  project  = google_project.default.project_id

  enabled       = true
  idp_id        = "google.com"
  client_id     = var.oath_client_id
  client_secret = var.oath_client_secret

  depends_on = [google_identity_platform_config.auth]
}
