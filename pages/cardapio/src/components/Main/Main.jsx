import React from 'react';

//Estilos


function Main(){

    return(
        <main>
            <menu>
                <div className='container'>
                    <div className='main-menu itens'>
                        <p>Menu Principal</p>
                    </div>

                    <div className='Pizzas itens'>
                        <p>Pizzas</p>
                    </div>

                    <div className='Pratos-Executivos itens'>
                        <p>Pratos Executivos</p>
                    </div>

                    <div className='Porções itens'>
                        <p>Porções</p>
                    </div>

                    <div className='Sem-Gluten itens'>
                        <p>Sem Glúten</p>
                    </div>

                    <div className='Sobremesas itens'>
                        <p>Sobremesas</p>
                    </div>

                    <div className='Bebidas itens'>
                        <p>Bebidas</p>
                    </div>
                </div>
            </menu>
document.querySelector('.container').addEventListener('touchstart', function(e) {
    this.style.overflowX = 'scroll'; // Força o scroll no touch
});

        </main>
    )
}

export default Main;