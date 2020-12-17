# Serverless AWS

Serverless means event driven computing running using small independent functions running inside container(s) in the cloud.

AWS Lambda, AWS API Gateway and AWS DynamoDB are the core and commonly used services of AWS Serverless infrastructure
In addition to that there are more serverless services like S3, SNS, SQS, Athena, Kinesis, STEP Functions etc.

AWS SAM is a tool provided by AWS
    - It's lightweight version of AWS CloudFormation,
    - It is based on templates
Serverless Framework is a framework provided by Serverless Inc.
    - Open Source tool framework
    - It's also a template based (Serverless templates)

Follow the commands
aws configure
Press enter and follow the steps to fill the correct information
AWS_ACESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_DEFAULT_REGION

aws sts get-caller-identity (This should display the AWS account details with IAM user name at the end)

Express is a light weight http server

## AWS Commands we may need for this project

### To upload an image to s3 bucket using CLI

aws s3 cp {filename+extension} s3://{destinationBucketName}/{nameOftheTargetFileName}

destination bucket name is the name of the s3 bucket where you want to upload the file  
nameOftheTargetFileName is the name of the file that you are uplaoding(this is a utility which gives the flexibility to upload the file and store with different name)  

aws lambda update-function-code --function-name {name of the function} -s3-bucket {bucket name} --s3-key {upload file name} --publish  

When we choose Lambda proxy integration, it merely means API gateway acts as proxy between calling application and lambda. This means the request is passed on to lambda without any modification. Similarly the response is also passed back to caller as is wihtout any modification,

CORS: Cross Origin Resource Sharing

### Integration Request Mapping Template format

{
  "operation": "$input.params('operation')",
  "input": {
      "operand1": $input.json('$.num1'),
      "operand2": $input.json('$.num2')
  }
}

To Install aws sdk

npm init
npm install aws-sdk --save
