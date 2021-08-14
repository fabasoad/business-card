locals {
  payload_path = "${path.module}/${var.app}-payload.zip"
}

resource "aws_elastic_beanstalk_application" "business-card-app" {
  name        = "business-card-app"
  description = "Personal website"
  appversion_lifecycle {
    service_role          = aws_iam_role.eb_business_card_role.arn
    max_count             = 128
    delete_source_from_s3 = true
  }
}

resource "aws_elastic_beanstalk_application_version" "default" {
  name        = "business-card-${var.app_version}"
  application = aws_elastic_beanstalk_application.business-card-app.name
  description = "application version created by terraform"
  bucket      = aws_s3_bucket.business-card-bucket.id
  key         = aws_s3_bucket_object.business-card-payload.id
}

resource "aws_elastic_beanstalk_environment" "business_card_env" {
  name                = "business-card-env"
  application         = aws_elastic_beanstalk_application.business-card-app.name
  solution_stack_name = "64bit Amazon Linux 2 v5.4.4 running Node.js 14"
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "aws-elasticbeanstalk-ec2-role"
  }
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "InstanceType"
    value     = "t2.micro"
  }
}
