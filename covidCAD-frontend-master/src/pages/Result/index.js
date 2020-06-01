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
                    <Link className="back-link" to= "/exams" >
                        <FiArrowLeft size={16} color="#7144A5" /> 
                        back to home
                    </Link>
                </section>

                <section>
                    <h1>Result</h1> 

                    <strong>Diagnosis:</strong>
                    <p>positive</p>  

                    <strong>Accuracy:</strong>
                    <p>90 %</p>
                    

                    <button className="button" type="submit">Print Complete Diagnosis</button>                   
                                   
                    
                </section>



                
                
            </div>
        </div>
    );
}