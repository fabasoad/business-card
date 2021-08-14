variable "app" {
  default     = "business-card"
  description = "Application name"
}
variable "aws_region" {
  default     = "ap-northeast-1"
  description = "AWS region"
}
variable "environment" {
  default     = "prod"
  description = "Environment (prod/stg/dev)"
}
variable "app_version" {
  default     = "2.6.1"
  description = "Application version"
}
