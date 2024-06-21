import React from 'react';
import Progress from '../components/Dashboard/Progress';
import HeaderLayout from '../components/Header/HeaderLayout';
import SidebarLayout from '../components/Header/SidebarLayout';
import ChartTotalUser from '../components/Dashboard/ChartTotalUser';

const Dashboard = () => {
const userData = [50, 75, 150, 100, 200, 175, 250, 300, 275, 320, 400, 500]; 

return (
<>
    <section className="flex w-full min-h-screen">
        <SidebarLayout />
        <div className="flex flex-col flex-grow lg:ml-[287px]">
            <HeaderLayout />
            <div className="flex-grow bg-light-2 p-8 overflow-y-auto">
                <Progress />
                <ChartTotalUser data={userData} />
            </div>
        </div>
    </section>
</>
);
}

export default Dashboard;
