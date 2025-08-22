document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-mobile');
    const menuDesktopList = document.querySelector('.menu-desktop ul');

    if (menuIcon && menuDesktopList) {
        // Cria a estrutura do menu mobile
        const mobileNavContainer = document.createElement('nav');
        mobileNavContainer.classList.add('menu-mobile-nav');
        
        // Cria o botão de fechar
        const closeBtn = document.createElement('div');
        closeBtn.classList.add('menu-close-btn');
        closeBtn.innerHTML = '&times;'; // Adiciona um 'X'
        mobileNavContainer.appendChild(closeBtn);

        const mobileList = menuDesktopList.cloneNode(true);
        mobileNavContainer.appendChild(mobileList);
        document.body.appendChild(mobileNavContainer);

        const closeMenu = () => {
            mobileNavContainer.classList.remove('open');
        }

        // Adiciona evento para abrir/fechar o menu
        menuIcon.addEventListener('click', () => {
            mobileNavContainer.classList.toggle('open');
        });

        // Adiciona evento para fechar no botão 'X'
        closeBtn.addEventListener('click', closeMenu);

        // Adiciona evento para fechar o menu ao clicar em um link
        mobileNavContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});