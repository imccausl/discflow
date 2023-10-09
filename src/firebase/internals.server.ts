import admin from 'firebase-admin'
import {
    applicationDefault,
    initializeApp as initializeAdminApp,
} from 'firebase-admin/app'

if (!admin.apps.length) {
    initializeAdminApp({
        credential: applicationDefault(),
        projectId: 'discflow-bed9f',
    })
}

const adminAuth = admin.auth()

export { adminAuth }
