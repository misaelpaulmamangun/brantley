import css from './footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={css.footer}>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <p className='is-size-4'>About</p>
              <ul>
                <li>Reviews</li>
                <li>How it works</li>
              </ul>
            </div>
            <div className='column'>
              <p className='is-size-4'>Company</p>
              <ul>
                <li>Pricing</li>
                <li>Case studies</li>
                <p>Products</p>
              </ul>
            </div>
            <div className='column'>
              <p className='is-size-4'>Support</p>
              <ul>
                <li>Documentation</li>
                <li>Data securities</li>
              </ul>
            </div>
            <div className='column'>
              <p className='is-size-4'>Legal</p>
              <ul>
                <li>Terms and condition</li>
                <li>Privacy policies</li>
                <li>Cookie information</li>
              </ul>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} - All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
