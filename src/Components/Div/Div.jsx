import './Div.css'
import Paragraph from '../Paragraph/Paragraph';
import { useContext } from 'react';
import {ThemeContext} from '../../App'

function Div(){
    const {theme,setTheme} = useContext(ThemeContext) 
 
    return(
        <> 
            <Paragraph>{theme}</Paragraph>  
            <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light') }>change theme</button>
        </>
    )
}

export default Div;