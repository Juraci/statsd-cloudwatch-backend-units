{
    port: 8125,
    backends:  ["statsd-cloudwatch-backend-units"],
    cloudwatch: {
        namespace:  "CheckinService",
        region: "us-west-2",
        dimensions: {},
        units: {
            'Status':'Count',
            'Time':'Milliseconds',
            'Memory':'Bytes',
            'Statistics':'Count',
            'CheckinService.DbWrite.Count':'Count',
            'CheckinService.DbRead.Count':'Count'
        },
        accessKeyId:  "your-key-id",
        secretAccessKey: "your-secret-key"
    }
}
