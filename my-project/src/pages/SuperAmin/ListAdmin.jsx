import SuperAdminPanel from "../../components/SuperAdmin/SuperAdminPanel";
import ListAdminLayout from "../../components/SuperAdmin/ListAdminLayout";
import Header from '../../Layouts/headerDashboard'
import SideNar from '../../Layouts/sidebar'

export default function ListAdmin() {
    return (
        <main>
            <Header />
            <SideNar />
            <SuperAdminPanel />
            <ListAdminLayout />
        </main>
    )
}