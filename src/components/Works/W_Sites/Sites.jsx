import "./sites.css";
import "../style.css"
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from "next/link"
export default function W_Sites() {
    return (
        <section className='section-img'>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image exactTime">
                        <div className="info-colection">
                            <h2>ExactTime</h2>
                            <Link target="_blank" href="https://luquemt.github.io/ExtactTime/">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <Link target="_blank" className="button-2" href="https://github.com/LuqueMT/ExtactTime">
                                <IoInformationCircleOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image artProject">
                        <div className="info-colection">
                            <h2>ArtProject</h2>
                            <Link target="_blank" href="https://luquemt.github.io/Projeto-Art/">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <Link target="_blank" className="button-2" href="https://github.com/LuqueMT/Projeto-Art">
                                <IoInformationCircleOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image coventry">
                        <div className="info-colection">
                            <h2>Coventry</h2>
                            <Link target="_blank" href="https://luquemt.github.io/coventry_project/">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <Link target="_blank" className="button-2" href="https://github.com/LuqueMT/coventry_project">
                                <IoInformationCircleOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}