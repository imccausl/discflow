import { getAnalytics } from 'firebase/analytics'
import { getApps, initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import config from '../../firebase.config.json'

function initialize() {
    const firebaseApp = getApps().length ? getApps()[0] : initializeApp(config)
    const auth = getAuth(firebaseApp)
    const analytics =
        firebaseApp.name && typeof document !== 'undefined'
            ? getAnalytics(firebaseApp)
            : null

    console.log('initializing')
    if (process.env.NODE_ENV === 'development') {
        console.log('setting up emulator')
        connectAuthEmulator(auth, 'http://127.0.0.1:9099')
    }

    return { app: firebaseApp, auth, analytics }
}

const { app, auth, analytics } = initialize()

export { app, auth, analytics }
