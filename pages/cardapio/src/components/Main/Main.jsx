import React, { useRef, useEffect, useState } from 'react';
import style from '../../../style/main.module.css';
import CaroselMenu from './_components/CarroselMenu';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function Main() { 

    const categoryRefs = useRef({});
  const [activeCategory, setActiveCategory] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const scrollToCategory = (categoryId) => {
    if (isDragging) return;
    
    if (categoryRefs.current[categoryId]) {
      setActiveCategory(categoryId);
      
      const element = categoryRefs.current[categoryId];
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Efeito para observar a seção visível na tela
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveCategory(id);
        }
      });
    }, observerOptions);

    // Observar todas as categorias
    Object.values(categoryRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
    return (
        <main>
            <menu>
        <CaroselMenu
          onMouseDown={() => setIsDragging(false)}
          onMouseMove={() => setIsDragging(true)}
          onMouseUp={() => setTimeout(() => setIsDragging(false), 50)}
        >
          <div 
            className={`${style.itens} ${style.principalMenu} ${activeCategory === 'menu-principal' ? style.activeCategory : ''}`} 
            onClick={() => scrollToCategory('menu-principal')}
          >
            <p>Menu Principal</p>
          </div>
          <div 
            className={`${style.itens} ${style.PizzasMenu} ${activeCategory === 'pizzas' ? style.activeCategory : ''}`} 
            onClick={() => scrollToCategory('pizzas')}
          >
            <p>Pizzas</p>
          </div>
          <div 
            className={`${style.itens} ${style.pratosExecutivos} ${activeCategory === 'pratos-executivos' ? style.activeCategory : ''}`} 
            onClick={() => scrollToCategory('pratos-executivos')}
          >
            <p>Pratos Executivos</p>
          </div>
          <div 
            className={`${style.itens} ${style.porções} ${activeCategory === 'porcoes' ? style.activeCategory : ''}`} 
            onClick={() => scrollToCategory('porcoes')}
          >
            <p>Porções</p>
          </div>
          <div 
            className={`${style.itens} ${style.semGluten} ${activeCategory === 'sem-gluten' ? style.activeCategory : ''}`} 
            onClick={() => scrollToCategory('sem-gluten')}
          >
            <p>Sem Glúten</p>
          </div>
          <div 
            className={`${style.itens} ${style.sobremesas} ${activeCategory === 'sobremesas' ? style.activeCategory : ''}`} 
            onClick={() => scrollToCategory('sobremesas')}
          >
            <p>Sobremesas</p>
          </div>
          <div 
            className={`${style.itens} ${style.bebidas} ${activeCategory === 'bebidas' ? style.activeCategory : ''}`} 
            onClick={() => scrollToCategory('bebidas')}
          >
            <p>Bebidas</p>
          </div>
        </CaroselMenu>
      </menu>


            
                       {/* Categoria Pizzas */}
<div className="category-container" id="pizzas" ref={el => categoryRefs.current['pizzas'] = el}>
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
        
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Pepperoni</h4>
                <p className={style.ingredients}>Massa crocante, molho de tomate, mussarela, fatias generosas de pepperoni</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div> 
            </div>
            <span className={style.pepperoniPizza}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Frango com Catupiry</h4>
                <p className={style.ingredients}>Massa bem passada, molho de tomate, mussarela, frango desfiado temperado, catupiry cremoso</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div> 
            </div>
            <span className={style.frangoPizza}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Calabresa</h4>
                <p className={style.ingredients}>Molho de tomate, queijo mussarela, calabresa fatiada, cebola roxa, orégano</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.calabresaPizza}></span>
        </div>
            <div className={style.foodItem}>
                <div className={style.informationItem}>
                    <h4 className={style.foodName}>Quatro Queijos</h4>
                    <p className={style.ingredients}>Queijo mussarela, parmesão, gorgonzola e catupiry sobre massa fina</p>
                    <div className={style.shoppingInfo}>
                        <a className={style.addToCart}>+ Adicionar</a>
                        <p id='preco'></p>
                    </div>
                </div>
                <span className={style.queijosPizza}></span>
            </div>
            <div className={style.foodItem}>
                <div className={style.informationItem}>
                    <h4 className={style.foodName}>Portuguesa</h4>
                    <p className={style.ingredients}>Presunto, ovos, cebola, azeitona, pimentão, molho e queijo mussarela</p>
                    <div className={style.shoppingInfo}>
                        <a className={style.addToCart}>+ Adicionar</a>
                        <p id='preco'></p>
                    </div>
                </div>
                <span className={style.portuguesaPizza}></span>
            </div>
            <div className={style.foodItem}>
                <div className={style.informationItem}>
                    <h4 className={style.foodName}>Vegetariana</h4>
                    <p className={style.ingredients}>Abobrinha grelhada, berinjela, pimentões coloridos, cebola, tomate, molho e queijo</p>
                    <div className={style.shoppingInfo}>
                        <a className={style.addToCart}>+ Adicionar</a>
                        <p id='preco'></p>
                    </div>
                </div>
                <span className={style.vegetarianaPizza}></span>
            </div>
            <div className={style.foodItem}>
                <div className={style.informationItem}>
                    <h4 className={style.foodName}>Napolitana</h4>
                    <p className={style.ingredients}>Molho artesanal, queijo, tomate fresco, orégano, manjericão</p>
                    <div className={style.shoppingInfo}>
                        <a className={style.addToCart}>+ Adicionar</a>
                        <p id='preco'></p>
                    </div>
                </div>
                <span className={style.napolitanaPizza}></span>
            </div>
            <div className={style.foodItem}>
                <div className={style.informationItem}>
                    <h4 className={style.foodName}>Toscana</h4>
                    <p className={style.ingredients}>Linguiça toscana artesanal, molho de tomate, mussarela, pimenta-do-reino</p>
                    <div className={style.shoppingInfo}>
                        <a className={style.addToCart}>+ Adicionar</a>
                        <p id='preco'></p>
                    </div>
                </div>
                <span className={style.toscanaPizza}></span>
            </div>
            <div className={style.foodItem}>
                <div className={style.informationItem}>
                    <h4 className={style.foodName}>Bella Speciale</h4>
                    <p className={style.ingredients}>Molho secreto da casa, presunto parma, rúcula, tomate seco, lascas de parmesão</p>
                    <div className={style.shoppingInfo}>
                        <a className={style.addToCart}>+ Adicionar</a>
                        <p id='preco'></p>
                    </div>
                </div>
                <span className={style.bellaPizza}></span>
            </div>
                </div>
            </div>

                       {/* Categoria Massas */}
<div className="category-container" id="massas" ref={el => categoryRefs.current['massas'] = el}>
    <h3 className="category-title">Massas</h3>
    <div className="food-items">
        
        {/* Massa 1 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Espaguete à Bolonhesa</h4>
                <p className={style.ingredients}>Espaguete com molho de carne moída cozido lentamente com tomate, cebola e ervas</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.espagueteBolonhesa}></span>
        </div>

        {/* Massa 2 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Fettuccine Alfredo</h4>
                <p className={style.ingredients}>Molho cremoso de parmesão, manteiga e creme de leite</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.fettucineAlfredo}></span>
        </div>

        {/* Massa 3 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Ravioli de Ricota com Espinafre</h4>
                <p className={style.ingredients}>Recheio cremoso com molho blanco leve</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.raviolliRicota}></span>
        </div>

        {/* Massa 4 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Penne ao Pesto</h4>
                <p className={style.ingredients}>Molho pesto fresco de manjericão, nozes, alho, parmesão e azeite</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.pennePesto}></span>
        </div>

        {/* Massa 5 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Lasanha à Bolonhesa</h4>
                <p className={style.ingredients}>Camadas de massa com carne, queijo e molho</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.lasanhaBolonhesa}></span>
        </div>

        {/* Massa 6 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Gnocchi ao Sugo</h4>
                <p className={style.ingredients}>Nhoque de batata com molho de tomate e manjericão</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.gnocchiSugo}></span>
        </div>

        {/* Massa 7 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Canelone de Frango</h4>
                <p className={style.ingredients}>Recheado com frango e catupiry, coberto com molho rosé</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.caneloneFrango}></span>
        </div>

        {/* Massa 8 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Espaguete Carbonara</h4>
                <p className={style.ingredients}>Bacon, ovos, queijo parmesão e pimenta do reino</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.espagueteCarbonara}></span>
        </div>

        {/* Massa 9 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Rondelli de Presunto e Queijo</h4>
                <p className={style.ingredients}>Molho bechamel e queijo gratinado</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.rondelliPresunto}></span>
        </div>

        {/* Massa 10 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Farfalle à Quatro Queijos</h4>
                <p className={style.ingredients}>Molho de mussarela, gorgonzola, catupiry e parmesão</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.farfalleQueijos}></span>
        </div>

        {/* Massa 11 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Tagliatelle à Puttanesca</h4>
                <p className={style.ingredients}>Azeitonas, alcaparras, tomate e alho</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.tagliatellePutatesca}></span>
        </div>

        {/* Massa 12 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Tortellini de Carne com Molho Funghi</h4>
                <p className={style.ingredients}>Cogumelos frescos, creme e queijo</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.tortelliniCarne}></span>
        </div>
    </div>
</div>
                        
                       {/* Categoria Pratos Executivos */}
<div className="category-container" id="pratos-executivos" ref={el => categoryRefs.current['pratos-executivos'] = el}>
    <h3 className="category-title">Pratos Executivos</h3>
    <div className="food-items">
        
        {/* Prato 1 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Filé à Parmegiana</h4>
                <p className={style.ingredients}>Filé empanado com molho de tomate e queijo, arroz branco e batatas fritas</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.fileParmegiana}></span>
        </div>

        {/* Prato 2 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Strogonoff de Frango</h4>
                <p className={style.ingredients}>Arroz branco, batata palha e frango em molho cremoso</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.strogonoffFrango}></span>
        </div>

        {/* Prato 3 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Bife Acebolado</h4>
                <p className={style.ingredients}>Acompanha arroz, feijão, farofa e salada</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.bifeAcebolado}></span>
        </div>

        {/* Prato 4 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Peixe Grelhado com Legumes</h4>
                <p className={style.ingredients}>Tilápia grelhada com mix de legumes no vapor</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.peixeGrelhado}></span>
        </div>

        {/* Prato 5 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Frango Grelhado com Purê</h4>
                <p className={style.ingredients}>Purê de batata caseiro e arroz</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.frangoGrelhado}></span>
        </div>

        {/* Prato 6 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Risoto de Cogumelos</h4>
                <p className={style.ingredients}>Arroz arbório, cogumelos frescos, vinho branco, parmesão</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.risotoCogumelos}></span>
        </div>

        {/* Prato 7 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Almôndegas ao Sugo</h4>
                <p className={style.ingredients}>Com arroz branco e purê de batata</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.almondegasSugo}></span>
        </div>

        {/* Prato 8 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Carne Assada com Polenta</h4>
                <p className={style.ingredients}>Fatias macias de carne com molho e polenta cremosa</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.carneAssada}></span>
        </div>
    </div>
</div>

                    {/* Categoria Porções */}
<div className="category-container" id="porcoes" ref={el => categoryRefs.current['porcoes'] = el}>
    <h3 className="category-title">Porções</h3>
    <div className="food-items">
        
        {/* Porção 1 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Batata Frita Tradicional</h4>
                <p className={style.ingredients}>Batatas crocantes com sal e orégano</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.batataFritaTrad}></span>
        </div>

        {/* Porção 2 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Batata Rústica com Alho e Alecrim</h4>
                <p className={style.ingredients}>Batatas assadas com alho fresco e alecrim</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.batataRustica}></span>
        </div>

        {/* Porção 3 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Polenta Frita</h4>
                <p className={style.ingredients}>Palitos de polenta crocantes</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.polentaFrita}></span>
        </div>

        {/* Porção 4 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Mandioca Frita</h4>
                <p className={style.ingredients}>Servida com molho da casa</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.mandiocaFrita}></span>
        </div>

        {/* Porção 5 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Anéis de Cebola Empanados</h4>
                <p className={style.ingredients}>Cebola empanada crocante</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.aneisCebola}></span>
        </div>

        {/* Porção 6 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Iscas de Frango Empanadas</h4>
                <p className={style.ingredients}>Acompanha molho mostarda e mel</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.iscasFrango}></span>
        </div>

        {/* Porção 7 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Mini Almôndegas</h4>
                <p className={style.ingredients}>Com molho de tomate</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.miniAlmondegas}></span>
        </div>

        {/* Porção 8 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Bolinho de Arroz com Queijo</h4>
                <p className={style.ingredients}>Bolinho crocante com recheio de queijo derretido</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.bolinhoArroz}></span>
        </div>

        {/* Porção 9 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Mini Pizzas (6 unid)</h4>
                <p className={style.ingredients}>Sabores variados</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.miniPizzas}></span>
        </div>

        {/* Porção 10 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Pão de Alho com Queijo</h4>
                <p className={style.ingredients}>4 unidades</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.paoAlho}></span>
        </div>

        {/* Porção 11 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Tábua de Frios</h4>
                <p className={style.ingredients}>Presunto parma, salame, queijos, azeitonas</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.tabuaFrios}></span>
        </div>

        {/* Porção 12 */}
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Cesta de Pães com Patês Artesanais</h4>
                <p className={style.ingredients}>Pães variados com seleção de patês</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.cestaPaes}></span>
        </div>
    </div>
