# StatsD CloudWatch Backend

This is a pluggable backend for [StatsD](https://github.com/etsy/statsd). It publishes stats to [Amazon's AWS CloudWatch](http://aws.amazon.com/cloudwatch/).


*Counters*, *Gauges*, and *Timers* are supported. *Sets* are not implemented.

Be aware that AWS CloudWatch metrics are not free and the cost can quickly become prohibative. *Pricing details: [Amazon CloudWatch Pricing](http://aws.amazon.com/cloudwatch/pricing/).* This may be a good choice if your needs are simple and/or as a means of quickly getting off the ground, as setting up [Graphite](http://graphite.wikidot.com/) in EC2 is not trivial.


## Requirements

* [StatsD deamon](https://npmjs.org/package/statsd) versions >= 0.7.0.
* An [Amazon AWS](https://aws.amazon.com) account.

## Installation

    $ cd /path/to/statsd
    $ npm install statsd-cloudwatch-backend-units


## Configuration

Add `statsd-cloudwatch-backend` to the list of backends in the StatsD configuration file:

    {
        backends: ["statsd-cloudwatch-backend-units"]
    }

Add the following basic configuration information to the StatsD configuration file.

    {
        cloudwatch: {
            namespace:  "my.app",
            region: "us-west-2",
            dimensions: {},
            
            // My hack allows you to overwrite the unit type according to the metric name
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

The *namespace*, and *region* settings are required. The *dimensions* map is optional. The *accessKeyId* and *secretAccessKey* settings are not required if the EC2 instance is configured with an instance-profile with permissions to write to CloudWatch.
