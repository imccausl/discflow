import admin from 'firebase-admin'
import {
    applicationDefault,
    initializeApp as initializeAdminApp,
} from 'firebase-admin/app'

if (!admin.apps.length) {
    initializeAdminApp({
        credential: applicationDefault(),
        projectId: 'discflow-bed9f',
        databaseURL: 'https://discflow-bed9f-default-rtdb.firebaseio.com/',
    })
}

const adminAuth = admin.auth()

export { adminAuth }
