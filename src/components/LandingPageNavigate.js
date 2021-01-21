import React from 'react'
import { NavLink } from 'react-router-dom'

export const LandingPageNavigate = () => {
    return (
        <div className="Navigate-container">
            <NavLink exact={true} activeClassName="active" to="/about" > 
                <div className="Navigate-container__child container1">
                    <h3>Who Am I</h3>
                    <img className="Navigate-container__child-imgWho " alt="work" ></img>
                </div> 
            </NavLink>
            <NavLink exact={true} activeClassName="active" to="/projects" > 
                <div className="Navigate-container__child container2">
                    <h3>My work</h3>
                    <img className="Navigate-container__child-imgWork " alt="work" ></img>
                </div> 
            </NavLink>
            <NavLink exact={true} activeClassName="active" to="/contact" > 
                <div className="Navigate-container__child container3">
                    <h3>Contact</h3>
                    <img className="Navigate-container__child-imgContact " alt="work" ></img>
                </div> 
            </NavLink>
            
        </div>
    )
}
