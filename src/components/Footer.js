import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-options">
          <p>Baixe o Nosso App!</p>
          <p>Baixe Nosso App Para Android e IOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            TEC<span>STORE</span>
          </h1>
          <p>
            Melhor apps de compras de produtos tecnologicos e ajudar pessoas a melhorarem suas vidas.
          </p>
        </div>

        <div className="links">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <Link to="/">Cupons</Link>
            </li>
            <li>
              <Link to="/">Blog posts</Link>
            </li>
            <li>
              <Link to="/">políticas</Link>
            </li>
            <li>
              <Link to="/">Torne-se afiliado</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />

        <p className="copyright">
          copyright 2024 - Richard & Davi - Todos Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
