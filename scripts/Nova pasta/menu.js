function MudouTamanho() {
    if (window.innerWidth >= 650) {
        itens.style.display = 'block';
        // Remove o overlay se existir
        if (document.querySelector('.menu-overlay')) {
            document.body.removeChild(document.querySelector('.menu-overlay'));
        }
    } else {
        itens.style.display = 'none';
    }
}

        function clickMenu(){
            if(itens.style.display == 'block'){
                itens.style.display = 'none'
            } else{
                itens.style.display = 'block'
            }

            if (document.querySelector('.menu-overlay')) {
                document.body.removeChild(document.querySelector('.menu-overlay'));
            } else {
                const overlay = document.createElement('div');
                overlay.className = 'menu-overlay';

                //Estilo /// Style

                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.right = '0';
                overlay.style.width = '40%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

                overlay.addEventListener('click', function() {
                itens.style.display = 'none';
                document.body.removeChild(overlay);
                });
            
                document.body.appendChild(overlay);
                //Estilização do menu
                itens.style.position = 'fixed';
                itens.style.top = '0';
                itens.style.right = '0';
                itens.style.width = '40%';
                itens.style.height = '100%';
                itens.style.backgroundColor = 'white';
                itens.style.zIndex = '1000';
                itens.style.padding = '20px';
                itens.style.overflowY = 'auto';
            }

            // Adiciona o ícone de fechar

            const closeOverlay = document.createElement('span');
            closeOverlay.className = 'material-symbols-outlined';
            closeOverlay.textContent = 'close';
            closeOverlay.style.position = 'absolute';
            closeOverlay.style.top = '5px';    
            closeOverlay.style.right = '10px';
            
            // Adiciona evento de clique no X
            itens.appendChild(closeOverlay);
            closeOverlay.addEventListener('click', function(e) {
                e.stopPropagation();
                itens.style.display = 'none';
                if (document.querySelector('.menu-overlay')) {
                    document.body.removeChild(document.querySelector('.menu-overlay'));
                }
            });

            // Quando clicar fecha o menu e remove o overlay
            itens.addEventListener('click', function(e) {
                itens.display = 'none';
                document.body.removeChild(document.querySelector('.menu-overlay'));
            })
                

            if(window.innerWidth >= 1050){
                itens.style.display = 'none';
                document.body.removeChild(document.querySelector('.menu-overlay'));
                document.getElementsByClassName('material-icons')[0].style.display = 'none';
            }                                                                   
        }