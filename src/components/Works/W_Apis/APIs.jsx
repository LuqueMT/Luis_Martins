import "./apis.css"
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from "next/link"
export default function W_APIs() {
    return (
        <section className='section-img'>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image spotify">
                        <div className="info-colection">
                            <h2>Spotify</h2>
                            <Link target="_blank" href="https://jornada-fullstack-hashtag-0bqs.onrender.com">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <Link target="_blank" className="button-2" href="https://github.com/LuqueMT/jornada-fullstack-Hashtag">
                                <IoInformationCircleOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image quiz">
                        <div className="info-colection">
                            <h2>Quiz</h2>
                            <Link target="_blank" href="https://luquemt.github.io/quiz_json/">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <Link target="_blank" className="button-2" href="https://github.com/LuqueMT/quiz_json">
                                <IoInformationCircleOutline />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img-cole'>
                <div className="content-colection">
                    <div className="content-image">
                        <div className="info-colection">
                            <h2>Em Breve</h2>
                            <Link href="#about">
                                <div className="button-info">
                                    <button className="button">Visualizar</button>
                                </div>
                            </Link>
                            <button className="button-2">
                                <IoInformationCircleOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
