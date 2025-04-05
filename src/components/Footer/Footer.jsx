'use client'
import "./footer.css"
import Link from 'next/link'
import React, { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { EmailContext } from "../EmailContext";
import { useRouter } from 'next/navigation';
export default function Footer() {
   const { setEmail } = useContext(EmailContext);
   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };
   const router = useRouter();
   const handleRedirect = () => {
     router.push('/contatos'); // Redireciona para "/contatos"
   };
   return (
      <footer>
         <div className="footer_content">
            <div className="footer_contacts">
               <h1>Nexus</h1>
               <p>O reconhecimento da própria ignorância, <br /> é o primeiro passo para o autocinhecimento.</p>
               <div className="footer_social_media">
                  <a href="https://github.com/LuqueMT" className="footer-link github">
                     <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/luís-henrique-martins-troquato-47b91318a/" className="footer-link linkedin">
                     <FaLinkedin />
                  </a>
                  <a href="https://wa.me/5195305637?text=Olá, cheguei aqui através do seu portifólio e gostaria de saber mais sobre seus serviços!" className="footer-link whatsapp">
                     <FaWhatsapp />
                  </a>
               </div>
            </div>
            <div>
               <h3>Nexus</h3>
               <ul className="footer-list">
                  <li>
                     <a href="#" className="footer-link">Sobre</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Projetos</a>
                  </li>
                  <li>
                     <a href="/thanks" className="footer-link">Contatos</a>
                  </li>
               </ul>
            </div>
            <div>
               <h3>Referencias</h3>
               <ul className="footer-list">
                  <li>
                     <a href="#" className="footer-link">Alura</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Hashtag Programador</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Dev Em Dev</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Sujeito Programador</a>
                  </li>
                  <li>
                     <a href="#" className="footer-link">Matheus Battisti</a>
                  </li>
               </ul>
            </div>
            <div className="footer_subscribe">
               <h3>E-mail</h3>
               <p>
                  Digite seu email e clique no botão ao lado para enviar um e-mail direto.
               </p>
               <div className="input_group">
                  <input type="email" className="email-input" name="email" placeholder="Digite seu e-mail" onChange={handleEmailChange} />
                  <button type="submit" onClick={handleRedirect}>
                     <HiOutlineMail className="fa-regular fa-envelope" />
                  </button>
                  <input type="hidden" name="redirectTo" value="/contatos"></input>
               </div>
            </div>
         </div>
         <div className="footer-copyright">
         &copy;
            2025 all rights reserved.
         </div>
      </footer>
   )
}