import Image from "next/image";
import img_pic from "../../../public/assests/profile.jpg"
import "@/components/Card/card.css"
function Card() {
   return (
      <>
         <div className="slide-content">
            <div className="card-wrapper">
               <div className="card">
                  <div className="image-content">
                     <span className="overlay"></span>
                     <div className="card-image">
                        <Image className="card-img" src={img_pic} width={150} height={150} alt="Profile Pic" />
                     </div>
                  </div>
                  <div className="card-content">
                     <h2 className="name">Luís Martins</h2>
                     <p className="sub-name">Desenvolvedor J.</p>
                     <p className="info-profile">React.js | Node | MongoDB | PLSQL | MySQL | QlikView | Qlik Sense</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default Card;