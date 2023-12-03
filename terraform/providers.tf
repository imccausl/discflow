terraform {
  required_providers {
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 5.4"
    }
  }

  cloud {
    organization = "imccausl"

    workspaces {
      name = "production"
    }
  }
}

provider "google-beta" {
  credentials = file("credentials-file")
}
