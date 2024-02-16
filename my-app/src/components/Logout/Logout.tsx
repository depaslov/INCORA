import React from 'react';

const Logout: React.FC = () => {
  const handleLogout = () => {
    // Perform logout logic here (not implemented in this example)
    console.log('Logging out...');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
