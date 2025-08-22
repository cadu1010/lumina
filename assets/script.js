document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-mobile');
    const menuDesktopList = document.querySelector('.menu-desktop ul');

    if (menuIcon && menuDesktopList) {
        
        const mobileNavContainer = document.createElement('nav');
        mobileNavContainer.classList.add('menu-mobile-nav');
        
       
        const closeBtn = document.createElement('div');
        closeBtn.classList.add('menu-close-btn');
        closeBtn.innerHTML = '&times;'; 
        mobileNavContainer.appendChild(closeBtn);

        const mobileList = menuDesktopList.cloneNode(true);
        mobileNavContainer.appendChild(mobileList);
        document.body.appendChild(mobileNavContainer);

        const closeMenu = () => {
            mobileNavContainer.classList.remove('open');
        }

      
        menuIcon.addEventListener('click', () => {
            mobileNavContainer.classList.toggle('open');
        });

        
        closeBtn.addEventListener('click', closeMenu);

        
        mobileNavContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logoImg = document.getElementById('logo-img');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logoImg.src = 'assets/image/Logo-Escura.png'; 
    } else {
        header.classList.remove('scrolled');
        logoImg.src = 'assets/image/Logo-Clara.png'; 
    }
});