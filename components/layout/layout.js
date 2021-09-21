// import Alert from '../components/alert'
import Menu from './menu'
import Footer from './footer'
import Meta from '../meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<Alert preview={preview} />*/}
        <Menu />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
