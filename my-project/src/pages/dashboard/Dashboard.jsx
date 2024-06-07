import Sidebar from "../../Layouts/sidebar"
import Header from "../../Layouts/headerDashboard"

export default function DashboardPages(){
    return(
        <div className="flex flex-row justify-between">
            <Sidebar/>
            <Header/>
        </div>
    )
}