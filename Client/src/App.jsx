import "./index.css";
import React, { useEffect, useState } from "react";
import Chatbox from "./Components/Chatbox";

function App() {
    return (
        <main className='bg-slate-600 min-h-screen flex justify-center bg-[url("/src/assets/background.png")] bg-no-repeat bg-cover'>
            <Chatbox />
        </main>
    );
}

export default App;
