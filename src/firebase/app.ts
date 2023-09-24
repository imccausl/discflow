import { initializeApp, getApps} from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { config } from './config'

function initialize() {
  const firebaseApp = getApps().length ? getApps()[0] : initializeApp(config)
  const auth = getAuth(firebaseApp)
  const analytics = firebaseApp.name && typeof window !== 'undefined' ? getAnalytics(firebaseApp) : null

  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    connectAuthEmulator(auth, 'http://localhost:9099')
  }

  return { app: firebaseApp, auth, analytics }
}

const { app, auth, analytics } = initialize()

export { app, auth, analytics }
