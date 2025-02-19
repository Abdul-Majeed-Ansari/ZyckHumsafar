import Navbar from './Navbar'
import Footer from './Footer'
import Topbar from './Topbar'

const Layout = ({children}) => {
  return (
    <div>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
