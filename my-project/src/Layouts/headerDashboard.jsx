export default function Header(){
    return(
        <div className="w-96 bg-main-color p-4 flex justify-between items-center">
            <div className="title text-zinc-900 text-3xl font-bold font-['Poppins']">Dashboard</div>
            <img src="https://storage.googleapis.com/e-complaint-assets/profile-photos/admin-default.jpg" 
            alt="profile"
            className="w-12 h-12" />
        </div>
    )
}