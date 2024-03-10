import React from 'react';
import MobileSidebar from "../components/MobileSidebar";

const Jobs = ({Header}) => {
  return (
    <div className="flex flex-col h-full w-full pr-4 max-sm:px-4">
      <Header urlName="Jobs"/>
      <div className="mt-1 mb-2 h-full w-full">
        content
      </div>
    </div>
  )
}

export default Jobs
