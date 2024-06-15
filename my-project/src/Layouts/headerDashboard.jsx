import { useLocation } from "react-router-dom"

export default function Header(){
    const location = useLocation();

    const getTitle = (path) =>{
        switch(path){
            case '/dashboard' : return 'Dashboard';
            case '/complaint' : return 'Complaint';
            case '/chat-user' : return 'Chat Page';
            case '/category' : return 'Category';
            case '/news' : return 'News';

            default :return 'Dashboard';
        }
    }
    return(
        <div className=" bg-main-color lg:ml-72 top-0 right-0 p-4 flex justify-between items-center">
            <div className="title text-zinc-900 text-3xl font-bold font-poppins">{getTitle(location.pathname)}</div>
            <img src="https://storage.googleapis.com/e-complaint-assets/profile-photos/admin-default.jpg" 
            alt="profile"
            className="w-12 h-12 rounded-full" />
        </div>
    )
}