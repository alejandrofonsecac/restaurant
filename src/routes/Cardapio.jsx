import React, { useRef, useEffect, useState, forwardRef } from 'react';
import style from '../../styles/cardapio.module.css';
import CaroselMenu from '../_components/CarroselMenu';

// ----------------------------------------------------
// 1. DADOS: O objeto 'cardapio' que centraliza tudo
// ----------------------------------------------------

const cardapio = {
    pizzas: [
        {
            name: 'Margherita',
            ingredients: 'Massa artesanal, molho de tomate italiano, mussarela de búfala,manjericão fresco, azeite extra virgem', 
            price: 'R$ 35,00', 
            className: 'margueritaPizza'
        },
        
        {
         name: 'Pepperoni', 
         ingredients: 'Massa crocante, molho de tomate, mussarela, fatias generosas de pepperoni', 
         price: 'R$ 45,00', 
         className: 'pepperoniPizza'       
        },

        { 
        name: 'Frango com Catupiry', 
        ingredients: 'Massa bem passada, molho de tomate, mussarela, frango desfiado temperado, catupiry cremoso', 
        price: 'R$ 40,00', 
        className: 'frangoPizza' 
        },

        {
            name: 'Calabresa', 
            ingredients: 'Molho de tomate, queijo mussarela, calabresa fatiada, cebola roxa, orégano', 
            price: 'R$ 38,00', 
            className: 'calabresaPizza'
        },

        { 
            name: 'Quatro Queijos', 
            ingredients: 'Queijo mussarela, parmesão, gorgonzola e catupiry sobre massa fina', 
            price: 'R$ 42,00', 
            className: 'queijosPizza' 
        },

        {
            name: 'Portuguesa', 
            ingredients: 'Presunto, ovos, cebola, azeitona, pimentão, molho e queijo mussarela', 
            price: 'R$ 41,00', 
            className: 'portuguesaPizza'
        },

        {
            name: 'Vegetariana', 
            ingredients: 'Abobrinha grelhada, berinjela, pimentões coloridos, cebola, tomate, molho e queijo', 
            price: 'R$ 37,00', 
            className: 'vegetarianaPizza'
        },

        {
            name: 'Napolitana', 
            ingredients: 'Molho artesanal, queijo, tomate fresco, orégano, manjericão', 
            price: 'R$ 36,00', 
            className: 'napolitanaPizza'
        },

        {
            name: 'Toscana', 
            ingredients: 'Linguiça toscana artesanal, molho de tomate, mussarela, pimenta-do-reino', 
            price: 'R$ 43,00', 
            className: 'toscanaPizza'

        },

        {
            name: 'Bella Speciale', 
            ingredients: 'Molho secreto da casa, presunto parma, rúcula, tomate seco, lascas de parmesão', 
            price: 'R$ 50,00', 
            className: 'bellaPizza'
        }
    ],


    massas: [
        {
            name: 'Espaguete à Bolonhesa', 
            ingredients: 'Espaguete com molho de carne moída cozido lentamente com tomate, cebola e ervas', 
            price: 'R$ 40,00', 
            className: 'espagueteBolonhesa'
        },

        {
            name: 'Fettuccine Alfredo', 
            ingredients: 'Molho cremoso de parmesão, manteiga e creme de leite', 
            price: 'R$ 45,00', 
            className: 'fettucineAlfredo'
        },

        {
            name: 'Ravioli de Ricota com Espinafre', 
            ingredients: 'Recheio cremoso com molho blanco leve', 
            price: 'R$ 55,00', 
            className: 'raviolliRicota'
        },

        {
            name: 'Penne ao Pesto', 
            ingredients: 'Molho pesto fresco de manjericão, nozes, alho, parmesão e azeite', 
            price: 'R$ 48,00', 
            className: 'pennePesto'

        },

        {
            name: 'Lasanha à Bolonhesa', 
            ingredients: 'Camadas de massa com carne, queijo e molho', 
            price: 'R$ 50,00', 
            className: 'lasanhaBolonhesa'
        },

        {
            name: 'Gnocchi ao Sugo', 
            ingredients: 'Nhoque de batata com molho de tomate e manjericão', 
            price: 'R$ 42,00', 
            className: 'gnocchiSugo'
        },

        {
            name: 'Canelone de Frango', 
            ingredients: 'Recheado com frango e catupiry, coberto com molho rosé', 
            price: 'R$ 46,00', 
            className: 'caneloneFrango'
        },

        {
            name: 'Espaguete Carbonara', 
            ingredients: 'Bacon, ovos, queijo parmesão e pimenta do reino', 
            price: 'R$ 52,00', 
            className: 'espagueteCarbonara'
        },

        {
            name: 'Rondelli de Presunto e Queijo', 
            ingredients: 'Molho bechamel e queijo gratinado', 
            price: 'R$ 48,00', 
            className: 'rondelliPresunto'
        },

        {
            name: 'Farfalle à Quatro Queijos', 
            ingredients: 'Molho de mussarela, gorgonzola, catupiry e parmesão', 
            price: 'R$ 49,00', 
            className: 'farfalleQueijos'
        },

        {
            name: 'Tagliatelle à Puttanesca', 
            ingredients: 'Azeitonas, alcaparras, tomate e alho', 
            price: 'R$ 44,00', 
            className: 'tagliatellePuttanesca'
        },

        {
            name: 'Tortellini de Carne com Molho Funghi', 
            ingredients: 'Cogumelos frescos, creme e queijo', 
            price: 'R$ 60,00', 
            className: 'tortelliniCarne'
        }
    ],


    pratosExecutivos: [

        {
            name: 'Filé à Parmegiana', 
            ingredients: 'Filé empanado com molho de tomate e queijo, arroz branco e batatas fritas', 
            price: 'R$ 65,00', 
            className: 'fileParmegiana'
        },

        {
            name: 'Strogonoff de Frango', 
            ingredients: 'Arroz branco, batata palha e frango em molho cremoso', 
            price: 'R$ 48,00', 
            className: 'strogonoffFrango'
        },

        {
            name: 'Bife Acebolado', 
            ingredients: 'Acompanha arroz, feijão, farofa e salada', 
            price: 'R$ 52,00', 
            className: 'bifeAcebolado'
        },

        {
            name: 'Peixe Grelhado com Legumes', 
            ingredients: 'Tilápia grelhada com mix de legumes no vapor', 
            price: 'R$ 58,00', 
            className: 'peixeGrelhado'
        },

        {
            name: 'Frango Grelhado com Purê', 
            ingredients: 'Purê de batata caseiro e arroz', 
            price: 'R$ 45,00', 
            className: 'frangoGrelhado'
        },

        {
            name: 'Risoto de Cogumelos', 
            ingredients: 'Arroz arbório, cogumelos frescos, vinho branco, parmesão', 
            price: 'R$ 55,00', 
            className: 'risotoCogumelos'
        },

        {
            name: 'Almôndegas ao Sugo', 
            ingredients: 'Com arroz branco e purê de batata', 
            price: 'R$ 42,00', 
            className: 'almondegasSugo'
        },

        {
            name: 'Carne Assada com Polenta', 
            ingredients: 'Fatias macias de carne com molho e polenta cremosa', 
            price: 'R$ 54,00', 
            className: 'carneAssada'
        }
    ],


    porcoes: [

        {
            name: 'Batata Frita Tradicional', 
            ingredients: 'Batatas crocantes com sal e orégano', 
            price: 'R$ 25,00', 
            className: 'batataFritaTrad'
        },

        { 
            name: 'Batata Rústica com Alho e Alecrim', 
            ingredients: 'Batatas assadas com alho fresco e alecrim', 
            price: 'R$ 28,00', 
            className: 'batataRustica' 
        },
        
        {
            name: 'Polenta Frita', 
            ingredients: 'Palitos de polenta crocantes', 
            price: 'R$ 22,00', 
            className: 'polentaFrita'
        },
    

        {
            name: 'Mandioca Frita', 
            ingredients: 'Servida com molho da casa', 
            price: 'R$ 23,00', 
            className: 'mandiocaFrita'
        },

        {
            name: 'Anéis de Cebola Empanados', 
            ingredients: 'Cebola empanada crocante', 
            price: 'R$ 26,00', 
            className: 'aneisCebola'
        },

        {
            name: 'Iscas de Frango Empanadas', 
            ingredients: 'Acompanha molho mostarda e mel', 
            price: 'R$ 35,00', 
            className: 'iscasFrango'
        },

        {
            name: 'Mini Almôndegas', 
            ingredients: 'Com molho de tomate', 
            price: 'R$ 30,00', 
            className: 'miniAlmondegas'
        },

        {
            name: 'Bolinho de Arroz com Queijo', 
            ingredients: 'Bolinho crocante com recheio de queijo derretido', 
            price: 'R$ 24,00', 
            className: 'bolinhoArroz'
        },

        {
            name: 'Mini Pizzas (6 unid)', 
            ingredients: 'Sabores variados', 
            price: 'R$ 38,00', 
            className: 'miniPizzas'
        },

        {
            name: 'Pão de Alho com Queijo', 
            ingredients: '4 unidades', 
            price: 'R$ 18,00', 
            className: 'paoAlho'
        },

        {
            name: 'Tábua de Frios', 
            ingredients: 'Presunto parma, salame, queijos, azeitonas', 
            price: 'R$ 60,00', 
            className: 'tabuaFrios'
        },

        {
            name: 'Cesta de Pães com Patês Artesanais', 
            ingredients: 'Pães variados com seleção de patês', 
            price: 'R$ 32,00', 
            className: 'cestaPaes'
        }
    ],


    semGlutem: [
        {
            name: 'Espaguete Sem Glúten ao Pomodoro', 
            ingredients: 'Molho de tomate fresco, manjericão e parmesão', 
            price: 'R$ 48,00', 
            className: 'espagueteSemGluten'
        },

        {
            name: 'Risoto de Frango com Legumes', 
            ingredients: 'Sem uso de farinha ou glúten', 
            price: 'R$ 55,00', 
            className: 'risotoLegumes'
        },

        {
            name: 'Nhoque de Mandioquinha com Molho Suave', 
            ingredients: 'Feito com mandioquinha fresca', 
            price: 'R$ 45,00', 
            className: 'nhoqueMandioquinha'
        },

        {
            name: 'Salada Bella', 
            ingredients: 'Alface, rúcula, tomate, pepino, ovo cozido, frango grelhado', 
            price: 'R$ 38,00', 
            className: 'saladaBella'
        },

        {
            name: 'Quibe de Abóbora Assado com Hortelã', 
            ingredients: 'Acompanhado de salada', 
            price: 'R$ 40,00', 
            className: 'quibeAbobora'
        },

        {
            name: 'Panqueca de Tapioca com Recheio de Queijo e Tomate', 
            ingredients: 'Massa 100% sem glúten', 
            price: 'R$ 35,00', 
            className: 'panquecaTapioca'
        }
    ],


    sobremesas: [
        {
            name: 'Tiramisù Tradicional', 
            ingredients: 'Creme de mascarpone, café e cacau', 
            price: 'R$ 25,00', 
            className: 'tiramisuTradicional'
        },
        
        { 
            name: 'Panna Cotta com Frutas Vermelhas', 
            ingredients: 'Creme italiano com calda de frutas', 
            price: 'R$ 22,00', 
            className: 'pannaCotta' 
        },

        {
            name: 'Torta de Limão com Merengue', 
            ingredients: 'Base crocante, creme de limão merengue', 
            price: 'R$ 20,00', 
            className: 'tortaLimao'
        },

        {
            name: 'Mousse de Chocolate Meio Amargo', 
            ingredients: 'Textura aerada e sabor intenso', 
            price: 'R$ 18,00', 
            className: 'mousseChocolate'
        },

        {
            name: 'Gelato Italiano (3 sabores)', 
            ingredients: 'Chocolate, baunilha e frutas vermelhas', 
            price: 'R$ 28,00', 
            className: 'gelatoItaliano'
        },
        
        {
            name: 'Cannoli com Ricota e Gotas de Chocolate', 
            ingredients: 'Massa crocante recheada', 
            price: 'R$ 15,00', 
            className: 'cannoliRicota'
        },

        {
            name: 'Cheesecake de Frutas Vermelhas', 
            ingredients: 'Base de biscoito, creme de queijo e geleia', 
            price: 'R$ 24,00', 
            className: 'cheesecakeFrutas'
        },

        {
            name: 'Brownie com Calda de Nutella', 
            ingredients: 'Quentinho e acompanha sorvete', 
            price: 'R$ 26,00', 
            className: 'brownieNutella'
        },

        {
            name: 'Creme Brûlée com Baunilha', 
            ingredients: 'Creme francês com açúcar queimado', 
            price: 'R$ 27,00', 
            className: 'cremeBaunilha'
        },

        {
            name: 'Mini Pudim de Leite Condensado', 
            ingredients: 'Porção individual com calda de caramelo', 
            price: 'R$ 16,00', 
            className: 'miniPudim'
        }
    ],


    bebidas: [
        {
            name: 'Refrigerante Lata (350ml)', 
            ingredients: 'Coca-Cola, Guaraná Antarctica, Fanta Laranja, Sprite', 
            price: 'R$ 8,00', 
            className: 'refrigeranteLata'
        },

        {
            name: 'Água Mineral', 
            ingredients: 'Com ou sem gás (500ml)', 
            price: 'R$ 6,00', 
            className: 'agua'
        },

        {
            name: 'Suco Natural (300ml)', 
            ingredients: 'Laranja, Uva, Abacaxi com Hortelã, Manga', 
            price: 'R$ 12,00', 
            className: 'sucoNatural'
        },

        {
            name: 'Suco Detox (300ml)', 
            ingredients: 'Couve, limão, gengibre e maçã', 
            price: 'R$ 15,00', 
            className: 'sucoDetox'
        },

        {
            name: 'Chá Gelado (500ml)', 
            ingredients: 'Limão ou Pêssego', 
            price: 'R$ 10,00', 
            className: 'chaGelado'
        },

        {
            name: 'Café Expresso', 
            ingredients: 'Grãos 100% arábica', 
            price: 'R$ 7,00', 
            className: 'cafeExpresso'
        },

        {
            name: 'Capuccino Cremoso', 
            ingredients: 'Com chocolate em pó ou canela', 
            price: 'R$ 11,00', 
            className: 'capuccinoCremoso'
        },

        {
            name: 'Cerveja Long Neck (355ml)', 
            ingredients: 'Heineken, Budweiser, Stella Artois', 
            price: 'R$ 14,00', 
            className: 'cervejaLongNeck'
        },

        {
            name: 'Vinho Tinto Taça (180ml)', 
            ingredients: 'Chianti ou Merlot', 
            price: 'R$ 30,00', 
            className: 'vinhoTinto'
        },

        {
            name: 'Vinho Branco Taça (180ml)', 
            ingredients: 'Chardonnay ou Sauvignon Blanc', 
            price: 'R$ 28,00', 
            className: 'vinhoBranco'
        },
        
        { name: 'Spritz Italiano', 
            ingredients: 'Aperol com prosecco e soda', 
            price: 'R$ 32,00', 
            className: 'spritzItaliano' 
        },

        {
            name: 'Água Tônica com Limão', 
            ingredients: 'Servida com gelo e rodelas de limão', 
            price: 'R$ 9,00', 
            className: 'aguaTonica'
        },

        {
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

// ----------------------------------------------------
// 2. COMPONENTE REUTILIZÁVEL: 'MenuCategory' com forwardRef
//    Adicionamos também a prop `id` para o observer.
// ----------------------------------------------------

const MenuCategory = forwardRef(({ id, title, items }, ref) => {
    return (
        // O ID é necessário para o IntersectionObserver identificar o elemento
        <div ref={ref} id={id}> 
            <h3 className="category-title">{title}</h3>
            <div className="food-items">
                {items.map((item, index) => (
                    <div className={style.foodItem} key={index}>
                        <div className={style.informationItem}>
                            <h4 className={style.foodName}>{item.name}</h4>
                            <p className={style.ingredients}>{item.ingredients}</p>
                            <div className={style.shoppingInfo}>
                                <a className={style.addToCart}>+ Adicionar</a>
                                <p className={style.price}>{item.price}</p>
                            </div>
                            {item.image && ( // Condição para renderizar a imagem
                            <img src={item.image} alt={item.name} className={style.foodImage} />
                        )}
                        </div>
                        <span className={style[item.className]}></span>
                    </div>
                ))}
            </div>
        </div>
    );
});

// ----------------------------------------------------
// 3. COMPONENTE PRINCIPAL: 'Cardapio'
// ----------------------------------------------------

function Cardapio() {
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

        // Observar todas as categorias referenciadas
        Object.values(categoryRefs.current).forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            // Limpa o observer ao desmontar o componente
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* O Carrossel de navegação usará a função scrollToCategory */}
            <CaroselMenu 
                categories={categories}
                activeCategory={activeCategory}
                scrollToCategory={scrollToCategory}
                setIsDragging={setIsDragging}
            />
            
            <div className={style.menuContainer}>
                {/* Mapeia o array de categorias para renderizar os componentes */}
                {categories.map((category) => (
                    <MenuCategory 
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        items={cardapio[category.id]}
                        // Seta a referência para o objeto `categoryRefs.current`
                        ref={(el) => (categoryRefs.current[category.id] = el)}
                    />
                ))}
            </div>
        </>
    );
}

export default Cardapio;