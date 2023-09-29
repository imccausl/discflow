import { getAnalytics } from 'firebase/analytics'
import { getApps, initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import admin from 'firebase-admin'
import {
    applicationDefault,
    initializeApp as initializeAdminApp,
} from 'firebase-admin/app'
import { config } from './config'

function initialize() {
    const firebaseApp = getApps().length ? getApps()[0] : initializeApp(config)
    const auth = getAuth(firebaseApp)
    const analytics =
        firebaseApp.name && typeof window !== 'undefined'
            ? getAnalytics(firebaseApp)
            : null

    console.log('initializing')
    if (process.env.USE_FIREBASE_EMULATOR === 'true') {
        console.log('setting up emulator')
        connectAuthEmulator(auth, 'http://127.0.0.1:9099')
    }

    if (!admin.apps.length) {
        initializeAdminApp({
            credential: applicationDefault(),
            projectId: 'discflow-bed9f',
        })
    }

    return { app: firebaseApp, auth, adminAuth: admin.auth(), analytics }
}

const { app, auth, adminAuth, analytics } = initialize()

export { app, auth, adminAuth, analytics }
