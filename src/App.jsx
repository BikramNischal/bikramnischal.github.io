import { useState } from 'react'

import Profile from './Components/Profile'
import Details from "./Components/Details";



function App() {

    return (
        <div className="w-full p-2 bg-zinc-800 text-white sm:p-4 lg:pl-[50px]">
            <Profile />
            <Details /> 
        </div>
    );
}

export default App
