import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Anker Soundcore Space A40</h2>
            <p>
              Com cancelamento de ruído adaptativo de alto desempenho, o Anker Soundcore Space A40 garante imersão total onde quer que você esteja. Compacto e confortável, ele oferece áudio de alta resolução graças ao suporte ao codec LDAC e pode ser personalizado via app. Sua bateria de longa duração e recarga sem fio tornam-no perfeito para rotinas intensas e viagens. Uma escolha ideal para quem busca liberdade e qualidade sonora superior em um design moderno.
            </p>
            <Link to="/products" className="see-more-btn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
            <img src="/images/exclusive1.png" alt="Anker Soundcore Space A40" />
          </div>
        </div>
      </div>
    </div>
  );
}
