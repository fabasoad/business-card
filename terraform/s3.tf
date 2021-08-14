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
}
