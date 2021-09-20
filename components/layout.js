// import Alert from '../components/alert'
import Menu from '../components/menu'
import Footer from '../components/footer'
import Meta from '../components/meta'

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
