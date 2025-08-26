export function clickMenu() {    
    if(itens.style.display == 'block') {
        itens.style.display = 'none';
        if (document.querySelector('.menu-overlay')) {
            document.body.removeChild(document.querySelector('.menu-overlay'));
        }
    } else {
        itens.style.display = 'block';
        
        //       *****Overlay e a parte que fica atras do menu*****
        // Cria o overlay
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        // Estilo do overlay
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.right = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.73)';
        overlay.style.zIndex = '999';
        overlay.style.backdropFilter = 'blur(1px)';

        // Fecha o menu quando clicar no overlay
        overlay.addEventListener('click', function() {
            itens.style.display = 'none';
            document.body.removeChild(overlay);
            document.removeEventListener('click', closeMenuOnClickOutside);
        });
        
        document.body.appendChild(overlay);
        // Estilização do menu
        itens.style.position = 'fixed';
        itens.style.top = '0';
        itens.style.right = '0';
        itens.style.width = '40%';
        itens.style.height = '50%';
        itens.style.backgroundColor = 'white';
        itens.style.zIndex = '1000';
        itens.style.padding = '20px';
        itens.style.margin = '15px'
        itens.style.overflowY = 'auto';
        itens.style.borderRadius = '15px';




        // Adiciona o ícone de fechar
        const closeOverlay = document.createElement('span');
        closeOverlay.className = 'material-symbols-outlined';
        closeOverlay.textContent = 'close';
        closeOverlay.style.position = 'absolute';
        closeOverlay.style.top = '5px';    
        closeOverlay.style.right = '10px';
        closeOverlay.style.cursor = 'pointer';
        
        // Adiciona evento de clique no X
        itens.appendChild(closeOverlay);
        closeOverlay.addEventListener('click', function(e) {
            e.stopPropagation();
            itens.style.display = 'none';
            document.body.removeChild(overlay);
            document.removeEventListener('click', closeMenuOnClickOutside);
        });


        setTimeout(() => {//?
            document.addEventListener('click', closeMenuOnClickOutside);
        }, 0);

        
    }
}

function closeMenuOnClickOutside(e) {
    const menu = document.getElementById('itens');
    const overlay = document.querySelector('.menu-overlay');
    
    // Se o clique foi fora do menu e do overlay, e o overlay existe
    if (overlay && !menu.contains(e.target) && e.target !== document.querySelector('.menu-icon')) { // Adicione a classe do seu ícone de menu aqui
        menu.style.display = 'none';
        document.body.removeChild(overlay);
        // Remove este event listener depois de usar
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}