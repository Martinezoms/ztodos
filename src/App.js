import React, { useState } from 'react';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Userpage from './Pages/UserPage';

function App() {
  const [page, setPage] = useState('home');
  return (
    <div>
      {page === 'home' ? <Login setPage={setPage} /> : page === 'signup' ? <Signup setPage={setPage} /> : <Userpage />}
    </div>
  );
}

export default App;
