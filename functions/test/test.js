require("dotenv").config()
const admin = require("firebase-admin")
const serviceAccount = {
  type: process.env.FB_TYPE,
  project_id: process.env.FB_PROJECT_ID,
  private_key_id: process.env.FB_PRIVATE_KEY_ID,
  private_key: process.env.FB_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.FB_CLIENT_EMAIL,
  client_id: process.env.FB_CLIENT_ID,
  auth_uri: process.env.FB_AUTH_URI,
  token_uri: process.env.FB_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER_CERT_UTL,
  client_x509_cert_url: process.env.FB_CLIENT_PROVIDER_CERT_UTL
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dashboard-test-e60f0.firebaseio.com"
})

const db = admin.firestore()

exports.handler = (event, context, callback) => {
  db.collection("orders").add({
    name: "fake order"
  })

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: `Test called`
    })
  })
}
