import { Link } from 'react-router-dom';
import React from 'react';
import style from '../../styles/header/header.module.css';
import { clickMenu } from '../_components/clickMenu.js';

import { useCart } from '../_components/CartContext.jsx'; 

function Header() {
    const { cartItems } = useCart();
    const totalItems = cartItems.length;

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
                    <Link to='/carrinho' style={{color: 'black'}}>
                        <span className="material-icons" style={{fontSize: 26}}>shopping_cart</span>
                    </Link>
                    <span className={style.cartCount}>{totalItems}</span> 
                </div>

                <div>
                    <span className="material-icons" onClick={clickMenu} style={{fontSize: 29}}>menu</span>
                </div>
            </div>

            <menu id="itens" className={style.menuMobile}>
                <ul>
                    <Link to='/cardapio'>
                        <li>Cardapio</li>
                    </Link>
                    <Link>
                        <li>Sobre Nós</li>
                    </Link>
                    <Link to='/' >
                        <li>Home</li>
                    </Link>
                </ul>
            </menu>
        </header>
    );
}

export default Header;