// import Alert from '../components/alert'
import Menu from './menu'
import Footer from './footer'
import Meta from '../meta'
import useSticky from '../../hooks/useSticky'
import Header from './header'

export default function Layout({ preview, children }) {
  const { isSticky, element } = useSticky()

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<Alert preview={preview} />*/}
        <Menu sticky={isSticky} />
        <Header />
        <main ref={element}>{children}</main>
      </div>
      <Footer />
    </>
  )
}
