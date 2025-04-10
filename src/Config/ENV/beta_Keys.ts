module.exports = {
  nodeEnv : process.env.NODE_ENV || "dev",
  sesLogo:
    'https://s3.amazonaws.com/elasticbeanstalk-us-east-1-927288046810/Logos/logo.png',
  serviceAccount: {
    type: 'service_account',
    project_id: 'nowpay-5ceea',
    private_key_id: '697fbfe496fa192aef832b033eaac851f6966bd0',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCu3ZQCQVAwtcFa\nuKPbk4GJ2V+VPpzxH7G8DeEOXcFY8tmLXqNHle/SPjAcizqoESAumNe2VKEhDeKH\ndF+gJ4soxtwLTOTiA/hDRrWfOw/I7cuy6pCp5aay3Irl7aiy13YLxgBt5PQs6xuz\nLjqc6Vk2aJxQgNt36d256ym87nDpCV/rsZERCcHaR5w6M8zdPn5fOhWvxyU/gVrj\nLc3LAc4knf/Wo97wC27fvjssTva/9BkWdqtN7HZGh3/9ur9fg8WckJ1AKQkE0E8L\nVLgZH8hy/sKXnxK2x3LVtprFXIZ50shcJD8PQkoZ3bThRd5ZQauOQjZxawbcQ6bh\nxYE6CKJ9AgMBAAECggEAAaZ4r57DLXqBpSQJ89gMCGuDQerR21qzuDUfUx3iZb8A\n+5Y8jz/kgATzOkm8F3r15Uqu+nsI/EFfymx4PJAy+YMK75ZdsJ5d+PCRZTvO9dP8\nsKcTD29p59U6AFqCVZG//PN07JSVE1lyrPm6NuHi5CcPlpjouVR9MbR889oCOcjH\nXrZb1HyYDLtEZOczdkzJ59uKtrNqh+QvSAkF2QaRahRqTlRnPammjkzvGXEgNwP2\nLZfcz5m0tRxkLbAiCA26CWaXu/Ggaz+UJlksYtqMwNI7nFSU+1hajqFzTGyjFNg+\neup5YPEqWtF9FMs/36IZ0+ufjpblxpPgYimmL/QTNwKBgQDZk6L7daVFDLHTtcKA\nPGzofJGSpo7Yj6TfVppiqMQrifs2nk4p9xt6ZADyYZesv2KKHxaCMugiyl9PwmNU\n3RXUEKKY/J4yAqSG5JPk0mCC3UP3hndB3Lc4YDWwWZyv/NM+XnypQ18DUNsIoap9\nqIuVeYtPL6bvNNVRW1MFs2pL8wKBgQDNvwZJ7SuPgEK+TmN9QvcqaqXKv329WUQY\nHvjfoLk15JafhXD+07sXeoB7Vu+43sMlmtnjYMC7c2yR4WUw5kfTsVWk1/wZfe3x\n/Ga0OOhpO+sKkz+xbNxS4sVyO8NaiAn1ijG1FLd8mXnrQIE7fMbdkvnCH9g4+832\nT5dh0kEjzwKBgQCQlPjzHKRslBj/VIMhcAX3IAAkcaXu5tVqzEPfV8K0JAbZrqzG\nWjzaQeYXKx79Xlh+7FWqw2Va6RwZBlW3qQq+VyeVfhkppnPqZ66Xme0kSSDHNYW+\nMItYXSaQP5xNnjZJ9cPlPq2+qFZFEBkZU40eERyvzDykLHmsjIFJAoaaXQKBgQCX\np42IIlSwgtcvlXJKG3k6f7/TEZEqZ8kEipfhpoO+kM7hqKegfgrzBG39/BfZSgHI\nDzs6GdAWm77UTLKc97DL/nPlfPqrA6LHcsd1YlkVcIAQnHcfXeGNCvCFAj491faZ\nUZLQKgQRyMMQP8zCP3gKTNLiXzyuzBSF0ScBiMxRCwKBgQCRcCzELc7shc4p2PKh\njObWbe97edFyZSMHp3WWo/pOQ70+aTkW3OBZ0/ueDbUyu66ZltYjoP6oex2l8ly/\n88ZF69LQS2ntqbf1221Jp11o7b85wfUUxb/DQ+DWk1vpsjNKB6CbsTM5/FHK0Ogq\n4haJfuoSybOX0RYSVXvDg6DW9Q==\n-----END PRIVATE KEY-----\n',
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
    region: process.env.region,
    envName: process.env.envName,
    envId: process.env.envId,
    appName: process.env.appName,
  },
  megPostUrl: 'https://x4jk4.api.infobip.com/sms/1/text/single',
  loggerHost: 'ec2-3-81-67-59.compute-1.amazonaws.com',
  loggerPort: 12345,
  JWT_SECRET: 'process.env.JWT_SECRET',
  jwtSecret: process.env.jwtSecret || 'secret',
  NowPayURL: process.env.nowpayURL,
  amanKeys: {
    borgPIN: 'f4cc6482786a07c44b0ddfe42d26377f3dbb2a5f6a6e476c11c17db486d9e29f',
    termID: 990014,
    encryptionKey: 'ahmosSI+4ZO0pEpKgfnOsA==',
    amanURL: process.env.amanURL,
  },
  dbConnection: {
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
  },
  rootURL: 'https://beta.admin.nowpay.cloud/dashboard',
  hashCode: 'LOZtDnMjL17',
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
  ebcURL:
    process.env.ebcURL ||
    'https://172.18.2.24/EG-ACH-Corporate-Webstation-Token/CorpayWebAPI',
  otpCode: process.env.code || null,
  code: process.env.code,
  iv: process.env.iv,

  TruckingURL: process.env.TruckingURL || 'https://beta.api.trucking.nowpay.cloud', 
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
    region: process.env.S3_region,
  },
  Bcrypt_Configs: {
    salt: process.env.Bcrypt_salt || 10,
  },
  xNowpaySecretName: process.env.xNowpaySecretName,
  botpoisonSecretKey: process.env.botpoisonSecretKey || 'sk_691f999e-d4ca-4d9b-81b7-24d6814b9229',
};
