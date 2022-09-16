import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Formulario from "./components/Formulario";

const Main = () => {
    return (
        <main>
            <div className="IllustratorContainer">

                <h1> Caixinhas para doces </h1>
                <p> Arquivos prontos para corte. Use sua imaginação, faça e personalize como desejar. </p>
                <img src="/images/sweet-box.jpg" alt="Caixinha de doces" />

                <div className="share-on-networks">
                    <a href="/" id="share-facebook">
                        <FaFacebookSquare className="fa-icon" />
                        <span> Compartilhar </span>
                    </a>

                    <a href="/" id="share-twitter">
                        <FaTwitter className="fa-icon" />
                        <span> Compartilhar </span>
                    </a>

                    <a href="/" id="share-linkedin">
                        <FaLinkedin className="fa-icon" />
                        <span> Compartilhar </span>
                    </a>
                </div>

            </div>

            <Formulario />

        </main>
    )
}

export default Main