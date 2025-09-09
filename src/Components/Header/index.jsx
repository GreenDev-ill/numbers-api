import './style.css'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <>
            <header>
                <h1>Numbers API REST</h1>
                <nav>
                    <ul>
                        <Link to='/'>
                            <button type="button">Home</button>
                        </Link>

                    </ul>
                </nav>
            </header>
        </>
    )
}