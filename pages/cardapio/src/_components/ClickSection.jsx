import React from 'react';
import style from '../style/main.module.css';

const PizzasSection = React.forwardRef((props, ref) => {
    return (
        <div className="category-container" id="pizzas" ref={ref}>
            <h3 className="category-title">Pizzas</h3>
            <div className="food-items">
                
                <div className={style.foodItem}>
                    <div className={style.informationItem}>
                        <h4 className={style.foodName}>Margherita</h4>
                        <p className={style.ingredients}>Massa artesanal, molho de tomate italiano, mussarela de búfala, manjericão fresco, azeite extra virgem</p>
                        <div className={style.shoppingInfo}>
                            <a className={style.addToCart}>+ Adicionar</a>
                            <p id='preco'></p>
                        </div>                            
                    </div>
                    <span className={style.margueritaPizza}></span>
                </div>
                
                {/* ... outros itens de pizza */}
            </div>
        </div>
    );
});

export default PizzasSection;