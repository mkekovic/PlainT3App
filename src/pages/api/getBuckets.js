// Create service client module using ES6 syntax.
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
import {ServiceConfigurationOptions} from 'aws-sdk/lib/service';




export default async function handler(req, res) {

    // Set the AWS Region.
    const REGION = "us-west-2";
    // Create an Amazon S3 service client object.
    const s3Client = new S3Client({ region: REGION, profile: 'data-architect-west' });

    try {
        const data = await s3Client.send(new ListBucketsCommand({}));
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({ data })
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).end(error.message);
    }
}
