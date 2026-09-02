import type { RouteRecord } from 'vite-react-ssg'
import PartTimeCfoPage from './pages/prt-cfo/PartTimeCfoPage'
import ThankYou from './pages/thank-you'

const routes: RouteRecord[] = [
  {
    path: '/',
    Component: PartTimeCfoPage,
  },
  {
    path: '/thank-you',
    Component: ThankYou,
  },
]

export default routes
