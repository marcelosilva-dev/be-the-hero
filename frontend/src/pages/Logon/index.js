import React from  'react'
import { Link , useHistory} from 'react-router-dom'
import './styles.css'
import HeroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import api from '../../services/api'
import { useState } from 'react'

function Logon() {
    const [id , setID] = useState('')
    const history = useHistory('')

        async function handleLogin(e) {
        e.preventDefault()
        try {
            const response = await api.post('login', {id})

            localStorage.setItem('ongId' , id)
            localStorage.setItem('ongName' , response.data.name)
            
            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente. '+err)
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be the hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input value={id} onChange={e => setID(e.target.value)}
                    type="text" placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                    <FiLogIn size="16" color="#e02041"/>
                     Não tenho cadastro
                     </Link>
                </form>
            </section>
            <img src={HeroesImg} alt="Heroes"/>
        </div>
    )
}

export default Logon;