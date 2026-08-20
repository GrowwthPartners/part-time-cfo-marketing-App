import type { RouteRecord } from 'vite-react-ssg'
import PartTimeCfoPage from './pages/prt-cfo/PartTimeCfoPage'

const routes: RouteRecord[] = [
  {
    path: '/',
    Component: PartTimeCfoPage,
  },
]

export default routes
