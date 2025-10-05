import { useRef, useEffect, useState, forwardRef, useContext } from 'react';

import CaroselMenu from '../_components/CarroselMenu';
import { CartContext } from "../_components/CartContext.jsx";
import style from '../../styles/cardapio.module.css';


const cardapio = {
    pizzas: [
        {
            id: 1,
            name: 'Margherita',
            ingredients: 'Massa artesanal, molho de tomate italiano, mussarela de búfala,manjericão fresco, azeite extra virgem', 
            className: 'margueritaPizza',
            price: 'R$ 45,00',

                precoPizza: {
                    P: 30,
                    M: 45,
                    G: 60,
                    GG: 70
                }
        },
        
        {
            id: 2,
         name: 'Pepperoni', 
         ingredients: 'Massa crocante, molho de tomate, mussarela, fatias generosas de pepperoni', 
         className: 'pepperoniPizza',
         price: 'R$ 50,00',
         
         
         precoPizza: {
                    P: 35,
                    M: 50,
                    G: 60,
                    GG: 75
                }
        },

        { 
            id: 3,
        name: 'Frango com Catupiry', 
        ingredients: 'Massa bem passada, molho de tomate, mussarela, frango desfiado temperado, catupiry cremoso', 
        className: 'frangoPizza',
        price: 'R$ 55,00',
        
        
        precoPizza: {
                    P: 40,
                    M: 55,
                    G: 65,
                    GG: 75
                }
        },

        {
            id: 4,
            name: 'Calabresa', 
            ingredients: 'Molho de tomate, queijo mussarela, calabresa fatiada, cebola roxa, orégano', 
            className: 'calabresaPizza',
            price: 'R$ 40,00',
            

            precoPizza: {
                    P: 30,
                    M: 40,
                    G: 60,
                    GG: 70
                }
        },

        { 
            id: 5,
            name: 'Quatro Queijos', 
            ingredients: 'Queijo mussarela, parmesão, gorgonzola e catupiry sobre massa fina', 
            className: 'queijosPizza',
            price: 'R$ 50,00',
            
            
            precoPizza: {
                    P: 40,
                    M: 50,
                    G: 60,
                    GG: 75
                }
        },

        {
            id: 6,
            name: 'Portuguesa', 
            ingredients: 'Presunto, ovos, cebola, azeitona, pimentão, molho e queijo mussarela', 
            className: 'portuguesaPizza',
            price: 'R$ 50,00',
            

            precoPizza: {
                    P: 40,
                    M: 50,
                    G: 60,
                    GG: 75
                }
        },

        {
            id: 7,
            name: 'Vegetariana', 
            ingredients: 'Abobrinha grelhada, berinjela, pimentões coloridos, cebola, tomate, molho e queijo', 
            className: 'vegetarianaPizza',
            price: 'R$ 38,00',
            

            precoPizza: {
                    P: 30,
                    M: 38,
                    G: 45,
                    GG: 50
                }
        },

        {
            id: 8,
            name: 'Napolitana', 
            ingredients: 'Molho artesanal, queijo, tomate fresco, orégano, manjericão', 
            className: 'napolitanaPizza',
            price: 'R$ 40,00',
            

            precoPizza: {
                    P: 35,
                    M: 40,
                    G: 50,
                    GG: 60
                }
        },

        {
            id: 9,
            name: 'Toscana', 
            ingredients: 'Linguiça toscana artesanal, molho de tomate, mussarela, pimenta-do-reino', 
            className: 'toscanaPizza',
            price: 'R$ 45,00',
            

            precoPizza: {
                    P: 35,
                    M: 45,
                    G: 53,
                    GG: 65
                }

        },

        {
            id: 10,
            name: 'Bella Speciale', 
            ingredients: 'Molho secreto da casa, presunto parma, rúcula, tomate seco, lascas de parmesão', 
            className: 'bellaPizza',
            price: 'R$ 48,00',
            

            precoPizza: {
                    P: 40,
                    M: 48,
                    G: 60,
                    GG: 75
                }
        }
    ],


    massas: [
        {
            id: 11,
            name: 'Espaguete à Bolonhesa', 
            ingredients: 'Espaguete com molho de carne moída cozido lentamente com tomate, cebola e ervas', 
            price: 'R$ 20,00', 
            className: 'espagueteBolonhesa'
        },

        {
            id: 12,
            name: 'Fettuccine Alfredo', 
            ingredients: 'Molho cremoso de parmesão, manteiga e creme de leite', 
            price: 'R$ 25,00', 
            className: 'fettucineAlfredo'
        },

        {
            id: 13,
            name: 'Ravioli de Ricota com Espinafre', 
            ingredients: 'Recheio cremoso com molho blanco leve', 
            price: 'R$ 45,00', 
            className: 'raviolliRicota'
        },

        {
            id: 14,
            name: 'Penne ao Pesto', 
            ingredients: 'Molho pesto fresco de manjericão, nozes, alho, parmesão e azeite', 
            price: 'R$ 38,00', 
            className: 'pennePesto'

        },

        {
            id: 15,
            name: 'Lasanha à Bolonhesa', 
            ingredients: 'Camadas de massa com carne, queijo e molho', 
            price: 'R$ 40,00', 
            className: 'lasanhaBolonhesa'
        },

        {
            id: 16,
            name: 'Gnocchi ao Sugo', 
            ingredients: 'Nhoque de batata com molho de tomate e manjericão', 
            price: 'R$ 42,00', 
            className: 'gnocchiSugo'
        },

        {
            id: 17,
            name: 'Canelone de Frango', 
            ingredients: 'Recheado com frango e catupiry, coberto com molho rosé', 
            price: 'R$ 46,00', 
            className: 'caneloneFrango'
        },

        {
            id: 18,
            name: 'Espaguete Carbonara', 
            ingredients: 'Bacon, ovos, queijo parmesão e pimenta do reino', 
            price: 'R$ 48,00', 
            className: 'espagueteCarbonara'
        },

        {
            id: 19,
            name: 'Rondelli de Presunto e Queijo', 
            ingredients: 'Molho bechamel e queijo gratinado', 
            price: 'R$ 48,00', 
            className: 'rondelliPresunto'
        },

        {
            id: 20,
            name: 'Farfalle à Quatro Queijos', 
            ingredients: 'Molho de mussarela, gorgonzola, catupiry e parmesão', 
            price: 'R$ 49,00', 
            className: 'farfalleQueijos'
        },

        {
            id: 21,
            name: 'Tagliatelle à Puttanesca', 
            ingredients: 'Azeitonas, alcaparras, tomate e alho', 
            price: 'R$ 44,00', 
            className: 'tagliatellePuttanesca'
        },

        {
            id: 22,
            name: 'Tortellini de Carne com Molho Funghi', 
            ingredients: 'Cogumelos frescos, creme e queijo', 
            price: 'R$ 60,00', 
            className: 'tortelliniCarne'
        }
    ],


    pratosExecutivos: [

        {
            id: 23,
            name: 'Filé à Parmegiana', 
            ingredients: 'Filé empanado com molho de tomate e queijo, arroz branco e batatas fritas', 
            price: 'R$ 65,00', 
            className: 'fileParmegiana'
        },

        {
            id: 24,
            name: 'Strogonoff de Frango', 
            ingredients: 'Arroz branco, batata palha e frango em molho cremoso', 
            price: 'R$ 48,00', 
            className: 'strogonoffFrango'
        },

        {
            id: 25,
            name: 'Bife Acebolado', 
            ingredients: 'Acompanha arroz, feijão, farofa e salada', 
            price: 'R$ 52,00', 
            className: 'bifeAcebolado'
        },

        {
            id: 26,
            name: 'Peixe Grelhado com Legumes', 
            ingredients: 'Tilápia grelhada com mix de legumes no vapor', 
            price: 'R$ 58,00', 
            className: 'peixeGrelhado'
        },

        {
            id: 27,
            name: 'Frango Grelhado com Purê', 
            ingredients: 'Purê de batata caseiro e arroz', 
            price: 'R$ 45,00', 
            className: 'frangoGrelhado'
        },

        {
            id: 28,
            name: 'Risoto de Cogumelos', 
            ingredients: 'Arroz arbório, cogumelos frescos, vinho branco, parmesão', 
            price: 'R$ 55,00', 
            className: 'risotoCogumelos'
        },

        {
            id: 29,
            name: 'Almôndegas ao Sugo', 
            ingredients: 'Com arroz branco e purê de batata', 
            price: 'R$ 42,00', 
            className: 'almondegasSugo'
        },

        {
            id: 30,
            name: 'Carne Assada com Polenta', 
            ingredients: 'Fatias macias de carne com molho e polenta cremosa', 
            price: 'R$ 54,00', 
            className: 'carneAssada'
        }
    ],


    porcoes: [

        {
            id: 31,
            name: 'Batata Frita Tradicional', 
            ingredients: 'Batatas crocantes com sal e orégano', 
            price: 'R$ 25,00', 
            className: 'batataFritaTrad'
        },

        { 
            id: 32,
            name: 'Batata Rústica com Alho e Alecrim', 
            ingredients: 'Batatas assadas com alho fresco e alecrim', 
            price: 'R$ 28,00', 
            className: 'batataRustica' 
        },
        
        {
            id: 33,
            name: 'Polenta Frita', 
            ingredients: 'Palitos de polenta crocantes', 
            price: 'R$ 22,00', 
            className: 'polentaFrita'
        },
    

        {
            id: 34,
            name: 'Mandioca Frita', 
            ingredients: 'Servida com molho da casa', 
            price: 'R$ 23,00', 
            className: 'mandiocaFrita'
        },

        {
            id: 35,
            name: 'Anéis de Cebola Empanados', 
            ingredients: 'Cebola empanada crocante', 
            price: 'R$ 26,00', 
            className: 'aneisCebola'
        },

        {
            id: 36,
            name: 'Iscas de Frango Empanadas', 
            ingredients: 'Acompanha molho mostarda e mel', 
            price: 'R$ 35,00', 
            className: 'iscasFrango'
        },

        {
            id: 37,
            name: 'Mini Almôndegas', 
            ingredients: 'Com molho de tomate', 
            price: 'R$ 30,00', 
            className: 'miniAlmondegas'
        },

        {
            id: 38,
            name: 'Bolinho de Arroz com Queijo', 
            ingredients: 'Bolinho crocante com recheio de queijo derretido', 
            price: 'R$ 24,00', 
            className: 'bolinhoArroz'
        },

        {
            id: 39,
            name: 'Mini Pizzas (6 unid)', 
            ingredients: 'Sabores variados', 
            price: 'R$ 38,00', 
            className: 'miniPizzas'
        },

        {
            id: 40,
            name: 'Pão de Alho com Queijo', 
            ingredients: '4 unidades', 
            price: 'R$ 18,00', 
            className: 'paoAlho'
        },

        {
            id: 41,
            name: 'Tábua de Frios', 
            ingredients: 'Presunto parma, salame, queijos, azeitonas', 
            price: 'R$ 60,00', 
            className: 'tabuaFrios'
        },

        {
            id: 42,
            name: 'Cesta de Pães com Patês Artesanais', 
            ingredients: 'Pães variados com seleção de patês', 
            price: 'R$ 32,00', 
            className: 'cestaPaes'
        }
    ],


    semGlutem: [
        {
            id: 43,
            name: 'Espaguete Sem Glúten ao Pomodoro', 
            ingredients: 'Molho de tomate fresco, manjericão e parmesão', 
            price: 'R$ 48,00', 
            className: 'espagueteSemGluten'
        },

        {
            id: 44,
            name: 'Risoto de Frango com Legumes', 
            ingredients: 'Sem uso de farinha ou glúten', 
            price: 'R$ 55,00', 
            className: 'risotoLegumes'
        },

        {
            id: 45,
            name: 'Nhoque de Mandioquinha com Molho Suave', 
            ingredients: 'Feito com mandioquinha fresca', 
            price: 'R$ 45,00', 
            className: 'nhoqueMandioquinha'
        },

        {
            id: 46,
            name: 'Salada Bella', 
            ingredients: 'Alface, rúcula, tomate, pepino, ovo cozido, frango grelhado', 
            price: 'R$ 38,00', 
            className: 'saladaBella'
        },

        {
            id: 47,
            name: 'Quibe de Abóbora Assado com Hortelã', 
            ingredients: 'Acompanhado de salada', 
            price: 'R$ 40,00', 
            className: 'quibeAbobora'
        },

        {
            id: 48,
            name: 'Panqueca de Tapioca com Recheio de Queijo e Tomate', 
            ingredients: 'Massa 100% sem glúten', 
            price: 'R$ 35,00', 
            className: 'panquecaTapioca'
        }
    ],


    sobremesas: [
        {
            id: 49,
            name: 'Tiramisù Tradicional', 
            ingredients: 'Creme de mascarpone, café e cacau', 
            price: 'R$ 25,00', 
            className: 'tiramisuTradicional'
        },
        
        { 
            id: 50,
            name: 'Panna Cotta com Frutas Vermelhas', 
            ingredients: 'Creme italiano com calda de frutas', 
            price: 'R$ 22,00', 
            className: 'pannaCotta' 
        },

        {
            id: 51,
            name: 'Torta de Limão com Merengue', 
            ingredients: 'Base crocante, creme de limão merengue', 
            price: 'R$ 20,00', 
            className: 'tortaLimao'
        },

        {
            id: 52,
            name: 'Mousse de Chocolate Meio Amargo', 
            ingredients: 'Textura aerada e sabor intenso', 
            price: 'R$ 18,00', 
            className: 'mousseChocolate'
        },

        {
            id: 53,
            name: 'Gelato Italiano (3 sabores)', 
            ingredients: 'Chocolate, baunilha e frutas vermelhas', 
            price: 'R$ 28,00', 
            className: 'gelatoItaliano'
        },
        
        {
            id: 54,
            name: 'Cannoli com Ricota e Gotas de Chocolate', 
            ingredients: 'Massa crocante recheada', 
            price: 'R$ 15,00', 
            className: 'cannoliRicota'
        },

        {
            id: 55,
            name: 'Cheesecake de Frutas Vermelhas', 
            ingredients: 'Base de biscoito, creme de queijo e geleia', 
            price: 'R$ 24,00', 
            className: 'cheesecakeFrutas'
        },

        {
            id: 56,
            name: 'Brownie com Calda de Nutella', 
            ingredients: 'Quentinho e acompanha sorvete', 
            price: 'R$ 26,00', 
            className: 'brownieNutella'
        },

        {
            id: 57,
            name: 'Creme Brûlée com Baunilha', 
            ingredients: 'Creme francês com açúcar queimado', 
            price: 'R$ 27,00', 
            className: 'cremeBaunilha'
        },

        {
            id: 58,
            name: 'Mini Pudim de Leite Condensado', 
            ingredients: 'Porção individual com calda de caramelo', 
            price: 'R$ 16,00', 
            className: 'miniPudim'
        }
    ],


    bebidas: [
        {
            id: 59,
            name: 'Refrigerante Lata (350ml)', 
            ingredients: 'Coca-Cola, Guaraná Antarctica, Fanta Laranja, Sprite', 
            price: 'R$ 8,00', 
            className: 'refrigeranteLata'
        },

        {
            id: 60,
            name: 'Água Mineral', 
            ingredients: 'Com ou sem gás (500ml)', 
            price: 'R$ 6,00', 
            className: 'agua'
        },

        {
            id: 61,
            name: 'Suco Natural (300ml)', 
            ingredients: 'Laranja, Uva, Abacaxi com Hortelã, Manga', 
            price: 'R$ 12,00', 
            className: 'sucoNatural'
        },

        {
            id: 62,
            name: 'Suco Detox (300ml)', 
            ingredients: 'Couve, limão, gengibre e maçã', 
            price: 'R$ 15,00', 
            className: 'sucoDetox'
        },

        {
            id: 63,
            name: 'Chá Gelado (500ml)', 
            ingredients: 'Limão ou Pêssego', 
            price: 'R$ 10,00', 
            className: 'chaGelado'
        },

        {
            id: 64,
            name: 'Café Expresso', 
            ingredients: 'Grãos 100% arábica', 
            price: 'R$ 7,00', 
            className: 'cafeExpresso'
        },

        {
            id: 65,
            name: 'Capuccino Cremoso', 
            ingredients: 'Com chocolate em pó ou canela', 
            price: 'R$ 11,00', 
            className: 'capuccinoCremoso'
        },

        {
            id: 66,
            name: 'Cerveja Long Neck (355ml)', 
            ingredients: 'Heineken, Budweiser, Stella Artois', 
            price: 'R$ 14,00', 
            className: 'cervejaLongNeck'
        },

        {
            id: 67,
            name: 'Vinho Tinto Taça (180ml)', 
            ingredients: 'Chianti ou Merlot', 
            price: 'R$ 30,00', 
            className: 'vinhoTinto'
        },

        {
            id: 68,
            name: 'Vinho Branco Taça (180ml)', 
            ingredients: 'Chardonnay ou Sauvignon Blanc', 
            price: 'R$ 28,00', 
            className: 'vinhoBranco'
        },
        
        {
            id: 69,
            name: 'Spritz Italiano', 
            ingredients: 'Aperol com prosecco e soda', 
            price: 'R$ 32,00', 
            className: 'spritzItaliano' 
        },

        {
            id: 70,
            name: 'Água Tônica com Limão', 
            ingredients: 'Servida com gelo e rodelas de limão', 
            price: 'R$ 9,00', 
            className: 'aguaTonica'
        },

        {
            id: 71,
            name: 'Limonada Siciliana', 
            ingredients: 'Feita com limões frescos e hortelã', 
            price: 'R$ 12,00', 
            className: 'limonadaSiciliana'
        }
    ]
};

