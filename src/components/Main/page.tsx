'use client'
import React from "react"
import Card from "@/components/Card/Card";
import W_APIs from "@/components/Works/W_Apis/APIs"
import W_Sites from "@/components/Works/W_Sites/Sites"
import Slider from "@/components/Slider/Slider.jsx"
import Landing from "@/components/LandinMobi/page.jsx"
export default function Main() {
   return (
      <>
         <section className="content-home">
            <div className="container_home">
               <div className="section-body">
                  <div id="about" className="sec-about">
                     <div className="identify" data-aos="fade-down">
                        <Card />
                     </div>
                     <div className="about-main">
                        <p className="p-about">Sou desenvolvedor <span className="color-green">FullStack</span> com conhecimento em diversos frameworks, incluindo <span className="color-green">Next.js, Vite e React.</span> Possuo habilidades de programação nas linguagens <span className="color-green">Python e JavaScript,</span> além de experiência na aplicação de <span className="color-green">Bootstrap e Tailwind</span> em meus projetos. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, oportunidade que tem permitido aplicar meus conhecimentos em projetos utilizando <span className="color-green">Node.js e MongoDB.</span> Além disso, tenho um ano de experiência com SQL como Analista de Dados Júnior, atuando com diferentes ferramentas de manipulação de dados, tais como <span className="color-green">SQL Server, HeidiSQL</span> e soluções de Business Intelligence (BI) com <span className="color-green">QlikView.</span>
                        </p>
                        <p className="p-about-2">Utilizei este nome de <span className="color-green">Nexus</span> em meus projetos, para dar uma marca padrão na minha identidade de desenvolvedor.</p>
                     </div>
                  </div>
                  <div className="list-frame">
                     <div className="react">React</div>
                     <div className="javaScript">JS</div>
                     <div className="next">Next</div>
                     <div className="node">Node</div>
                     <div className="python">Python</div>
                  </div>
                  <div className="list-apis" data-aos="fade-right" data-aos-delay="400">
                     <h3 className="anima">/Projetos:</h3>
                     <W_APIs />
                  </div>
                  <div id="projects" className="list-sites" data-aos="fade-right" data-aos-delay="400">
                     <h3 className="anima">/Sites:</h3>
                     <W_Sites />
                  </div>
                  <div id="LP" className="container-slider" data-aos="fade-right" data-aos-delay="500">
                     <h3>/Landing Pages:</h3>
                     <Slider />
                  </div>
                  <div id="LP" className="container-landing" data-aos="fade-right" data-aos-delay="500">
                     <h3>/Landing Pages:</h3>
                     <Landing />
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}