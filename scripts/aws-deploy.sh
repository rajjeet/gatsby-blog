#!/bin/bash

aws configure set aws_access_key_id "$AWS_ACCESS_KEY_ID"
aws configure set aws_secret_access_key "$AWS_SECRET_ACCESS_KEY"
aws configure set region "$AWS_REGION"
#aws s3 sync public/ s3://$AWS_S3_BUCKET_NAME --acl public-read --delete --exclude CloudFrontLogs*
#aws cloudfront create-invalidation --distribution $AWS_CLOUDFRONT_DISTRIBUTION_ID --paths '/*'