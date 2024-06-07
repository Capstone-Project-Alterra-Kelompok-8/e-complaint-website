import Sidebar from "../../Layouts/sidebar"
import Header from "../../Layouts/headerDashboard"

export default function DashboardPages() {
    return (
        <div className="flex flex-row-reverse">
            <Header />
            <div className="flex flex-col flex-grow">
                <Sidebar />
                <div className="flex-grow p-4">
                    {/* Konten utama dashboard */}
                </div>
            </div>
        </div>
    );
}