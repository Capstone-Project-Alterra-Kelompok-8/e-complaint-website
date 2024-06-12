import ListComplaint from '../components/Complaint/ListComplaint'
import Header from '../Layouts/headerDashboard'
import SideNar from '../Layouts/sidebar'

const Complaint = () => {
  return (
    <main>
      <Header />
      <SideNar />
      <ListComplaint />
    </main>
  )
}

export default Complaint
