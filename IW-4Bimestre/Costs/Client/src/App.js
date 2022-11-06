// Imports: 

import { createContext, useState } from 'react';
import './App.css';

import Rotas from './Rotas';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState({ loggedIn: false });

  return (
    <UserContext.Provider value={{ user, setUser}}>

      <Rotas/>

    </UserContext.Provider>
  );
}

export default App;
