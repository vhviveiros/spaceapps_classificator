import React, {useState} from 'react';
import {FiLogIn } from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import ImagemHeros from "../../assests/logoicon.png";
import ImagemLogo from "../../assests/logo.svg";

import './styles.css';

export default function Logon(){
    return (
        
        <div className= "login-container">
            <div className="content">
                <img src={ImagemHeros} height = {300} width = {400} alt= "Heroes" />
                <section className="form">
                    

                    <form>
                        <h1>Make your Login</h1>

                        <input placeholder="E-mail" />
                        <input placeholder="Password" />

                        <Link className="button" to= "/exams" >
                            Log in
                        </Link>
                        

                        <Link className="back-link" to= "/register" >
                            <FiLogIn size={16} color="#7144A5" /> 
                            No Registration
                        </Link>
                    </form>

                    

                </section>
            </div>
        </div>
        
    );
}
