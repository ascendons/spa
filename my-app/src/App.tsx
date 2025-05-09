// import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />
      {/* Your other page content  */}
      <div className="pt-20">
         {/* Add main content here, the pt-20 adds padding so content doesn't go under the header */}
      </div>
    </div>
  );
};

export default App;