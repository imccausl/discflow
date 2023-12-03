resource "google_project_service" "firestore" {
  project = google_project.default.project_id
  service = "firestore.googleapis.com"
}

resource "google_firestore_database" "database" {
  project     = google_project.default.project_id
  name        = "(default)"
  location_id = "nam5"
  type        = "FIRESTORE_NATIVE"

  depends_on = [google_project_service.firestore]
}
