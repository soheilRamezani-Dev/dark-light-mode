import Content from "./components/body/Content";
import Header from "./components/header/Header";
import modeContext from "./contexts/modeContext";

import { useState } from "react";

const App = () => {
    const [mode , setMode] = useState('light')
    return <modeContext.Provider value={{mode:mode , setMode:setMode}}>
        <Header/>
        <Content/>
    </modeContext.Provider>
}
 
export default App;