// Array para mapear as categorias de forma dinâmica
const categories = [
    { id: 'pizzas', title: 'Pizzas' },
    { id: 'massas', title: 'Massas' },
    { id: 'pratosExecutivos', title: 'Pratos Executivos' },
    { id: 'porcoes', title: 'Porções' },
    { id: 'semGlutem', title: 'Sem Glúten' },
    { id: 'sobremesas', title: 'Sobremesas' },
    { id: 'bebidas', title: 'Bebidas' }
];

const MenuCategory = forwardRef(({ id, title, items }, ref) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div ref={ref} id={id}> 
            <h3 className="category-title">{title}</h3>
            <div className="food-items">
                {items.map((item, index) => (
                    <div className={style.foodItem} key={index}>
                        <div className={style.informationItem}>
                            <h4 className={style.foodName}>{item.name}</h4>
                            <p className={style.ingredients}>{item.ingredients}</p>
                            <div className={style.shoppingInfo}>

                                <div
                                  onClick={() => addToCart(item)} 
                                  className={style.addToCart}
                                  style={{background: 'none'}}
                                >
                                  + Adicionar
                                </div>

                                <div className={style.price}>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        </div>
                        <span className={style[item.className]}></span>
                    </div>
                ))}
            </div>
        </div>
    );
});

function Cardapio({item}) {
    const categoryRefs = useRef({});
    const [activeCategory, setActiveCategory] = useState('');
    const [isDragging, setIsDragging] = useState(false);

    // Função de rolagem para as categorias
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

        Object.values(categoryRefs.current).forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <CaroselMenu 
                categories={categories}
                activeCategory={activeCategory}
                scrollToCategory={scrollToCategory}
                setIsDragging={setIsDragging}
                className={style.menuContainer}
            >

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
            
            <div className={style.menuContainer}>
                {/* Mapa do array de categorias para renderizar os componentes */}
                {categories.map((category) => (
                    <MenuCategory 
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        items={cardapio[category.id]}
                        ref={(el) => (categoryRefs.current[category.id] = el)}
                    />
                ))}
            </div>
        </>
    );
}

export default Cardapio;