</div>

                      {/* Categoria Sem Glúten */}
<div className="category-container" id="sem-gluten" ref={el => categoryRefs.current['sem-gluten'] = el}>
    <h3 className="category-title">Sem Glúten</h3>
    <div className="food-items">
        
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Espaguete Sem Glúten ao Pomodoro</h4>
                <p className={style.ingredients}>Molho de tomate fresco, manjericão e parmesão</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.espagueteSemGluten}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Risoto de Frango com Legumes</h4>
                <p className={style.ingredients}>Sem uso de farinha ou glúten</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.risotoLegumes}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Nhoque de Mandioquinha com Molho Suave</h4>
                <p className={style.ingredients}>Feito com mandioquinha fresca</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.nhoqueMandioquinha}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Salada Bella</h4>
                <p className={style.ingredients}>Alface, rúcula, tomate, pepino, ovo cozido, frango grelhado</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.saladaBella}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Quibe de Abóbora Assado com Hortelã</h4>
                <p className={style.ingredients}>Acompanhado de salada</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.quibeAbobora}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Panqueca de Tapioca com Recheio de Queijo e Tomate</h4>
                <p className={style.ingredients}>Massa 100% sem glúten</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.panquecaTapioca}></span>
        </div>
    </div>
</div>

                       {/* Categoria Sobremesas */}
