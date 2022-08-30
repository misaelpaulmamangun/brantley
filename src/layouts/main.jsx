import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={`${className}`}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
