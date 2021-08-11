provider "aws" {
  region = var.aws_region
  default_tags {
    tags = {
      "personal:app"        = var.app
      "personal:deployment" = "tf"
      "personal:env"        = var.environment
    }
  }
}
