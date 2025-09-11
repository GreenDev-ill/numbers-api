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
                            <button type="button">Math Fact Page</button>
                        </Link>
                        <Link to='/trivia'>
                            <button type="button">Trivia Fact Page</button>
                        </Link>
                        <Link to='/date'>
                            <button type="button">Date Fact Page</button>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}