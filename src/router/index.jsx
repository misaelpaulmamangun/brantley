import { Router, Route } from 'preact-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

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
