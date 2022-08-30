import { Router, Route } from 'preact-router'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'

const route = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

export const Routes = () => {
  return (
    <>
      <Router>
        {route.map(({ path, component }) => (
          <Route path={path} component={component} />
        ))}
      </Router>
    </>
  )
}
