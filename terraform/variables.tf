variable "app" {
  default     = "business-card"
  description = "Application name"
}
variable "aws_region" {
  default     = "ap-northeast-1"
  description = "AWS region"
}
variable "environment" {
  default     = "dev"
  description = "Environment (prod/stg/dev)"
}
variable "lambda_name" {
  default     = "business_card"
  description = "Name of AWS lambda function"
}
