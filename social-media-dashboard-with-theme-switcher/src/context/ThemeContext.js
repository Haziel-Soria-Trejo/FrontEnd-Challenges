import { createContext, useState } from "react";

const ThemeContext = createContext()
const initContext = 'dark'

function ThemeProvider({children}){
    const [theme, setTheme] = useState(initContext)

    const handleTheme = e=>{
        if(e.target.value === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    const data = {theme,handleTheme}

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export {ThemeProvider}
export default ThemeContext