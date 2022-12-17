import React from "react";  
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import "./Footer.css"


const Footer = () => {
    return ( 
        <div className='footer'>
        <div className='container'>
     <h1> Faça parte de nossa familia</h1>
     <h3> Receber ofertas exclusivas, cupons de desconto e novidades de lançamento</h3>
               <h4>Institucional</h4>
               <ul>
                <p>Sobre nós</p>
                <p>Politica</p>
                <p>Pagamentos e envios</p>
                <p>Trocas e Devoluçoes</p>
                <p>Termos de Serviço</p>
                <p>Politica de Reembolso</p>
                </ul>
    
                 </div>
                 <div className='footer'>
    
                <h4>Suport</h4>
                <ul>
                <p>Fale conosco </p>
                <p>Perguntas free</p>
                </ul>
                </div>
    
    
                <h4>Cliente</h4>
                <div className='Meus Pedidos'></div>
                <p>Rastrear Pedidos</p>
                <li>Politica e privacidade</li>
                <div className='Redes Sociais'>
                <FaFacebook />
                <FaInstagram />
                <FaEnvelope /> pettoti@gmail.com
                <FaPhoneAlt />32323232<br />
                <p><span> Copy codigo </span>&copy; 2022</p>
            </div> 
            </div>
    )
}
export default Footer;