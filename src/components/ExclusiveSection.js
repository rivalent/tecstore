import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
        <div className="page-inner-content">
            <div className="content">
                <div className="left-side">
                    <h2>Smart Band 4</h2>
                    <p>
                        O mi Smart 4 tem uma tela AMOLED 39.9% maior que o mi Bandtela 
                        completamente digital com brilho tecnologico, de tal maneira
                        em que bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        bla bla bla bla bla
                    </p>
                    <Link to="/products" className="see-more-btn">
                        <span>Ver Agora</span>
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                    </Link>
                </div>
                <div className="right-side">
                    <img src="/images/exclusive.png" alt="Smart Band 4" />
                </div>
            </div>
        </div>
    </div>
  )
}
