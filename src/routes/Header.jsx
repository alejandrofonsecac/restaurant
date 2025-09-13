import React from 'react';
import style from '../../styles/header/header.module.css';
import { clickMenu } from '../_components/clickMenu.js';

function Header() {
  return (
    <header>
      <a href="../../../../index.html">
        <h1>Pasta Bella</h1>
      </a>

      <ul className={style.menuDesktop} id="itensdesktop">
        <li><a href="#">Contato</a></li>
        <li><a href="#">Cardapio</a></li>
        <li><a href="#">Alguma coisa</a></li>
      </ul>

      <div className={style.headerIcons}>
        <div className={style.iconWrapper}>
          <span className="material-icons">shopping_cart</span>
          <span className={style.cartCount}>0</span>
        </div>

        <div>
          <span className="material-icons" onClick={clickMenu}>menu</span>
        </div>
      </div>

      <menu id="itens" style={{ display: 'none' }} className={style.menuMobile}>
        <ul>
          <li><a href="#">Cardapio</a></li>
          <li><a href="#" style={{ color: 'black' }}>Sobre nós</a></li>
          <li><a href="../../../../index.html">Home</a></li>
        </ul>
      </menu>
    </header>
  );
}

export default Header;
