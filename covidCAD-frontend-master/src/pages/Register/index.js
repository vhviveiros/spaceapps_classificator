import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import ImagemLogo from "../../assests/logo2.png";

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ImagemLogo} height ={200} width = {230} alt= "Logo" />

                    <h1>Register</h1>

                    <p>Make your registration, enter the platform and consult the exam result.</p>

                    <Link className="back-link" to= "/" >
                        <FiArrowLeft size={16} color="#7144A5" /> 
                        back to login
                    </Link>

                </section>
                <form >
                    <input 
                        placeholder = "Name" 
                    />
                    <input
                        placeholder = "E-mail " 
                        type="email"
                       
                    />
                    <input 
                        placeholder = "Password "
                        type = "password"                
                    />

                    <input 
                        placeholder = "Password again"
                        type = "password"                
                    />

                    
                    <Link className="button" to= "/" >
                        Register 
                    </Link>
                    
                </form>
            </div>
        </div>
    );
}