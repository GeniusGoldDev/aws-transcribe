import React, { Component } from 'react'
// var AWS = require('aws-sdk')
import AWS from 'aws-sdk'
import config from '../../config'

AWS.config.update({
  accessKeyId: config.awsClientID,
  secretAccessKey: config.awsClientSecret,
});

class AwsTranscribe extends Component {

  componentDidMount() {
    // Create S3 service object
    var s3 = new AWS.S3({apiVersion: '2006-03-01'});

    // Call S3 to list the buckets
    s3.listBuckets(function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Buckets);
      }
    });
  }

  render() {
    return (
      <p>Test</p>
    )
  }
}
export default AwsTranscribe; 