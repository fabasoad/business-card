locals {
  payload_path = "${path.module}/../server/${var.app}-payload.zip"
}

resource "aws_elastic_beanstalk_application" "business-card-app" {
  name        = "business-card-app"
  description = "Personal website"
}

resource "aws_s3_bucket" "business-card-bucket" {
  bucket = "business-card-bucket"
  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket_object" "business-card-payload" {
  bucket = aws_s3_bucket.business-card-bucket.id
  key    = "beanstalk/${var.app}-payload.zip"
  source = local.payload_path
  etag   = md5(file(local.payload_path))
}

resource "aws_elastic_beanstalk_application_version" "default" {
  name        = "business-card-${var.app_version}"
  application = aws_elastic_beanstalk_application.business-card-app.name
  description = "application version created by terraform"
  bucket      = aws_s3_bucket.business-card-bucket.id
  key         = aws_s3_bucket_object.business-card-payload.id
}

resource "aws_elastic_beanstalk_environment" "business-card-env" {
  name                = "business-card-env"
  application         = aws_elastic_beanstalk_application.business-card-app.name
  solution_stack_name = "64bit Amazon Linux 2 v5.4.4 running Node.js 14"
}
