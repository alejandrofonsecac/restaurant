import { Link } from 'react-router';
import React from 'react';
import style from '../../styles/header/header.module.css';
import { clickMenu } from '../_components/clickMenu.js';



function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>Pasta Bella</h1>
      </Link>

      <ul className={style.menuDesktop} id="itensdesktop">
        <li><a href="#">Contato</a></li>
        <li><a href="#">Cardapio</a></li>
        <li><a href="#">Alguma coisa</a></li>
      </ul>

      <div className={style.headerIcons}>
        <div className={style.iconWrapper}>
          <span className="material-icons" style={{fontSize: 26}}>shopping_cart</span>
          <span className={style.cartCount}>0</span>
        </div>

        <div>
          <span className="material-icons" onClick={clickMenu} style={{fontSize: 29}}>menu</span>
        </div>
      </div>

      <menu id="itens" className={style.menuMobile}>
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
