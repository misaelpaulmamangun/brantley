import Header from '../Header'
import Footer from '../Footer/Footer'
import css from './main.module.css'

const MainLayout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={`${css.main} ${className}`}>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
