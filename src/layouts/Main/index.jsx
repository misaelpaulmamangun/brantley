import Header from '../Header'
import Footer from '../Footer/Footer'
import css from './main.module.css'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={css.main}>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
