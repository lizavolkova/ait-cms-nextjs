import '../styles/index.css'
import { useState } from 'react'
import { SiteContext } from '../context/use-site'

function MyApp({ Component, pageProps }) {
  const { settings } = pageProps
  const [siteSettings] = useState(settings)

  return (
    <SiteContext.Provider value={siteSettings}>
      <Component {...pageProps} />
    </SiteContext.Provider>
  )
}

export default MyApp
