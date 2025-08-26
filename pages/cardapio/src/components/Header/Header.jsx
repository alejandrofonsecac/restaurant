import React from 'react';

//Estilos
import '../../../style/header.css';
import '../../../style/main.module.css';
import '../../../style/generalSettings.css';
import {clickMenu} from '../clickMenu'

function Header() {
  return (
    <header className="header">
      <a href="../../../../index.html">
        <h1>Pasta Bella</h1>
      </a>
      <ul className="menu-desktop" id="itensdesktop">
        <li><a href="#">Contato</a></li>
        <li><a href="#">Cardapio</a></li>
        <li><a href="#">Alguma coisa</a></li>
      </ul>
      
      <div className="header-icons">
        <div className="icon-wrapper">
            <span className="material-icons">shopping_cart</span>
            <span className="cart-count">0</span>
        </div>
        
        <div>
          <span className="material-icons" onClick={clickMenu}>menu</span>
        </div>
      </div>

      <menu id="itens" style={{ display: 'none' }} className="menu-mobile">
        <ul>
          <li><a href="#">Opção 1</a></li>
          <li><a href="#">Opção 2</a></li>
          <li><a href="#">Opção 3</a></li>
          <li><a href="#">Opção 4</a></li>
          <li><a href="#">Opção 5</a></li>
        </ul>
      </menu>
    </header>
  );
}

export default Header;