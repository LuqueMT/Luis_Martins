import "./landing.css"
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from "next/link"
export default function Landing() {
    return (
        <section className='section-img-mobile'>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image mobile flowBite">
                        <div className="info-colection">
                            <h2>FlowBite</h2>
                            <Link target="_blank" href="https://luquemt.github.io/visual_project/">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <Link target="_blank" className="button-2" href="https://github.com/LuqueMT/visual_project">
                                <IoInformationCircleOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image mobile nexusTravel">
                        <div className="info-colection">
                            <h2>Nexus Travel</h2>
                            <Link target="_blank" href="https://luquemt.github.io/traveling_page/">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <Link target="_blank" className="button-2" href="https://github.com/LuqueMT/traveling_page">
                                <IoInformationCircleOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image mobile petshop">
                        <div className="info-colection">
                            <h2>PetShop</h2>
                            <Link target="_blank" href="https://luquemt.github.io/petshop_page/">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <Link target="_blank" className="button-2" href="https://github.com/LuqueMT/petshop_page">
                                <IoInformationCircleOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
