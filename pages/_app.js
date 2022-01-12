import '../styles/index.css'
import { useState } from 'react'
import { SiteContext } from '../context/use-site'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const { settings } = pageProps
  const [siteSettings] = useState(settings)

  return (
    <SiteContext.Provider value={siteSettings}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SiteContext.Provider>
  )
}

export default MyApp
