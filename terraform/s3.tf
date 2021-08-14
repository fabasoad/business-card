locals {
  payload_path = "${path.module}/${var.app}-payload.zip"
}

resource "aws_s3_bucket" "business_card_bucket" {
  bucket = "business-card-bucket"
  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket_object" "business_card_payload" {
  bucket = aws_s3_bucket.business_card_bucket.id
  key    = "beanstalk/${var.app}-payload.zip"
  source = local.payload_path
}
