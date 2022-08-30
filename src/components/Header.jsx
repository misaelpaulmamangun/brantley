import { useState } from 'preact/hooks'
import nav from '../data/nav.json'

const Header = () => {
  const [active, setActive] = useState(false)

  const { routes, brand } = nav

  return (
    <>
      <header className='has-background-white'>
        <nav
          className='navbar container'
          role='navigation'
          aria-label='main navigation'
        >
          <div className='navbar-brand'>
            <a className='navbar-item' href={brand.url}>
              {brand.logo ? (
                <img src={brand.logo} width={112} height={28} />
              ) : (
                <p className='is-size-4 is-uppercase has-text-weight-bold'>
                  {brand.title}
                </p>
              )}
            </a>
            <a
              role='button'
              className={`navbar-burger ${active ? 'is-active' : null}`}
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
              onClick={() => setActive(!active)}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div
            id='navbarBasicExample'
            className={`navbar-menu ${active ? 'is-active' : null}`}
          >
            <div className='navbar-end'>
              {routes.map(({ name, path }) => (
                <a
                  className='navbar-item has-text-weight-semibold'
                  href={path}
                  key={path}
                >
                  {name}
                </a>
              ))}
              <div class='buttons is-hidden-mobile'>
                <a class='button is-primary'>
                  <strong>Login</strong>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
