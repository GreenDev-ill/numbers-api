import './style.css'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <header>
                <h1>Rick and Morty API REST</h1>
                <nav>
                    <ul>
                        <Link to='/'>
                            <button type="button">Personagens</button>
                        </Link>
                        <Link to='/about'>
                            <button type ="button">Sobre</button>
                        </Link>
                         <Link to='/episodes'>
                            <button type ="button">Episódeos</button>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}