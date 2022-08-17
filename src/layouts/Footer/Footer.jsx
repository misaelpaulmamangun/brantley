import css from './footer.module.css'
import footer from './../../schemas/footer.json'

const Footer = () => {
  const { routes } = footer
  return (
    <>
      <footer className={`${css.footer} has-background-white`}>
        <div className='container'>
          <div className='columns'>
            {routes.map((route, index) => (
              <div className='column'>
                <p className='is-size-4'>{route.title}</p>
                <ul>
                  {route.child.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} - All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
