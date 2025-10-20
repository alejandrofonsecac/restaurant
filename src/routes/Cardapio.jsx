import { useRef, useEffect, useState, forwardRef, useContext } from 'react';

import CaroselMenu from '../_components/CarroselMenu';
import { CartContext } from "../_components/CartContext.jsx";

import style from '../../styles/cardapio/cardapio.module.css';



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
            priceText: 'R$ 20,00',
            preco: 20, 
            className: 'espagueteBolonhesa'
        },

        {
            id: 12,
            name: 'Fettuccine Alfredo', 
            ingredients: 'Molho cremoso de parmesão, manteiga e creme de leite', 
            priceText: 'R$ 25,00',
            preco: 25, 
            className: 'fettucineAlfredo'
        },

        {
            id: 13,
            name: 'Ravioli de Ricota com Espinafre', 
            ingredients: 'Recheio cremoso com molho blanco leve', 
            priceText: 'R$ 45,00',
            preco: 45, 
            className: 'raviolliRicota'
        },

        {
            id: 14,
            name: 'Penne ao Pesto', 
            ingredients: 'Molho pesto fresco de manjericão, nozes, alho, parmesão e azeite', 
            priceText: 'R$ 38,00',
            preco: 38, 
            className: 'pennePesto'

        },

        {
            id: 15,
            name: 'Lasanha à Bolonhesa', 
            ingredients: 'Camadas de massa com carne, queijo e molho', 
            priceText: 'R$ 40,00',
            preco: 40, 
            className: 'lasanhaBolonhesa'
        },

        {
            id: 16,
            name: 'Gnocchi ao Sugo', 
            ingredients: 'Nhoque de batata com molho de tomate e manjericão', 
            priceText: 'R$ 42,00',
            preco: 42, 
            className: 'gnocchiSugo'
        },

        {
            id: 17,
            name: 'Canelone de Frango', 
            ingredients: 'Recheado com frango e catupiry, coberto com molho rosé', 
            priceText: 'R$ 46,00',
            preco: 46, 
            className: 'caneloneFrango'
        },

        {
            id: 18,
            name: 'Espaguete Carbonara', 
            ingredients: 'Bacon, ovos, queijo parmesão e pimenta do reino', 
            priceText: 'R$ 48,00',
            preco: 48, 
            className: 'espagueteCarbonara'
        },

        {
            id: 19,
            name: 'Rondelli de Presunto e Queijo', 
            ingredients: 'Molho bechamel e queijo gratinado', 
            priceText: 'R$ 48,00',
            preco: 48, 
            className: 'rondelliPresunto'
        },

        {
            id: 20,
            name: 'Farfalle à Quatro Queijos', 
            ingredients: 'Molho de mussarela, gorgonzola, catupiry e parmesão', 
            priceText: 'R$ 49,00',
            preco: 48, 
            className: 'farfalleQueijos'
        },

        {
            id: 21,
            name: 'Tagliatelle à Puttanesca', 
            ingredients: 'Azeitonas, alcaparras, tomate e alho', 
            priceText: 'R$ 44,00',
            preco: 44, 
            className: 'tagliatellePuttanesca'
        },

        {
            id: 22,
            name: 'Tortellini de Carne com Molho Funghi', 
            ingredients: 'Cogumelos frescos, creme e queijo', 
            priceText: 'R$ 60,00',
            preco: 60, 
            className: 'tortelliniCarne'
        }
    ],


    pratosExecutivos: [

        {
            id: 23,
            name: 'Filé à Parmegiana', 
            ingredients: 'Filé empanado com molho de tomate e queijo, arroz branco e batatas fritas', 
            priceText: 'R$ 65,00',
            preco: 65, 
            className: 'fileParmegiana'
        },

        {
            id: 24,
            name: 'Strogonoff de Frango', 
            ingredients: 'Arroz branco, batata palha e frango em molho cremoso', 
            priceText: 'R$ 48,00',
            preco: 48, 
            className: 'strogonoffFrango'
        },

        {
            id: 25,
            name: 'Bife Acebolado', 
            ingredients: 'Acompanha arroz, feijão, farofa e salada', 
            priceText: 'R$ 52,00',
            preco: 52, 
            className: 'bifeAcebolado'
        },

        {
            id: 26,
            name: 'Peixe Grelhado com Legumes', 
            ingredients: 'Tilápia grelhada com mix de legumes no vapor', 
            priceText: 'R$ 58,00',
            preco: 58, 
            className: 'peixeGrelhado'
        },

        {
            id: 27,
            name: 'Frango Grelhado com Purê', 
            ingredients: 'Purê de batata caseiro e arroz', 
            priceText: 'R$ 45,00',
            preco: 45, 
            className: 'frangoGrelhado'
        },

        {
            id: 28,
            name: 'Risoto de Cogumelos', 
            ingredients: 'Arroz arbório, cogumelos frescos, vinho branco, parmesão', 
            priceText: 'R$ 55,00',
            preco: 55, 
            className: 'risotoCogumelos'
        },

        {
            id: 29,
            name: 'Almôndegas ao Sugo', 
            ingredients: 'Com arroz branco e purê de batata', 
            priceText: 'R$ 42,00',
            preco: 42, 
            className: 'almondegasSugo'
        },

        {
            id: 30,
            name: 'Carne Assada com Polenta', 
            ingredients: 'Fatias macias de carne com molho e polenta cremosa', 
            priceText: 'R$ 54,00',
            preco: 54, 
            className: 'carneAssada'
        }
    ],


    porcoes: [

        {
            id: 31,
            name: 'Batata Frita Tradicional', 
            ingredients: 'Batatas crocantes com sal e orégano', 
            priceText: 'R$ 25,00',
            preco: 25, 
            className: 'batataFritaTrad'
        },

        { 
            id: 32,
            name: 'Batata Rústica com Alho e Alecrim', 
            ingredients: 'Batatas assadas com alho fresco e alecrim', 
            priceText: 'R$ 28,00',
            preco: 28, 
            className: 'batataRustica' 
        },
        
        {
            id: 33,
            name: 'Polenta Frita', 
            ingredients: 'Palitos de polenta crocantes', 
            priceText: 'R$ 22,00',
            preco: 22, 
            className: 'polentaFrita'
        },
    

        {
            id: 34,
            name: 'Mandioca Frita', 
            ingredients: 'Servida com molho da casa', 
            priceText: 'R$ 23,00',
            preco: 23, 
            className: 'mandiocaFrita'
        },

        {
            id: 35,
            name: 'Anéis de Cebola Empanados', 
            ingredients: 'Cebola empanada crocante', 
            priceText: 'R$ 26,00',
            preco: 26, 
            className: 'aneisCebola'
        },

        {
            id: 36,
            name: 'Iscas de Frango Empanadas', 
            ingredients: 'Acompanha molho mostarda e mel', 
            priceText: 'R$ 35,00',
            preco: 35, 
            className: 'iscasFrango'
        },

        {
            id: 37,
            name: 'Mini Almôndegas', 
            ingredients: 'Com molho de tomate', 
            priceText: 'R$ 30,00',
            preco: 30, 
            className: 'miniAlmondegas'
        },

        {
            id: 38,
            name: 'Bolinho de Arroz com Queijo', 
            ingredients: 'Bolinho crocante com recheio de queijo derretido', 
            priceText: 'R$ 24,00',
            preco: 24, 
            className: 'bolinhoArroz'
        },

        {
            id: 39,
            name: 'Mini Pizzas (6 unid)', 
            ingredients: 'Sabores variados', 
            priceText: 'R$ 38,00',
            preco: 38, 
            className: 'miniPizzas'
        },

        {
            id: 40,
            name: 'Pão de Alho com Queijo', 
            ingredients: '4 unidades', 
            priceText: 'R$ 18,00',
            preco: 18, 
            className: 'paoAlho'
        },

        {
            id: 41,
            name: 'Tábua de Frios', 
            ingredients: 'Presunto parma, salame, queijos, azeitonas', 
            priceText: 'R$ 60,00',
            preco: 60, 
            className: 'tabuaFrios'
        },

        {
            id: 42,
            name: 'Cesta de Pães com Patês Artesanais', 
            ingredients: 'Pães variados com seleção de patês', 
            priceText: 'R$ 32,00',
            preco: 32, 
            className: 'cestaPaes'
        }
    ],


    semGlutem: [
        {
            id: 43,
            name: 'Espaguete Sem Glúten ao Pomodoro', 
            ingredients: 'Molho de tomate fresco, manjericão e parmesão', 
            priceText: 'R$ 48,00',
            preco: 48, 
            className: 'espagueteSemGluten'
        },

        {
            id: 44,
            name: 'Risoto de Frango com Legumes', 
            ingredients: 'Sem uso de farinha ou glúten', 
            priceText: 'R$ 55,00',
            preco: 55, 
            className: 'risotoLegumes'
        },

        {
            id: 45,
            name: 'Nhoque de Mandioquinha com Molho Suave', 
            ingredients: 'Feito com mandioquinha fresca', 
            priceText: 'R$ 45,00',
            preco: 45, 
            className: 'nhoqueMandioquinha'
        },

        {
            id: 46,
            name: 'Salada Bella', 
            ingredients: 'Alface, rúcula, tomate, pepino, ovo cozido, frango grelhado', 
            priceText: 'R$ 38,00',
            preco: 38, 
            className: 'saladaBella'
        },

        {
            id: 47,
            name: 'Quibe de Abóbora Assado com Hortelã', 
            ingredients: 'Acompanhado de salada', 
            priceText: 'R$ 40,00',
            preco: 40, 
            className: 'quibeAbobora'
        },

        {
            id: 48,
            name: 'Panqueca de Tapioca com Recheio de Queijo e Tomate', 
            ingredients: 'Massa 100% sem glúten', 
            priceText: 'R$ 35,00',
            preco: 35, 
            className: 'panquecaTapioca'
        }
    ],


    sobremesas: [
        {
            id: 49,
            name: 'Tiramisù Tradicional', 
            ingredients: 'Creme de mascarpone, café e cacau', 
            priceText: 'R$ 25,00',
            preco: 25, 
            className: 'tiramisuTradicional'
        },
        
        { 
            id: 50,
            name: 'Panna Cotta com Frutas Vermelhas', 
            ingredients: 'Creme italiano com calda de frutas', 
            priceText: 'R$ 22,00',
            preco: 22, 
            className: 'pannaCotta' 
        },

        {
            id: 51,
            name: 'Torta de Limão com Merengue', 
            ingredients: 'Base crocante, creme de limão merengue', 
            priceText: 'R$ 20,00',
            preco: 20, 
            className: 'tortaLimao'
        },

        {
            id: 52,
            name: 'Mousse de Chocolate Meio Amargo', 
            ingredients: 'Textura aerada e sabor intenso', 
            priceText: 'R$ 18,00',
            preco: 18, 
            className: 'mousseChocolate'
        },

        {
            id: 53,
            name: 'Gelato Italiano (3 sabores)', 
            ingredients: 'Chocolate, baunilha e frutas vermelhas', 
            priceText: 'R$ 28,00',
            preco: 28, 
            className: 'gelatoItaliano'
        },
        
        {
            id: 54,
            name: 'Cannoli com Ricota e Gotas de Chocolate', 
            ingredients: 'Massa crocante recheada', 
            priceText: 'R$ 15,00',
            preco: 15, 
            className: 'cannoliRicota'
        },

        {
            id: 55,
            name: 'Cheesecake de Frutas Vermelhas', 
            ingredients: 'Base de biscoito, creme de queijo e geleia', 
            priceText: 'R$ 24,00',
            preco: 24, 
            className: 'cheesecakeFrutas'
        },

        {
            id: 56,
            name: 'Brownie com Calda de Nutella', 
            ingredients: 'Quentinho e acompanha sorvete', 
            priceText: 'R$ 26,00',
            preco: 26, 
            className: 'brownieNutella'
        },

        {
            id: 57,
            name: 'Creme Brûlée com Baunilha', 
            ingredients: 'Creme francês com açúcar queimado', 
            priceText: 'R$ 27,00',
            preco: 27, 
            className: 'cremeBaunilha'
        },

        {
            id: 58,
            name: 'Mini Pudim de Leite Condensado', 
            ingredients: 'Porção individual com calda de caramelo', 
            priceText: 'R$ 16,00',
            preco: 16, 
            className: 'miniPudim'
        }
    ],


    bebidas: [
        {
            id: 59,
            name: 'Refrigerante Lata (350ml)', 
            ingredients: 'Coca-Cola, Guaraná Antarctica, Fanta Laranja, Sprite', 
            priceText: 'R$ 8,00', 
            preco: 8,
            className: 'refrigeranteLata'
        },

        {
            id: 60,
            name: 'Água Mineral', 
            ingredients: 'Com ou sem gás (500ml)', 
            priceText: 'R$ 6,00', 
            preco: 6,
            className: 'agua'
        },

        {
            id: 61,
            name: 'Suco Natural (350ml)', 
            ingredients: 'Laranja, Uva, Abacaxi com Hortelã, Manga', 
            priceText: 'R$ 12,00',
            preco: 12, 
            className: 'sucoNatural'
        },

        {
            id: 62,
            name: 'Suco Detox (300ml)', 
            ingredients: 'Couve, limão, gengibre e maçã', 
            priceText: 'R$ 15,00',
            preco: 15, 
            className: 'sucoDetox'
        },

        {
            id: 63,
            name: 'Chá Gelado (400ml)', 
            ingredients: 'Limão ou Pêssego', 
            priceText: 'R$ 10,00',
            preco: 10, 
            className: 'chaGelado'
        },

        {
            id: 64,
            name: 'Café Expresso', 
            ingredients: 'Grãos 100% arábica', 
            priceText: 'R$ 7,00', 
            preco: 7,
            className: 'cafeExpresso'
        },

        {
            id: 65,
            name: 'Capuccino Cremoso', 
            ingredients: 'Com chocolate em pó ou canela', 
            priceText: 'R$ 11,00',
            preco: 11, 
            className: 'capuccinoCremoso'
        },

        {
            id: 66,
            name: 'Cerveja Long Neck (355ml)', 
            ingredients: 'Heineken, Budweiser, Stella Artois', 
            priceText: 'R$ 14,00',
            preco: 14, 
            className: 'cervejaLongNeck'
        },

        {
            id: 67,
            name: 'Vinho Tinto Taça (180ml)', 
            ingredients: 'Chianti ou Merlot', 
            priceText: 'R$ 30,00',
            preco: 30, 
            className: 'vinhoTinto'
        },

        {
            id: 68,
            name: 'Vinho Branco Taça (180ml)', 
            ingredients: 'Chardonnay ou Sauvignon Blanc', 
            priceText: 'R$ 28,00',
            preco: 28, 
            className: 'vinhoBranco'
        },
        
        {
            id: 69,
            name: 'Spritz Italiano', 
            ingredients: 'Aperol com prosecco e soda', 
            priceText: 'R$ 26,00',
            preco: 26, 
            className: 'spritzItaliano' 
        },

        {
            id: 70,
            name: 'Água Tônica com Limão', 
            ingredients: 'Servida com gelo e rodelas de limão', 
            priceText: 'R$ 9,00', 
            preco: 9,
            className: 'aguaTonica'
        },

        {
            id: 71,
            name: 'Limonada Siciliana', 
            ingredients: 'Feita com limões frescos e hortelã', 
            priceText: 'R$ 12,00',
            preco: 12, 
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
            <h3 className={style.categoryTitle}>{title}</h3>
            <div className={style.containerItems}>
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



    // ----- Função de rolagem para as categorias ------
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