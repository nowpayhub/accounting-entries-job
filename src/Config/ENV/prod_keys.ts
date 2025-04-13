module.exports = {
  nodeEnv: process.env.NODE_ENV,
  databaseURL: process.env.databaseURL,
  serverKey: process.env.serverKey,
  hashCode: process.env.HASHCODE,
  dbConnection: {
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
  },
  AWS: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    snsRegion: process.env.SNS_REGION,
    sercetManagerRegion: process.env.SECERTMANAGER_REGION,
    s3BucketRegion: process.env.S3BUCKET_REGION,
    xSecretKeyName: process.env.xSecretKeyName,
  },
  GCP: {
    projectId: process.env.GCP_PROJECT_ID,
  },
};
