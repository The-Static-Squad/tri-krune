const topNav = document.getElementById('top-nav-container');

topNav.innerHTML = `
    <div class="nav-logo">
        <img src="" alt="">
    </div>
    <div class="nav-bar">
        <ul>
            <li class="nav-item"><a href="">Kategorije</a></li>
            <li class="nav-item"><a href="store.html">Proizvodi</a></li>
            <li class="nav-item"><a href="product.html">Proizvod</a></li>
            <li class="nav-item"><a href="contact.html">Kontakt</a></li>
            <li class="nav-item"><a href="gallery.html">Dostava</a></li>
        </ul>
    </div>
    <div class="nav-icons-container">
        <div class="nav-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        <div class="nav-icon"><i class="fa-solid fa-cart-shopping"></i></div>
    </div>
`;
