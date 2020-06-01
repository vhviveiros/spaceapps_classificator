import React, {useState} from 'react';
import {FiArrowLeft } from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import teste from "../../assests/x-ray.jpg";
import './styles.css';

export default function NewIncidents(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <h1>X-ray Image</h1>

                    <center>
                    <img src={teste} height ={200} width = {230} alt= "covid CAD" />                    
                    </center>
                    

                    <form >  
                        <button className="button" type="submit">Exam diagnosis</button>
                    </form>                    

                </section>

                <form >
                    <h1>Register new exam</h1>
                    <input placeholder = "Identificador" />                                      

                    <Link className="button" to= "/exam/result" >
                        Exam diagnosis
                    </Link>
                    
                    <Link className="back-link" to= "/exams" >
                        <FiArrowLeft size={16} color="#7144A5" /> 
                        back to home
                    </Link>
                </form>
                
            </div>
        </div>
    );
}