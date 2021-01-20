import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

export const NavBar = () => {
    return (
        <div className="main-nav">
            <NavLink  exact={true} activeClassName="active" to="/">
                <div className="main-nav__logo">
                        <Button size="large">
                        <img className="img-logo" alt="Karim"></img>
                        Karim Arbia
                        </Button>
                        
                </div>
            </NavLink>
            <div className="main-nav__paths">

            <NavLink exact={true} activeClassName="active" to="/about" ><Button  style={{fontWeight: "600", color:"#5F6773"}} size="large">About</Button>
            </NavLink >
            <NavLink exact={true} activeClassName="active" to="/projects"><Button size="large" style={{fontWeight: "600", color:"#5F6773"}}> Projects</Button>
            </NavLink >
            </div>
            <NavLink exact={true} to="/contact">
                <button className="pure-button fuller-button white">Lets talk</button>
            </NavLink>


        </div>

    )
}
