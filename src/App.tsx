import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to React with Tailwind CSS!</h1>
        <p className="text-gray-600">This is a sample component styled with Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default App;