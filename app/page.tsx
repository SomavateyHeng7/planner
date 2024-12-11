import React from 'react';
import Sidebar from '@/components/sidebar';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <h1 className="text-2xl font-bold">Welcome to the Study Planner!</h1>
        <p>Content goes here...</p>
      </div>
    </div>
  );
};

export default App;
