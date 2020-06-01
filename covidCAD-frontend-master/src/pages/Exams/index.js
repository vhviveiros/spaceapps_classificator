import React, {useEffect, useState} from 'react';
import {FiPower, FiArrowRight } from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

import ImagemLogo from "../../assests/logo2.png";
import teste from "../../assests/x-ray.jpg";

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={ImagemLogo} height ={100} width = {80} alt= "covid CAD" />

                <span>Hello, Léo</span>

                <Link className="button" to= "/exam/new" >
                    Register new exam
                </Link>
                <button type="button">
                    <FiPower size={18} color= "#7144A5"></FiPower>
                </button>
            </header>

            <h1>Exams</h1>

            <ul>                
                <li > 
                    <strong>Id:</strong>
                    <p>Id 10</p>
                    

                    <strong>Result</strong>
                    <p>True</p>

                    <strong>X-ray Image</strong>
                    <img src={teste} height ={50} width = {55} alt= "covid CAD" />

                    <button type="button" >
                        <Link to = "/exam/result">
                            <FiArrowRight size="20" color="#7144A5"></FiArrowRight>
                        </Link>
                    </button>
                    
                </li> 
            </ul>

            
        </div>
    );
}