<div className="category-container" id="sobremesas" ref={el => categoryRefs.current['sobremesas'] = el}>
    <h3 className="category-title">Sobremesas</h3>
    <div className="food-items">
        
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Tiramisù Tradicional</h4>
                <p className={style.ingredients}>Creme de mascarpone, café e cacau</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.tiramisuTradicional}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Panna Cotta com Frutas Vermelhas</h4>
                <p className={style.ingredients}>Creme italiano com calda de frutas</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.pannaCotta}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Torta de Limão com Merengue</h4>
                <p className={style.ingredients}>Base crocante, creme de limão merengue</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.tortaLimao}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Mousse de Chocolate Meio Amargo</h4>
                <p className={style.ingredients}>Textura aerada e sabor intenso</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.mousseChocolate}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Gelato Italiano (3 sabores)</h4>
                <p className={style.ingredients}>Chocolate, baunilha e frutas vermelhas</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.gelatoItaliano}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Cannoli com Ricota e Gotas de Chocolate</h4>
                <p className={style.ingredients}>Massa crocante recheada</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.cannoliRicota}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Cheesecake de Frutas Vermelhas</h4>
                <p className={style.ingredients}>Base de biscoito, creme de queijo e geleia</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.cheesecakeFrutas}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Brownie com Calda de Nutella</h4>
                <p className={style.ingredients}>Quentinho e acompanha sorvete</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.brownieNutella}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Creme Brûlée com Baunilha</h4>
                <p className={style.ingredients}>Creme francês com açúcar queimado</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.cremeBaunilha}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Mini Pudim de Leite Condensado</h4>
                <p className={style.ingredients}>Porção individual com calda de caramelo</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.miniPudim}></span>
        </div>
    </div>
