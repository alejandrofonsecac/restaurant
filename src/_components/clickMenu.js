export function clickMenu() {    
    if(itens.style.display == 'block') {
        itens.style.display = 'none';
        if (document.querySelector('.menu-overlay')) {
            document.body.removeChild(document.querySelector('.menu-overlay'));
        }
    } else {
        itens.style.display = 'block';

        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.right = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.73)';
        overlay.style.zIndex = '999';
        overlay.style.backdropFilter = 'blur(1px)';

        overlay.addEventListener('click', function() {
            fecharMenu();
        });

        document.body.appendChild(overlay);

        itens.style.position = 'fixed';
        itens.style.top = '0';
        itens.style.right = '0';
        itens.style.width = '50%';
        itens.style.height = '40%';
        itens.style.backgroundColor = 'white';
        itens.style.zIndex = '1000';
        itens.style.padding = '20px';
        itens.style.margin = '15px'
        itens.style.overflowY = 'auto';
        itens.style.borderRadius = '15px';

        const closeOverlay = document.createElement('span');
        closeOverlay.className = 'material-symbols-outlined';
        closeOverlay.textContent = 'close';
        closeOverlay.style.position = 'absolute';
        closeOverlay.style.top = '5px';    
        closeOverlay.style.right = '10px';
        closeOverlay.style.cursor = 'pointer';
        itens.appendChild(closeOverlay);
        closeOverlay.addEventListener('click', function(e) {
            e.stopPropagation();
            fecharMenu();
        });

        // ✅ FECHAR AO CLICAR EM QUALQUER LINK DO MENU
        itens.querySelectorAll('a, li').forEach(link => {
            link.addEventListener('click', () => {
                fecharMenu();
            });
        });

        setTimeout(() => {
            document.addEventListener('click', closeMenuOnClickOutside);
        }, 0);
    }
}

function fecharMenu() {
    itens.style.display = 'none';
    const overlay = document.querySelector('.menu-overlay');
    if (overlay) document.body.removeChild(overlay);
    document.removeEventListener('click', closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(e) {
    const menu = document.getElementById('itens');
    const overlay = document.querySelector('.menu-overlay');
    if (overlay && !menu.contains(e.target) && e.target !== document.querySelector('.menu-icon')) {
        fecharMenu();
    }
}
