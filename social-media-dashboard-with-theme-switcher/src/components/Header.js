import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

export default function Header(){
    const {theme,handleTheme} = useContext(ThemeContext)
    return(
<header>
        <div>
        <h1>Social Media Dashboard</h1>
        <p id="totalflwrs_id">Total Followers: 23,004</p>
        </div>

        <div>
            <p>Dark mode</p>
            <label className="switch">
                <input type="checkbox" className='theme-input' defaultChecked onChange={handleTheme} value={theme}></input>
                <span className="slider"></span>
            </label>
        </div>

      </header>
    )
}