import * as firebaseAdmin from 'firebase-admin'

import * as dotenv from 'dotenv'
dotenv.config()

class FirebaseAdminFacade {
  initialize() {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(
        JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
      ),
      databaseURL: process.env.FIREBASE_DB_URL,
    })
  }

  async verifyToken(idToken) {
    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)
      return decodedToken.uid
    } catch (error) {
      console.log(error)
      return undefined
    }
  }
}

export default FirebaseAdminFacade
