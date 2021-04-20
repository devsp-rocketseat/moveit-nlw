
import { ChallengesPrivider } from '../contexts/ChallengesContext'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesPrivider>
      <Component {...pageProps} />
    </ChallengesPrivider>
  )
}

export default MyApp
