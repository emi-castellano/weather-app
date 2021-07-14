import LeftPanel from '../left-panel/LeftPanel'
import RightPanel from '../right-panel/RightPanel'

import './dashboard.scss'

const Dashboard = props => {
   return <section className='dashboard'>
     <LeftPanel />
     <RightPanel />
   </section>
}

export default Dashboard