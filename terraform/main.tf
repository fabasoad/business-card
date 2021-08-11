terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
  backend "remote" {
    organization = "fabasoad"

    workspaces {
      name = "gh-actions-business-card"
    }
  }
}
