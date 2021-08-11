resource "aws_iam_role" "lambda_iam" {
  name = "${var.lambda_name}_iam"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "test_lambda" {
  filename      = "${var.lambda_name}_payload.zip"
  function_name = var.lambda_name
  role          = aws_iam_role.lambda_iam.arn
  handler       = "index.test"

  source_code_hash = filebase64sha256("${var.lambda_name}_payload.zip")

  runtime = "nodejs14.x"
}
