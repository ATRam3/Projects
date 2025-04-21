const navToggle = document.getElementById('nav-toggle'),
      navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close');


if (navToggle){
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show-menu');
    });
}


if (navClose){
    navClose.addEventListener('click', function(){
        navMenu.classList.remove('show-menu');
    });
}

        /*=============== REMOVE MENU MOBILE ===============*/

        const navLink = document.querySelectorAll('.nav__link');

        navLink.forEach(function(link){
            link.addEventListener('click', function (){
                navMenu.classList.remove('show-menu');
            });
        });

        /*=============== CHANGE BACKGROUND HEADER ===============*/
        /* const scrollHeader = () =>{
            const header = document.getElementById('header');
            // Add a class if the bottom offset is greater than 50 of the viewport
            this.scrollY >= 50 ? header.classList.add('scroll-header') 
                               : header.classList.remove('scroll-header');
        };  */
        window.addEventListener('scroll', function(){
            const header = document.getElementById('header');

            this.scrollY > 50 ? header.classList.add('scroll-header'): 
                                header.classList.remove('scroll-header');
        });

        /*=============== SWIPER INITIALIZATION ===============*/
        let testimonialSwiper = new Swiper(".testimonial-swiper", {
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        let newSwiper = new Swiper(".new-swiper", {
            spaceBetween: 24,
            loop: true,
            breakpoints: {
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
            },
        });

        /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
        const sections = document.querySelectorAll('section[id]');
            
        const scrollActive = () =>{
            const scrollDown = window.scrollY;

            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight,
                      sectionTop = current.offsetTop - 58,
                      sectionId = current.getAttribute('id'),
                      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
                    
                if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link');
                }else{
                    sectionsClass.classList.remove('active-link');
                }                                                    
            });
        };
        window.addEventListener('scroll', scrollActive);

        /*=============== SHOW SCROLL UP ===============*/
        
        window.addEventListener('scroll', function(){
            const scrollUp = document.getElementById('scroll-up');

            this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : 
                                  scrollUp.classList.remove('show-scroll');
        });
        

        /*=============== SHOW CART ===============*/
        const cart = document.getElementById('cart'),
              cartShop = document.getElementById('cart-shop'),
              cartClose = document.getElementById('cart-close');
        
        if (cartShop){
            cartShop.addEventListener('click', function(){
                cart.classList.add('show-cart');
            });
        }

        if (cartClose){
            cartClose.addEventListener('click', function(){
                cart.classList.remove('show-cart');
            });
        }
        
              
        
        /*=============== SHOW WISHLIST ===============*/

        const wishList = document.getElementById('wishlist'),
              wishListButton = document.getElementById('wishlist-button'),
              wishListClose = document.getElementById('wishlist-close');

        /* =======WISHLIST SHOW =======*/

        if (wishListButton){
            wishListButton.addEventListener('click', function(){
                wishList.classList.add('show-wishlist');
            });
        }

        /*=========WISHLIST HIDDEN=======*/

        if (wishListClose){
            wishListClose.addEventListener('click', function(){
                wishList.classList.remove('show-wishlist');
            });
        }
       

        /*=============== PRODUCT MODAL ===============*/


        const productModal = document.getElementById('product-modal'),
              modalClose = document.getElementById('modal-close');
        
        /*=======MODAL HIDDEN=======*/

        if (modalClose){
            modalClose.addEventListener('click', function(){
                productModal.classList.remove('active');
            });
        }

        // Close modal when clicking outside of content

        productModal.addEventListener('click', function(e){
            if (e.target === productModal){
                productModal.classList.remove('active');
            }
        });
        
        /*=============== CHECKOUT MODAL ===============*/

        const checkoutModal = document.getElementById('checkout-modal'),
              checkoutButton = document.getElementById('checkout-button'),
              checkoutClose = document.getElementById('checkout-close');


        /*======== CHECKOUT SHOW ======= */
        if (checkoutButton){
            checkoutButton.addEventListener('click', function(){
                if (cartItem.length > 0){
                    checkoutModal.classList.add('active');
                    updateOrderSummary();
                }
            });
        }

        /*===== CHECKOUT HIDDEN =====*/
        if(checkoutClose){
            checkoutClose.addEventListener('click', () =>{
                checkoutModal.classList.remove('active');
            });
        }

        // Close checkout modal when clicking outside
       checkoutModal.addEventListener('click', function(e){
            if (e.target === checkoutModal){
                checkoutModal.classList.remove();
            }

       }); 

        /*=============== ORDER CONFIRMATION ===============*/
        const orderConfirmation = document.getElementById('order-confirmation'),
              placeOrderButton = document.getElementById('place-order'),
              continueShoppingButton = document.getElementById('continue-shopping');

        /*===== PLACE ORDER =====*/
        if(placeOrderButton){
            placeOrderButton.addEventListener('click', (e) =>{
                e.preventDefault();
                const form = document.getElementById('checkout-form');
                if (form.checkValidity()) {
                    // Generate random order number
                    const orderNumber = 'WX' + Math.floor(Math.random() * 1000000000);
                    document.getElementById('order-id').textContent = orderNumber;
                    
                    checkoutModal.classList.remove('active');
                    orderConfirmation.classList.add('active');
                    
                    // Clear cart after successful order
                    cartItem = [];
                    updateCart();
                } else {
                    form.reportValidity();
                }
            });
        }

        /*===== CONTINUE SHOPPING =====*/
        if(continueShoppingButton){
            continueShoppingButton.addEventListener('click', () =>{
                orderConfirmation.classList.remove('active');
            });
        }

        // Close confirmation when clicking outside
        orderConfirmation.addEventListener('click', (e) => {
            if (e.target === orderConfirmation) {
                orderConfirmation.classList.remove('active');
            }
        });

        /*=============== USER ACCOUNT MODAL ===============*/
        



        const accountModal = document.getElementById('account-modal'),
              userButton = document.getElementById('user-button'),
              accountClose = document.getElementById('account-close'),
              loginTab = document.getElementById('login-tab'),
              signupTab = document.getElementById('signup-tab'),
              loginForm = document.getElementById('login-form'),
              signupForm = document.getElementById('signup-form'),
              loginSubmit = document.getElementById('login-submit'),
              signupSubmit = document.getElementById('signup-submit');

        /*===== ACCOUNT SHOW =====*/
        if(userButton){
            userButton.addEventListener('click', () =>{
                accountModal.classList.add('active');
            });
        }

        /*===== ACCOUNT HIDDEN =====*/
        if(accountClose){
            accountClose.addEventListener('click', () =>{
                accountModal.classList.remove('active');
            });
        }

        // Close account modal when clicking outside
        accountModal.addEventListener('click', (e) => {
            if (e.target === accountModal) {
                accountModal.classList.remove('active');
            }
        });

        /*===== ACCOUNT TABS =====*/
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        });

        signupTab.addEventListener('click', () => {
            loginTab.classList.remove('active');
            signupTab.classList.add('active');
            loginForm.classList.remove('active');
            signupForm.classList.add('active');
        });

        /*===== FORM SUBMISSION =====*/
        loginSubmit.addEventListener('click', () => {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (email && password) {
                // In a real app, this would validate with a server
                alert('Login successful!');
                accountModal.classList.remove('active');
            } else {
                alert('Please enter both email and password');
            }
        });

        signupSubmit.addEventListener('click', () => {
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            
            if (name && email && password) {
                // In a real app, this would register with a server
                alert('Account created successfully!');
                accountModal.classList.remove('active');
            } else {
                alert('Please fill in all fields');
            }
        });


        /*=============== DARK LIGHT THEME ===============*/ 
        const themeButton = document.getElementById('theme-button');
        const darkTheme = 'dark-theme';
        const iconTheme = 'bx-sun';

        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';


        // Check for system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            document.body.classList.add(darkTheme);
            themeButton.classList.add(iconTheme);
        }

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.documentElement.classList.add('dark');
                document.body.classList.add(darkTheme);
                themeButton.classList.add(iconTheme);
            } else {
                document.documentElement.classList.remove('dark');
                document.body.classList.remove(darkTheme);
                themeButton.classList.remove(iconTheme);
            }
        });

        // We validate if the user previously chose a topic
        if (selectedTheme) {
            // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
            themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
        }

        // Activate / deactivate the theme manually with the button
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
        });

        /*=============== CART FUNCTIONALITY ===============*/
        // Cart state
        let cartItem = [];
        
        // Wishlist state
        let wishlistItems = [];

        // Product data
        const featuredProducts = [
            {id: 1, name: 'Spirit Rose', price: 1500, image: "assets/img/product1.png", quantity: 1},
            {id: 2, name: 'Khaki Pilot', price: 1350, image: "assets/img/product2.png", quantity: 1},
            {id: 3, name: 'Jubilee Black', price: 870, image: "assets/img/product3.png", quantity: 1},
            {id: 4, name: 'Fosil Me3', price: 650, image: "assets/img/product4.png", quantity: 1},
            {id: 5, name: 'Duchen', price: 950, image: "assets/img/featured1.png", quantity: 1},
            {id: 7, name: 'Rose Gold', price: 850, image: "assets/img/featured2.png", quantity: 1},
            {id: 8, name: 'Ingersoll', price: 250, image: "assets/img/featured3.png", quantity: 1},
            {id: 9, name: 'Longiness', price: 980, image: "assets/img/new1.png", quantity: 1},
            {id: 10, name: 'Jazzmaster', price: 1150, image: "assets/img/new2.png", quantity: 1},
            {id: 11, name: 'Dreyfuss Gold', price: 750, image: "assets/img/new3.png", quantity: 1},
            {id: 12, name: 'Portuguese Rose', price: 1590, image: "assets/img/new1.png", quantity: 1},
        ];

        const products = [
            {id: 1, name: 'Spirit Rose', price: 1500, image: "assets/img/product1.png", quantity: 1},
            {id: 2, name: 'Khaki Pilot', price: 1350, image: "assets/img/product2.png", quantity: 1},
            {id: 3, name: 'Jubilee Black', price: 870, image: "assets/img/product3.png", quantity: 1},
            {id: 4, name: 'Fosil Me3', price: 650, image: "assets/img/product4.png", quantity: 1},
            {id: 5, name: 'Duchen', price: 950, image: "assets/img/featured1.png", quantity: 1},
            {id: 7, name: 'Rose Gold', price: 850, image: "assets/img/featured2.png", quantity: 1},
            {id: 8, name: 'Ingersoll', price: 250, image: "assets/img/featured3.png", quantity: 1},
            {id: 9, name: 'Longiness', price: 980, image: "assets/img/new1.png", quantity: 1},
            {id: 10, name: 'Jazzmaster', price: 1150, image: "assets/img/new2.png", quantity: 1},
            {id: 11, name: 'Dreyfuss Gold', price: 750, image: "assets/img/new3.png", quantity: 1},
            {id: 12, name: 'Portuguese Rose', price: 1590, image: "assets/img/new1.png", quantity: 1},
        ];

        const newArrivalProducts = [
            {id: 9, name: 'Longiness', price: 980, image: "assets/img/new1.png", quantity: 1},
            {id: 10, name: 'Jazzmaster', price: 1150, image: "assets/img/new2.png", quantity: 1},
            {id: 11, name: 'Dreyfuss Gold', price: 750, image: "assets/img/new3.png", quantity: 1},
            {id: 12, name: 'Portuguese Rose', price: 1590, image: "assets/img/new1.png", quantity: 1},
        ];

        // Combine all products for search functionality
        const allProducts = [...products, ...newArrivalProducts];

        // Initialize products on page load
        document.addEventListener('DOMContentLoaded', initializeShop);

        function initializeShop() {
            renderFeaturedProducts();
            renderProducts();
            renderNewProducts();
            
            // Add event listener for the home product
            document.getElementById('add-to-cart-home').addEventListener('click', () => {
                // Add the featured home product (assuming it's a special product with id 0)
                const homeProduct = {
                    id: 0, 
                    name: 'B720 Collection', 
                    price: 1245, 
                    image: "assets/img/home.png", 
                    quantity: 1
                };
                addToCart(homeProduct);
            });
            
            document.getElementById('view-details-home').addEventListener('click', (e) => {
                e.preventDefault();
                const homeProduct = {
                    id: 0, 
                    name: 'B720 Collection', 
                    price: 1245, 
                    image: "https://i.imgur.com/JRCkGe1.png"
                };
                showProductModal(homeProduct);
            });
            
            // Add event listeners for quantity inputs in modal
            const modalDecrease = document.getElementById('modal-decrease');
            const modalIncrease = document.getElementById('modal-increase');
            const modalQuantity = document.getElementById('modal-quantity');
            
            modalDecrease.addEventListener('click', () => {
                if (parseInt(modalQuantity.value) > 1) {
                    modalQuantity.value = parseInt(modalQuantity.value) - 1;
                }
            });
            
            modalIncrease.addEventListener('click', () => {
                modalQuantity.value = parseInt(modalQuantity.value) + 1;
            });
            
            // Modal add to cart button
            document.getElementById('modal-add-to-cart').addEventListener('click', () => {
                const productId = parseInt(document.getElementById('modal-img').dataset.id);
                const quantity = parseInt(document.getElementById('modal-quantity').value);
                
                // Find the product from all products
                const product = [...allProducts, {id: 0, name: 'B720 Collection', price: 1245, image: "https://i.imgur.com/JRCkGe1.png", quantity: 1}]
                    .find(p => p.id === productId);
                
                if (product) {
                    addToCart({...product, quantity});
                    productModal.classList.remove('active');
                }
            });
            
            // Modal add to wishlist button
            document.getElementById('modal-add-to-wishlist').addEventListener('click', () => {
                const productId = parseInt(document.getElementById('modal-img').dataset.id);
                
                // Find the product from all products
                const product = [...allProducts, {id: 0, name: 'B720 Collection', price: 1245, image: "assets/img/home.png", quantity: 1}]
                    .find(p => p.id === productId);
                
                if (product) {
                    addToWishlist(product);
                    productModal.classList.remove('active');
                }
            });
            
            // Size buttons in modal
            document.querySelectorAll('.modal__size').forEach(size => {
                size.addEventListener('click', () => {
                    document.querySelectorAll('.modal__size').forEach(s => s.classList.remove('modal__size-active'));
                    size.classList.add('modal__size-active');
                });
            });
            
            // Color buttons in modal
            document.querySelectorAll('.modal__color').forEach(color => {
                color.addEventListener('click', () => {
                    document.querySelectorAll('.modal__color').forEach(c => c.classList.remove('modal__color-active'));
                    color.classList.add('modal__color-active');
                });
            });
            
            // Set up search functionality
            document.getElementById('search-input').addEventListener('input', handleSearch);
            
            // Set up filter functionality
            document.getElementById('sort-filter').addEventListener('change', applyFilters);
            document.getElementById('price-filter').addEventListener('change', applyFilters);
            
            // Initialize cart
            updateCart();
            updateWishlist();
        }

        function renderFeaturedProducts() {
            const featuredContainer = document.querySelector('.featured__container');
            featuredContainer.innerHTML = '';
            
            featuredProducts.forEach(product => {
                const featuredCard = document.createElement('article');
                featuredCard.classList.add('featured__card');
                featuredCard.innerHTML = `
                    <span class="featured__tag">Sale</span>
                    <img src="${product.image}" alt="${product.name}" class="featured__img">
                    <div class="featured__data">
                        <h3 class="featured__title">${product.name}</h3>
                        <span class="featured__price">$${product.price}</span>
                    </div>
                    <button class="button featured__button" data-id="${product.id}">ADD TO CART</button>
                `;
                
                featuredContainer.appendChild(featuredCard);
                
                // Add event listener to the button
                const button = featuredCard.querySelector('.featured__button');
                button.addEventListener('click', () => {
                    addToCart(product);
                });
                
                // Make entire card clickable to view details
                featuredCard.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('featured__button')) {
                        showProductModal(product);
                    }
                });
            });
        }

        function renderProducts() {
            const productsContainer = document.querySelector('.products__container');
            productsContainer.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('article');
                productCard.classList.add('products__card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="products__img">
                    <h3 class="products__title">${product.name}</h3>
                    <span class="products__price">$${product.price}</span>
                    <button class="products__button" data-id="${product.id}">
                        <i class='bx bx-shopping-bag'></i>
                    </button>
                `;
                
                productsContainer.appendChild(productCard);
                
                // Add event listener to the button
                const button = productCard.querySelector('.products__button');
                button.addEventListener('click', () => {
                    addToCart(product);
                });
                
                // Make product card clickable for details
                productCard.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('products__button') && !e.target.closest('.products__button')) {
                        showProductModal(product);
                    }
                });
            });
        }

        function renderNewProducts() {
            const swiperWrapper = document.querySelector('.new-swiper .swiper-wrapper');
            swiperWrapper.innerHTML = '';
            
            newArrivalProducts.forEach(product => {
                const newCard = document.createElement('article');
                newCard.classList.add('new__card', 'swiper-slide');
                newCard.innerHTML = `
                    <span class="new__tag">New</span>
                    <img src="${product.image}" alt="${product.name}" class="new__img">
                    <div class="new__data">
                        <h3 class="new__title">${product.name}</h3>
                        <span class="new__price">$${product.price}</span>
                    </div>
                    <button class="button new__button" data-id="${product.id}">ADD TO CART</button>
                `;
                
                swiperWrapper.appendChild(newCard);
                
                // Add event listener to the button
                const button = newCard.querySelector('.new__button');
                button.addEventListener('click', () => {
                    addToCart(product);
                });
                
                // Make card clickable for details
                newCard.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('new__button')) {
                        showProductModal(product);
                    }
                });
            });
            
            // Reinitialize swiper to update slides
            newSwiper.update();
        }

        function addToCart(product) {
            // Check if product already exists in cart
            const existingItem = cartItem.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += product.quantity || 1;
            } else {
                cartItem.push({...product, quantity: product.quantity || 1});
            }
            
            updateCart();
            cart.classList.add('show-cart');
        }

        function removeFromCart(productId) {
            cartItem = cartItem.filter(item => item.id !== productId);
            updateCart();
        }

        function updateCart() {
            const cartContainer = document.querySelector('.cart__container');
            const totalItems = cartItem.reduce((sum, item) => sum + item.quantity, 0);
            
            // Update cart count
            document.querySelector('.cartCount').textContent = totalItems;
            document.querySelector('.cart__prices-item').textContent = totalItems === 1 ? '1 item' : `${totalItems} items`;
            
            // Calculate total price
            const totalPrice = cartItem.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.querySelector('.cart__prices-total').textContent = `$${totalPrice.toFixed(2)}`;
            
            // Render cart items
            
            if (cartItem.length === 0) {
                cartContainer.innerHTML = `
                    <div class="cart__empty">
                        <i class='bx bx-cart' style="font-size: 3rem; color: var(--text-color-light);"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
                document.getElementById('checkout-button').disabled = true;
                document.getElementById('checkout-button').style.opacity = '0.5';
            } else {
                cartContainer.innerHTML = '';

                cartItem.forEach(item => {
                    const cartCard = document.createElement('article');
                    cartCard.classList.add('cart__card');
                    cartCard.innerHTML = `
                        
                    `
                });
                
                cartItem.forEach(item => {
                    const cartCard = document.createElement('article');
                    cartCard.classList.add('cart__card');
                    cartCard.innerHTML = `
                        <div class="cart__box">
                            <img src="${item.image}" alt="${item.name}" class="cart__img">
                        </div>
                        <div class="cart__details">
                            <h3 class="cart__title">${item.name}</h3>
                            <span class="cart__price">$${item.price}</span>
                            <div class="cart__amount">
                                <div class="cart__amount-content">
                                    <button class="cart__amount-box cart-decrease" data-id="${item.id}">
                                        <i class='bx bx-minus'></i>
                                    </button>
                                    <span class="cart__amount-number">${item.quantity}</span>
                                    <button class="cart__amount-box cart-increase" data-id="${item.id}">
                                        <i class='bx bx-plus'></i>
                                    </button>
                                </div>
                                <button class="cart__amount-trash cart-remove" data-id="${item.id}">
                                    <i class='bx bx-trash-alt'></i>
                                </button>
                            </div>
                        </div>
                    `;
                    
                    cartContainer.appendChild(cartCard);
                });
                
                document.getElementById('checkout-button').disabled = false;
                document.getElementById('checkout-button').style.opacity = '1';
                
                // Add event listeners to cart buttons
                document.querySelectorAll('.cart-decrease').forEach(button => {
                    button.addEventListener('click', () => {
                        const productId = parseInt(button.dataset.id);
                        const item = cartItem.find(item => item.id === productId);
                        if (item) {
                            if (item.quantity <= 0){
                                removeFromCart(productId);
                            } else{
                                item.quantity -= 1;
                                updateCart();
                            }
                        }
                    });
                });
                
                document.querySelectorAll('.cart-increase').forEach(button => {
                    button.addEventListener('click', () => {
                        const productId = parseInt(button.dataset.id);
                        const item = cartItem.find(item => item.id === productId);
                        
                        if (item) {
                            item.quantity += 1;
                            updateCart();
                        }
                    });
                });
                
                document.querySelectorAll('.cart-remove').forEach(button => {
                    button.addEventListener('click', () => {
                        const productId = parseInt(button.dataset.id);
                        removeFromCart(productId);
                    });
                });
            }
        }

        function updateOrderSummary() {
            const orderList = document.getElementById('order-list');
            orderList.innerHTML = '';
            
            cartItem.forEach(item => {
                const orderItem = document.createElement('div');
                orderItem.classList.add('order-item');
                orderItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="order-img">
                    <div class="order-details">
                        <h4 class="order-title">${item.name}</h4>
                        <div class="order-price">$${item.price}</div>
                        <div class="order-quantity">Quantity: ${item.quantity}</div>
                    </div>
                `;
                
                orderList.appendChild(orderItem);
            });
            
            // Calculate subtotal, tax, and total
            const subtotal = cartItem.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.08; // 8% tax
            const shipping = 10.00;
            const total = subtotal + tax + shipping;
            
            document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('summary-tax').textContent = `$${tax.toFixed(2)}`;
            document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
        }

        function showProductModal(product) {
            // Set modal content
            document.getElementById('modal-img').src = product.image;
            document.getElementById('modal-img').dataset.id = product.id;
            document.getElementById('modal-title').textContent = product.name;
            document.getElementById('modal-price').textContent = `$${product.price.toFixed(2)}`;
            document.getElementById('modal-quantity').value = 1;
            
            // Show modal
            productModal.classList.add('active');
        }

        function addToWishlist(product) {
            const exixtingitem = wishlistItems.find(item => item.id === product.id);
            // Check if product already exists in wishlist
            const existingItem = wishlistItems.find(item => item.id === product.id);
            
            if (!existingItem) {
                wishlistItems.push(product);
                updateWishlist();
                
                // Show wishlist
                wishlist.classList.add('show-wishlist');
            } else {
                alert('This product is already in your wishlist!');
            }
        }

        function removeFromWishlist(productId) {
            wishlistItems = wishlistItems.filter(item => item.id !== productId);
            updateWishlist();
        }

        function updateWishlist() {
            const wishlistContainer = document.querySelector('.wishlist__container');
            
            if (wishlistItems.length === 0) {
                wishlistContainer.innerHTML = `
                    <div class="wishlist__empty">
                        <i class='bx bx-heart' style="font-size: 3rem; color: var(--text-color-light);"></i>
                        <p>Your wishlist is empty</p>
                    </div>
                `;
            } else {
                wishlistContainer.innerHTML = '';
                
                wishlistItems.forEach(item => {
                    const wishlistCard = document.createElement('article');
                    wishlistCard.classList.add('wishlist__card');
                    wishlistCard.innerHTML = `
                        <div class="wishlist__box">
                            <img src="${item.image}" alt="${item.name}" class="wishlist__img">
                        </div>
                        <div class="wishlist__details">
                            <h3 class="wishlist__title">${item.name}</h3>
                            <span class="wishlist__price">$${item.price}</span>
                            <div class="wishlist__actions">
                                <button class="wishlist__cart" data-id="${item.id}">
                                    <i class='bx bx-shopping-bag'></i>
                                </button>
                                <button class="wishlist__delete" data-id="${item.id}">
                                    <i class='bx bx-trash-alt'></i>
                                </button>
                            </div>
                        </div>
                    `;
                    
                    wishlistContainer.appendChild(wishlistCard);
                });
                
                // Add event listeners to wishlist buttons
                document.querySelectorAll('.wishlist__cart').forEach(button => {
                    button.addEventListener('click', () => {
                        const productId = parseInt(button.dataset.id);
                        const item = wishlistItems.find(item => item.id === productId);
                        if (item) {
                            addToCart({...item, quantity: 1});
                            removeFromWishlist(productId);
                        }
                    });
                });
                
                document.querySelectorAll('.wishlist__delete').forEach(button => {
                    button.addEventListener('click', () => {
                        const productId = parseInt(button.dataset.id);
                        removeFromWishlist(productId);
                    });
                });
            }
        }

        function handleSearch() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            
            // Filter featured products
            const featuredContainer = document.querySelector('.featured__container');
            featuredContainer.innerHTML = '';
            
            const filteredFeatured = featuredProducts.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
            
            if (filteredFeatured.length === 0) {
                featuredContainer.innerHTML = '<p class="search-no-results">No featured products found</p>';
            } else {
                filteredFeatured.forEach(product => {
                    const featuredCard = document.createElement('article');
                    featuredCard.classList.add('featured__card');
                    featuredCard.innerHTML = `
                        <span class="featured__tag">Sale</span>
                        <img src="${product.image}" alt="${product.name}" class="featured__img">
                        <div class="featured__data">
                            <h3 class="featured__title">${product.name}</h3>
                            <span class="featured__price">$${product.price}</span>
                        </div>
                        <button class="button featured__button" data-id="${product.id}">ADD TO CART</button>
                    `;
                    
                    featuredContainer.appendChild(featuredCard);
                    
                    // Add event listener to the button
                    const button = featuredCard.querySelector('.featured__button');
                    button.addEventListener('click', () => {
                        addToCart(product);
                    });
                    
                    // Make entire card clickable to view details
                    featuredCard.addEventListener('click', (e) => {
                        if (!e.target.classList.contains('featured__button')) {
                            showProductModal(product);
                        }
                    });
                });
            }
            
            // Filter main products
            const productsContainer = document.querySelector('.products__container');
            productsContainer.innerHTML = '';
            
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
            
            if (filteredProducts.length === 0) {
                productsContainer.innerHTML = '<p class="search-no-results">No products found</p>';
            } else {
                filteredProducts.forEach(product => {
                    const productCard = document.createElement('article');
                    productCard.classList.add('products__card');
                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="products__img">
                        <h3 class="products__title">${product.name}</h3>
                        <span class="products__price">$${product.price}</span>
                        <button class="products__button" data-id="${product.id}">
                            <i class='bx bx-shopping-bag'></i>
                        </button>
                    `;
                    
                    productsContainer.appendChild(productCard);
                    
                    // Add event listener to the button
                    const button = productCard.querySelector('.products__button');
                    button.addEventListener('click', () => {
                        addToCart(product);
                    });
                    
                    // Make product card clickable for details
                    productCard.addEventListener('click', (e) => {
                        if (!e.target.classList.contains('products__button') && !e.target.closest('.products__button')) {
                            showProductModal(product);
                        }
                    });
                });
            }
        }

        function applyFilters() {
            const sortValue = document.getElementById('sort-filter').value;
            const priceValue = document.getElementById('price-filter').value;
            
            // Clone the product arrays to avoid modifying the originals
            let filteredFeatured = [...featuredProducts];
            let filteredProducts = [...products];
            
            // Apply price filter
            if (priceValue !== 'all') {
                const [min, max] = priceValue.split('-');
                
                if (max) {
                    filteredFeatured = filteredFeatured.filter(product => 
                        product.price >= parseInt(min) && product.price <= parseInt(max)
                    );
                    
                    filteredProducts = filteredProducts.filter(product => 
                        product.price >= parseInt(min) && product.price <= parseInt(max)
                    );
                } else {
                    // Handle "1000+" case
                    filteredFeatured = filteredFeatured.filter(product => 
                        product.price >= parseInt(min)
                    );
                    
                    filteredProducts = filteredProducts.filter(product => 
                        product.price >= parseInt(min)
                    );
                }
            }
            
            // Apply sort filter
            switch(sortValue) {
                case 'price-low':
                    filteredFeatured.sort((a, b) => a.price - b.price);
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredFeatured.sort((a, b) => b.price - a.price);
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    filteredFeatured.sort((a, b) => a.name.localeCompare(b.name));
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                // For 'featured', keep original order
            }
            
            // Render filtered featured products
            const featuredContainer = document.querySelector('.featured__container');
            featuredContainer.innerHTML = '';
            
            if (filteredFeatured.length === 0) {
                featuredContainer.innerHTML = '<p class="filter-no-results">No featured products match your filters</p>';
            } else {
                filteredFeatured.forEach(product => {
                    const featuredCard = document.createElement('article');
                    featuredCard.classList.add('featured__card');
                    featuredCard.innerHTML = `
                        <span class="featured__tag">Sale</span>
                        <img src="${product.image}" alt="${product.name}" class="featured__img">
                        <div class="featured__data">
                            <h3 class="featured__title">${product.name}</h3>
                            <span class="featured__price">$${product.price}</span>
                        </div>
                        <button class="button featured__button" data-id="${product.id}">ADD TO CART</button>
                    `;
                    
                    featuredContainer.appendChild(featuredCard);
                    
                    // Add event listener to the button
                    const button = featuredCard.querySelector('.featured__button');
                    button.addEventListener('click', () => {
                        addToCart(product);
                    });
                    
                    // Make entire card clickable to view details
                    featuredCard.addEventListener('click', (e) => {
                        if (!e.target.classList.contains('featured__button')) {
                            showProductModal(product);
                        }
                    });
                });
            }
            
            // Render filtered main products
            const productsContainer = document.querySelector('.products__container');
            productsContainer.innerHTML = '';
            
            if (filteredProducts.length === 0) {
                productsContainer.innerHTML = '<p class="filter-no-results">No products match your filters</p>';
            } else {
                filteredProducts.forEach(product => {
                    const productCard = document.createElement('article');
                    productCard.classList.add('products__card');
                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="products__img">
                        <h3 class="products__title">${product.name}</h3>
                        <span class="products__price">$${product.price}</span>
                        <button class="products__button" data-id="${product.id}">
                            <i class='bx bx-shopping-bag'></i>
                        </button>
                    `;
                    
                    productsContainer.appendChild(productCard);
                    
                    // Add event listener to the button
                    const button = productCard.querySelector('.products__button');
                    button.addEventListener('click', () => {
                        addToCart(product);
                    });
                    
                    // Make product card clickable for details
                    productCard.addEventListener('click', (e) => {
                        if (!e.target.classList.contains('products__button') && !e.target.closest('.products__button')) {
                            showProductModal(product);
                        }
                    });
                });
            }
        }

        // Newsletter form submission
        document.querySelector('.newsletter__subscribe').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter__input').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });