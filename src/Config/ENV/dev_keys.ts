import { config } from 'dotenv';
config();
module.exports = {
  nodeEnv : process.env.NODE_ENV || "dev",
  sesLogo:
    'https://s3.amazonaws.com/elasticbeanstalk-us-east-1-927288046810/Logos/logo.png',
  serviceAccount: {
    type: 'service_account',
    project_id: 'nowpay-5ceea',
    private_key_id: '697fbfe496fa192aef832b033eaac851f6966bd0',
    private_key: process.env.private_key,
    client_email:
      'firebase-adminsdk-jij3j@nowpay-5ceea.iam.gserviceaccount.com',
    client_id: '103684004745740339563',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jij3j%40nowpay-5ceea.iam.gserviceaccount.com',
  },
  databaseURL: 'https://nowpay-5ceea.firebaseio.com',
  AWS: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: 'us-east-1',
    envName: 'Nowpay-dev',
    envId: 'e-x6pkbuaxtm',
    appName: 'Nowpay',
  },
  megPostUrl: 'https://x4jk4.api.infobip.com/sms/1/text/single',
  loggerHost: 'ec2-3-81-67-59.compute-1.amazonaws.com',
  loggerPort: 12345,
  JWT_SECRET: 'process.env.JWT_SECRET',
  NowPayURL: process.env.nowpayURL,
  amanKeys: {
    borgPIN: 'f4cc6482786a07c44b0ddfe42d26377f3dbb2a5f6a6e476c11c17db486d9e29f',
    termID: 990014,
    encryptionKey: 'ahmosSI+4ZO0pEpKgfnOsA==',
    amanURL: process.env.amanURL,
  },
  hashCode: 'LOZtDnMjL17',
  dbConnection: {
    host: process.env.RDS_HOSTNAME ||  'development.ckyheaa8zau7.eu-west-1.rds.amazonaws.com', //process.env.RDS_HOSTNAME,,,
    user: process.env.RDS_USERNAME ||  'nowpay', //process.env.RDS_USERNAME,,,
    password: process.env.RDS_PASSWORD ||  'RXC2{pyySEfX~9.<Sv6]$x', //process.env.RDS_PASSWORD,,,
    port: process.env.RDS_PORT ||  3306, //process.env.RDS_PORT,,,
    database: process.env.RDS_DATABASE ||  'Nowpay',
  },

  rootURL: 'https://dev.admin.nowpay.cloud/dashboard',
  restrictMode: process.env.restrict_mode,
  migrationMode: process.env.migrationMode,
  migrationForceDown: process.env.migrationForceDown,
  infoCreds: process.env.infoCreds,

  payfort: {
    APIUrl: process.env.payfortAPIUrl,
    shaPharse: process.env.shaPharse,
    access_code: process.env.access_code,
    merchant_identifier: process.env.merchant_identifier,
  },
  jwtSecret: process.env.jwtSecret || 'secret',

  ebcURL:
    process.env.ebcURL ||
    'https://172.18.2.24/EG-ACH-Corporate-Webstation-Token/CorpayWebAPI',
  otpCode: process.env.code || null,
  code: process.env.code || 'uyV9YOf09FiMM7m8tmJgX5FP9hMJAKiU',
  iv: process.env.iv || 'fobywzivaejgoywc',

  TruckingURL: process.env.TruckingURL || 'https://dev.api.trucking.nowpay.cloud',
  serverKey : process.env.serverKey,

  analytics : {

    "access-key" : process.env.analyticsAccessKey || "Zq4t7w!z%C*F)J@NcRfUjXn2r5u8x/A?",
    "url" : process.env.analyticsURL || "http://dataanalysisdev-env.eba-ws93east.eu-central-1.elasticbeanstalk.com",
    "prod-key" : process.env.analyticsProdAccessKey,
    "dev-key" : process.env.analyticsDevAccessKey

  },
  clearanceFees: process.env.clearanceFees || 40,
  S3_Configs: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.S3_region || 'us-east-2',
  },
  Bcrypt_Configs: {
    salt: process.env.Bcrypt_salt || 10,

  },

  achPrivateKey: process.env.achPrivateKey,
  xNowpaySecretName: process.env.xNowpaySecretName || 'xNowpaySecretName',
  botpoisonSecretKey: process.env.botpoisonSecretKey || 'sk_691f999e-d4ca-4d9b-81b7-24d6814b9229',
  
};
