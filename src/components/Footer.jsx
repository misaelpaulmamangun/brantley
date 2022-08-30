import footer from '../data/footer.json'

const Footer = () => {
  const { routes } = footer
  return (
    <>
      <footer className='has-background-light footer'>
        <div className='container'>
          <div className='columns'>
            {routes.map((route, index) => (
              <div className='column' key={index}>
                <p className='is-size-4 pb-4 has-text-weight-semibold'>
                  {route.title}
                </p>
                <ul>
                  {route.child.map((item, index) => (
                    <li key={index}>
                      <a
                        className='has-text-dark has-text-weight-medium'
                        href={item.link}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className='has-text-centered'>
            &copy; {new Date().getFullYear()} - All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
