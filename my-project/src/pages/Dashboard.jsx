import React from 'react';
import Progress from '../components/Dashboard/Progress';
import HeaderLayout from '../components/Header/HeaderLayout';
import SidebarLayout from '../components/Header/SidebarLayout';

const Dashboard = () => {
  return (
    <>
      <section className="flex w-full min-h-screen">
        <SidebarLayout />
        <div className="flex flex-col flex-grow lg:ml-[287px]">
          <HeaderLayout />
          <div className="flex-grow bg-light-2 p-8 overflow-y-auto">
            <Progress />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
