'use client'
import Navbar from "@/components/Navbar/Navbar";
import "./contatos.css";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import img from '@/../public/assests/icons/LikeABro.svg'
import React, { useContext } from "react";
import { EmailContext } from '../../components/EmailContext';

export default function Contatos() {
	const { email, setEmail } = useContext(EmailContext);
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	return (
		<>
			<Navbar />
			<div className="body-contatos">
				<section className="container-section">
					<div className="content-form">
						<h2>Contato</h2>
						<form action="https://formsubmit.co/luhemt03@outlook.com" method="post">

							<input type="hidden" name="_captcha" value="false" />
							<label>Nome</label>
							<input type="text" name="name" placeholder="Digite seu nome" autoComplete="off" required />
							<label>E-mail</label>
							<input 
								type="email" 
								name="email" 
								placeholder="Digite seu e-mail" 
								autoComplete="on" 
								required
								value={email}
								onChange={handleEmailChange} />
							<label>Mensagem</label>
							<textarea name="message" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
							<button type="submit">
								<span className="text">Enviar</span>
								<span>Obrigado!</span>
							</button>
							<input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>
						</form>
					</div>
					<div className="content-img">
						<Image src={img} alt="Like man" />
					</div>
				</section>
			</div>
			<Footer />
		</>
	)
}