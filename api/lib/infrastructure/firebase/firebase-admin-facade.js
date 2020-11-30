import * as firebaseAdmin from 'firebase-admin'
import { v4 as uuidv4 } from 'uuid'

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

      const user = {
        name: decodedToken.name,
        email: decodedToken.email ?? uuidv4() + '@no-email.com',
        userId: decodedToken.uid,
        photoUrl: decodedToken.picture ?? null,
      }

      return user
    } catch (error) {
      console.log(error)
      return undefined
    }
  }
}

export default FirebaseAdminFacade