</div>

                {/* Categoria Bebidas */}
<div className="category-container" id="bebidas" ref={el => categoryRefs.current['bebidas'] = el}>
    <h3 className="category-title">Bebidas</h3>
    <div className="food-items">
        
        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Refrigerante Lata (350ml)</h4>
                <p className={style.ingredients}>Coca-Cola, Guaraná Antarctica, Fanta Laranja, Sprite</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.refrigeranteLata}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Água Mineral</h4>
                <p className={style.ingredients}>Com ou sem gás (500ml)</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.agua}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Suco Natural (300ml)</h4>
                <p className={style.ingredients}>Laranja, Uva, Abacaxi com Hortelã, Manga</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.sucoNatural}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Suco Detox (300ml)</h4>
                <p className={style.ingredients}>Couve, limão, gengibre e maçã</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.sucoDetox}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Chá Gelado (500ml)</h4>
                <p className={style.ingredients}>Limão ou Pêssego</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.chaGelado}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Café Expresso</h4>
                <p className={style.ingredients}>Grãos 100% arábica</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.cafeExpresso}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Capuccino Cremoso</h4>
                <p className={style.ingredients}>Com chocolate em pó ou canela</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.capuccinoCremoso}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Cerveja Long Neck (355ml)</h4>
                <p className={style.ingredients}>Heineken, Budweiser, Stella Artois</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.cervejaLongNeck}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Vinho Tinto Taça (180ml)</h4>
                <p className={style.ingredients}>Chianti ou Merlot</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.vinhoTinto}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Vinho Branco Taça (180ml)</h4>
                <p className={style.ingredients}>Chardonnay ou Sauvignon Blanc</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.vinhoBranco}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Spritz Italiano</h4>
                <p className={style.ingredients}>Aperol com prosecco e soda</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.spritzItaliano}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Água Tônica com Limão</h4>
                <p className={style.ingredients}>Servida com gelo e rodelas de limão</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.aguaTonica}></span>
        </div>

        <div className={style.foodItem}>
            <div className={style.informationItem}>
                <h4 className={style.foodName}>Limonada Siciliana</h4>
                <p className={style.ingredients}>Feita com limões frescos e hortelã</p>
                <div className={style.shoppingInfo}>
                    <a className={style.addToCart}>+ Adicionar</a>
                    <p id='preco'></p>
                </div>
            </div>
            <span className={style.limonadaSiciliana}></span>
        </div>
    </div>
</div>

        </main>
    );
}

export default Main;