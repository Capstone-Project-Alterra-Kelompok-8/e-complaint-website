import SuperAdminPanel from "../../components/SuperAdmin/SuperAdminPanel";
import ListUserLayout from "../../components/SuperAdmin/ListUserLayout";
import Header from '../../Layouts/headerDashboard'
import SideNar from '../../Layouts/sidebar'

export default function ListUser() {
    return (
        <>
            <Header />
            <SideNar />
            <SuperAdminPanel />
            <ListUserLayout />
        </>
    )
}