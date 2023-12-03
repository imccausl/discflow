resource "google_project" "default" {
  provider   = google-beta
  name       = "discflow"
  project_id = "discflow-bed9f"

  labels = {
    firebase = "enabled"
  }

}

resource "google_firebase_project" "default" {
  provider = google-beta
  project  = google_project.default.project_id
}

resource "google_firebase_web_app" "default" {
  provider     = google-beta
  project      = google_project.default.project_id
  display_name = "discflow"
}
