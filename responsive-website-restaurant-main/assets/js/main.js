// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded and ready');
    
    // Pizza data
    const pizzas = [
        {
            id: 1,
            name: "Margherita",
            description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBtYXJnaGVyaXRhfGVufDB8fDB8fHww",
            type: "veg",
            tag: "Vegetarian",
            rating: 4.8,
            reviews: 32,
            calories: 550,
            nutrition: {
                calories: {small: 550, medium: 780, large: 1100},
                protein: {small: "22g", medium: "28g", large: "38g"},
                carbs: {small: "65g", medium: "90g", large: "120g"},
                fat: {small: "22g", medium: "32g", large: "45g"}
            }
        },
        {
            id: 2,
            name: "Pepperoni",
            description: "Tomato sauce, mozzarella, and spicy pepperoni slices",
            price: 11.99,
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
            type: "non-veg",
            tag: "Non-Vegetarian",
            rating: 4.9,
            reviews: 45,
            calories: 680,
            nutrition: {
                calories: {small: 680, medium: 900, large: 1250},
                protein: {small: "26g", medium: "34g", large: "42g"},
                carbs: {small: "60g", medium: "85g", large: "115g"},
                fat: {small: "32g", medium: "42g", large: "58g"}
            }
        },
        {
            id: 3,
            name: "Vegetarian Supreme",
            description: "Loaded with bell peppers, mushrooms, onions, olives, and cheese",
            price: 12.99,
            image: "assets/img/pizza1.png",
            type: "veg",
            tag: "Vegetarian",
            rating: 4.5,
            reviews: 28,
            calories: 580,
            nutrition: {
                calories: {small: 580, medium: 820, large: 1150},
                protein: {small: "18g", medium: "24g", large: "34g"},
                carbs: {small: "68g", medium: "95g", large: "130g"},
                fat: {small: "24g", medium: "34g", large: "48g"}
            }
        },
        {
            id: 4,
            name: "BBQ Chicken",
            description: "BBQ sauce, grilled chicken, red onions, and cilantro",
            price: 13.99,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmJxJTIwY2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww",
            type: "non-veg",
            tag: "Non-Vegetarian",
            rating: 4.7,
            reviews: 36,
            calories: 650,
            nutrition: {
                calories: {small: 650, medium: 880, large: 1200},
                protein: {small: "30g", medium: "38g", large: "46g"},
                carbs: {small: "62g", medium: "88g", large: "118g"},
                fat: {small: "28g", medium: "38g", large: "52g"}
            }
        },
        {
            id: 5,
            name: "Meat Lovers",
            description: "Pepperoni, sausage, bacon, ham, and ground beef",
            price: 14.99,
            image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhdCUyMHBpenphfGVufDB8fDB8fHww",
            type: "non-veg",
            tag: "Non-Vegetarian",
            rating: 4.9,
            reviews: 42,
            calories: 780,
            nutrition: {
                calories: {small: 780, medium: 1050, large: 1400},
                protein: {small: "36g", medium: "48g", large: "62g"},
                carbs: {small: "58g", medium: "82g", large: "110g"},
                fat: {small: "38g", medium: "52g", large: "68g"}
            }
        },
        {
            id: 6,
            name: "Hawaiian",
            description: "Ham, pineapple, and mozzarella on tomato sauce",
            price: 12.99,
            image: "assets/img/Hawaiian-Pizza-7.jpg",
            type: "non-veg",
            tag: "Non-Vegetarian",
            rating: 4.2,
            reviews: 30,
            calories: 620,
            nutrition: {
                calories: {small: 620, medium: 850, large: 1180},
                protein: {small: "24g", medium: "32g", large: "42g"},
                carbs: {small: "65g", medium: "92g", large: "125g"},
                fat: {small: "26g", medium: "36g", large: "50g"}
            }
        },
        {
            id: 7,
            name: "Supreme",
            description: "Pepperoni, sausage, bell peppers, onions, olives, and mushrooms",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VwcmVtZSUyMHBpenphfGVufDB8fDB8fHww",
            type: "specialty",
            tag: "Specialty",
            rating: 4.8,
            reviews: 38,
            calories: 720,
            nutrition: {
                calories: {small: 720, medium: 980, large: 1320},
                protein: {small: "32g", medium: "42g", large: "54g"},
                carbs: {small: "64g", medium: "88g", large: "118g"},
                fat: {small: "34g", medium: "46g", large: "62g"}
            }
        },
        {
            id: 8,
            name: "Four Cheese",
            description: "Mozzarella, parmesan, cheddar, and blue cheese",
            price: 13.99,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
            type: "veg",
            tag: "Vegetarian",
            rating: 4.6,
            reviews: 34,
            calories: 650,
            nutrition: {
                calories: {small: 650, medium: 880, large: 1220},
                protein: {small: "28g", medium: "38g", large: "50g"},
                carbs: {small: "60g", medium: "85g", large: "115g"},
                fat: {small: "30g", medium: "42g", large: "56g"}
            }
        },
        {
            id: 9,
            name: "Buffalo Chicken",
            description: "Buffalo sauce, grilled chicken, red onions, and blue cheese",
            price: 14.99,
            image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVmZmFsbyUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
            type: "non-veg",
            tag: "Non-Vegetarian",
            rating: 4.5,
            reviews: 26,
            calories: 670,
            nutrition: {
                calories: {small: 670, medium: 910, large: 1240},
                protein: {small: "32g", medium: "42g", large: "54g"},
                carbs: {small: "58g", medium: "82g", large: "112g"},
                fat: {small: "30g", medium: "40g", large: "55g"}
            }
        }
    ];

    // Special Deals data
    const deals = [
        {
            id: 'deal1',
            name: 'Family Combo',
            description: '2 Large Pizzas + 1 Side + 2L Soda',
            price: 29.99,
            regularPrice: 38.99,
            image: 'assets/img/pizza.jpg',
            discount: '23%'
        },
        {
            id: 'deal2',
            name: 'Date Night Special',
            description: '1 Medium Pizza + 2 Sides + 2 Desserts',
            price: 24.99,
            regularPrice: 32.99,
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhdCUyMHBpenphfGVufDB8fDB8fHww',
            discount: '24%'
        },
        {
            id: 'deal3',
            name: 'Lunch Special',
            description: '1 Personal Pizza + 1 Side + Drink',
            price: 9.99,
            regularPrice: 14.99,
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D',
            discount: '33%'
        }
    ];

    // Reviews data
    const reviewsData = {
        1: [
            { id: 101, name: "John D.", rating: 5, comment: "Best margherita I've ever had! Perfect balance of flavors.", date: "2023-05-15" },
            { id: 102, name: "Sarah M.", rating: 5, comment: "Simple yet so delicious. The fresh basil makes all the difference.", date: "2023-06-22" },
            { id: 103, name: "Michael R.", rating: 4, comment: "Really good classic pizza. Could use a bit more cheese.", date: "2023-04-10" }
        ],
        2: [
            { id: 201, name: "Emily L.", rating: 5, comment: "The pepperoni is perfectly spicy and the cheese is so gooey!", date: "2023-05-05" },
            { id: 202, name: "Robert K.", rating: 5, comment: "My go-to pizza. Never disappoints!", date: "2023-06-14" },
            { id: 203, name: "Jessica P.", rating: 5, comment: "The perfect amount of pepperoni on every slice. Love it!", date: "2023-07-21" }
        ],
        3: [
            { id: 301, name: "David W.", rating: 4, comment: "Great vegetarian option with lots of fresh toppings.", date: "2023-04-18" },
            { id: 302, name: "Lisa T.", rating: 5, comment: "As a vegetarian, this is my favorite pizza! So flavorful.", date: "2023-05-30" },
            { id: 303, name: "Mark S.", rating: 4, comment: "Good mix of veggies, though I added extra cheese.", date: "2023-07-02" }
        ]
    };

    // Valid coupon codes
    const coupons = {
        "NEWUSER": { discount: 0.15, message: "15% off for new users" },
        "PIZZA10": { discount: 0.10, message: "10% off your order" },
        "FLAT5": { discount: 5, isFixed: true, message: "$5 off your order" },
        "DEAL20": { discount: 0.20, message: "20% off on meal deals" }
    };

    // Global variables
    let cart = [];
    let favorites = [];
    let currentPizza = null;
    let currentReviewPizza = null;
    let selectedRating = 0;
    let placedOrders = [];

    // Initialize the application
    init();

    function init() {
        console.log('Initializing app...');
        
        // Set up dark mode
        setupDarkMode();
        
        // Setup navigation
        setupNavigation();
        
        // Initialize pizza menu
        initializePizzaMenu();
        
        // Initialize deals section
        initializeDeals();
        
        // Initialize filters
        initializeFilters();
        
        // Update UI
        updateCartUI();
        updateFavoritesUI();
        
        // Setup interactions
        setupCartInteraction();
        setupFavoritesInteraction();
        setupModals();
        setupCustomizationFunctionality();
        setupCheckoutFunctionality();
        setupContactForm();
        setupTrackingFunctionality();
        setupReviewFunctionality();
        
        console.log('App initialized successfully');
    }

    // Dark Mode Setup
    function setupDarkMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });
        
        const themeButton = document.getElementById('theme-button');
        const mobileThemeButton = document.getElementById('mobile-theme-button');
        
        if (themeButton && mobileThemeButton) {
            [themeButton, mobileThemeButton].forEach(button => {
                button.addEventListener('click', () => {
                    document.documentElement.classList.toggle('dark');
                    
                    if (document.documentElement.classList.contains('dark')) {
                        if (themeButton.classList.contains('bx-moon')) {
                            themeButton.classList.replace('bx-moon', 'bx-sun');
                        }
                        if (mobileThemeButton.classList.contains('bx-moon')) {
                            mobileThemeButton.classList.replace('bx-moon', 'bx-sun');
                        }
                    } else {
                        if (themeButton.classList.contains('bx-sun')) {
                            themeButton.classList.replace('bx-sun', 'bx-moon');
                        }
                        if (mobileThemeButton.classList.contains('bx-sun')) {
                            mobileThemeButton.classList.replace('bx-sun', 'bx-moon');
                        }
                    }
                });
            });
        }
    }

    // Navigation Setup
    function setupNavigation() {
        // Mobile menu toggle
        const navToggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        
        if (navToggle && mobileMenu && mobileMenuOverlay && mobileMenuClose) {
            navToggle.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenuOverlay.classList.remove('hidden');
            });
            
            mobileMenuClose.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                mobileMenuOverlay.classList.add('hidden');
            });
            
            mobileMenuOverlay.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                mobileMenuOverlay.classList.add('hidden');
            });
        }
        
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 60,
                        behavior: 'smooth'
                    });
                    
                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active-link'));
                    
                    // Add active class to clicked link
                    this.classList.add('active-link');
                    
                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
                        mobileMenu.classList.add('translate-x-full');
                        mobileMenuOverlay.classList.add('hidden');
                    }
                }
            });
        });
        
        // Scroll to top button
        const scrollTop = document.getElementById('scroll-top');
        
        if (scrollTop) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollTop.classList.remove('opacity-0', 'invisible');
                    scrollTop.classList.add('opacity-100', 'visible');
                } else {
                    scrollTop.classList.remove('opacity-100', 'visible');
                    scrollTop.classList.add('opacity-0', 'invisible');
                }
                
                // Header shadow on scroll
                const header = document.getElementById('header');
                if (header) {
                    if (window.scrollY > 50) {
                        header.classList.add('scroll-header');
                    } else {
                        header.classList.remove('scroll-header');
                    }
                }
                
                // Active link on scroll
                const sections = document.querySelectorAll('section[id]');
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                        if (activeLink) activeLink.classList.add('active-link');
                    } else {
                        const inactiveLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                        if (inactiveLink) inactiveLink.classList.remove('active-link');
                    }
                });
            });
            
            scrollTop.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Pizza Menu Initialization
    function initializePizzaMenu() {
        const pizzaGrid = document.getElementById('pizza-grid');
        
        if (!pizzaGrid) {
            console.error('Pizza grid element not found');
            return;
        }
        
        // Clear the grid
        pizzaGrid.innerHTML = '';
        
        pizzas.forEach(pizza => {
            const pizzaCard = document.createElement('div');
            pizzaCard.className = `pizza-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 relative ${pizza.type} ${pizza.rating >= 4.5 ? 'top-rated' : ''}`;
            pizzaCard.setAttribute('data-pizza-id', pizza.id);
            
            pizzaCard.innerHTML = `
                <div class="nutrition-icon" title="Calories: ${pizza.calories}">
                    <i class="fa-solid fa-fire-flame-curved"></i>
                </div>
                <img src="${pizza.image}" alt="${pizza.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-lg font-semibold text-textDark dark:text-textLight">${pizza.name}</h3>
                        <span class="inline-block text-sm px-2 py-1 rounded-full ${pizza.type === 'veg' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}">${pizza.tag}</span>
                    </div>
                    <p class="text-textGray dark:text-gray-300 text-sm mb-2">${pizza.description}</p>
                    <div class="flex items-center mb-4">
                        <div class="flex items-center mr-2">
                            <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
                            <span class="text-sm font-medium rating">${pizza.rating}</span>
                        </div>
                        <span class="text-sm text-textGray dark:text-gray-300 reviews-count">(${pizza.reviews} reviews)</span>
                        <button class="ml-auto text-primary text-sm view-reviews-btn" data-pizza-id="${pizza.id}">View Reviews</button>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-primary font-semibold">$${pizza.price.toFixed(2)}</span>
                        <div class="flex gap-2">
                            <button class="favorite-btn w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center transition-colors hover:border-primary hover:text-primary ${favorites.some(fav => fav.pizzaId === pizza.id) ? 'text-red-500 hover:text-red-600' : ''}" data-pizza-id="${pizza.id}">
                                <i class="fa-${favorites.some(fav => fav.pizzaId === pizza.id) ? 'solid' : 'regular'} fa-heart"></i>
                            </button>
                            <button class="customize-btn bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-md transition-colors text-sm" data-pizza-id="${pizza.id}">
                                Customize
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            pizzaGrid.appendChild(pizzaCard);
        });
        
        // Add event listeners to customize buttons
        const customizeButtons = document.querySelectorAll('.customize-btn');
        customizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const pizzaId = parseInt(this.getAttribute('data-pizza-id'));
                openCustomizationModal(pizzaId);
            });
        });
        
        // Add event listeners to favorite buttons
        const favoriteButtons = document.querySelectorAll('.favorite-btn');
        favoriteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const pizzaId = parseInt(this.getAttribute('data-pizza-id'));
                toggleFavorite(pizzaId);
            });
        });
        
        // Add event listeners to view reviews buttons
        const viewReviewsButtons = document.querySelectorAll('.view-reviews-btn');
        viewReviewsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const pizzaId = parseInt(this.getAttribute('data-pizza-id'));
                openReviewsModal(pizzaId);
            });
        });
    }

    // Initialize Deals
    function initializeDeals() {
        const dealsContainer = document.getElementById('deals-container');
        
        if (!dealsContainer) {
            console.error('Deals container element not found');
            return;
        }
        
        // Clear the container
        dealsContainer.innerHTML = '';
        
        deals.forEach(deal => {
            const dealCard = document.createElement('div');
            dealCard.className = 'deal-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1';
            
            dealCard.innerHTML = `
                <div class="deal-discount">${deal.discount}</div>
                <img src="${deal.image}" alt="${deal.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-textDark dark:text-textLight mb-2">${deal.name}</h3>
                    <p class="text-textGray dark:text-gray-300 text-sm mb-4">${deal.description}</p>
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-primary font-semibold">$${deal.price.toFixed(2)}</span>
                            <span class="text-gray-400 line-through text-sm ml-2">$${deal.regularPrice.toFixed(2)}</span>
                        </div>
                        <button class="add-deal-btn bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-md transition-colors text-sm" data-deal-id="${deal.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
            
            dealsContainer.appendChild(dealCard);
        });
        
        // Add event listeners to deal buttons
        const dealButtons = document.querySelectorAll('.add-deal-btn');
        dealButtons.forEach(button => {
            button.addEventListener('click', function() {
                const dealId = this.getAttribute('data-deal-id');
                addDealToCart(dealId);
            });
        });
    }

    // Add deal to cart
    function addDealToCart(dealId) {
        const deal = deals.find(d => d.id === dealId);
        if (!deal) return;
        
        // Create cart item
        const cartItem = {
            id: Date.now(),
            dealId: deal.id,
            name: deal.name,
            price: deal.price,
            image: deal.image,
            quantity: 1,
            isDeal: true
        };
        
        // Add to cart
        cart.push(cartItem);
        updateCartUI();
        
        // Show success notification
        showNotification(`${deal.name} added to cart!`, 'success');
    }

    // Initialize Filters
    function initializeFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const pizzaCards = document.querySelectorAll('.pizza-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show/hide pizza cards based on filter
                pizzaCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Setup Cart Interaction
    function setupCartInteraction() {
        const cartIcon = document.getElementById('cart-icon');
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        const closeCart = document.getElementById('close-cart');
        const clearCart = document.getElementById('clear-cart');
        const checkoutBtn = document.getElementById('checkout-btn');
        
        if (!cartIcon || !cartSidebar || !cartOverlay || !closeCart || !clearCart || !checkoutBtn) {
            console.error('One or more cart elements not found');
            return;
        }
        
        // Open cart
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.remove('translate-x-full');
            cartOverlay.classList.remove('hidden');
            updateCartUI();
        });
        
        // Close cart
        [closeCart, cartOverlay].forEach(element => {
            element.addEventListener('click', () => {
                cartSidebar.classList.add('translate-x-full');
                cartOverlay.classList.add('hidden');
            });
        });
        
        // Clear cart
        clearCart.addEventListener('click', () => {
            if (cart.length === 0) return;
            
            // Simple confirm replacement for iframe compatibility
            if (window.confirm('Are you sure you want to clear your cart?')) {
                cart = [];
                updateCartUI();
                showNotification('Cart cleared!', 'success');
            }
        });
        
        // Checkout button
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            
            // Close cart sidebar
            cartSidebar.classList.add('translate-x-full');
            cartOverlay.classList.add('hidden');
            
            // Open checkout modal
            const checkoutModal = document.getElementById('checkout-modal');
            if (checkoutModal) {
                checkoutModal.classList.add('show');
                updateCheckoutSummary();
            }
        });
    }

    // Setup Favorites Interaction
    function setupFavoritesInteraction() {
        const favoritesIcon = document.getElementById('favorites-icon');
        const favoritesSidebar = document.getElementById('favorites-sidebar');
        const closeFavorites = document.getElementById('close-favorites');
        const cartOverlay = document.getElementById('cart-overlay');
        
        if (!favoritesIcon || !favoritesSidebar || !closeFavorites || !cartOverlay) {
            console.error('One or more favorites elements not found');
            return;
        }
        
        // Open favorites
        favoritesIcon.addEventListener('click', () => {
            favoritesSidebar.classList.remove('translate-x-full');
            cartOverlay.classList.remove('hidden');
            updateFavoritesUI();
        });
        
        // Close favorites
        [closeFavorites, cartOverlay].forEach(element => {
            element.addEventListener('click', () => {
                favoritesSidebar.classList.add('translate-x-full');
                cartOverlay.classList.add('hidden');
            });
        });
    }

    // Toggle Favorite
    function toggleFavorite(pizzaId) {
        const pizza = pizzas.find(p => p.id === pizzaId);
        if (!pizza) return;
        
        const index = favorites.findIndex(item => item.pizzaId === pizzaId);
        
        if (index !== -1) {
            // Remove from favorites
            favorites.splice(index, 1);
            showNotification(`${pizza.name} removed from favorites`, 'success');
        } else {
            // Add to favorites
            favorites.push({
                id: Date.now(),
                pizzaId: pizza.id,
                name: pizza.name,
                price: pizza.price,
                image: pizza.image,
                type: pizza.type
            });
            showNotification(`${pizza.name} added to favorites`, 'success');
        }
        
        updateFavoritesUI();
        
        // Update favorite button icon in the pizza grid
        const favoriteButton = document.querySelector(`.favorite-btn[data-pizza-id="${pizzaId}"]`);
        if (favoriteButton) {
            const icon = favoriteButton.querySelector('i');
            if (index !== -1) {
                icon.className = 'fa-regular fa-heart';
                favoriteButton.classList.remove('text-red-500', 'hover:text-red-600');
            } else {
                icon.className = 'fa-solid fa-heart';
                favoriteButton.classList.add('text-red-500', 'hover:text-red-600');
            }
        }
        
        // Update favorites button in modal if open
        if (currentPizza && currentPizza.id === pizzaId) {
            const addToFavoritesBtn = document.getElementById('add-to-favorites-btn');
            if (addToFavoritesBtn) {
                const icon = addToFavoritesBtn.querySelector('i');
                if (favorites.some(item => item.pizzaId === pizzaId)) {
                    icon.className = 'fa-solid fa-heart';
                    addToFavoritesBtn.classList.add('bg-primary', 'text-white');
                    addToFavoritesBtn.classList.remove('text-primary', 'border-primary');
                } else {
                    icon.className = 'fa-regular fa-heart';
                    addToFavoritesBtn.classList.remove('bg-primary', 'text-white');
                    addToFavoritesBtn.classList.add('text-primary', 'border-primary');
                }
            }
        }
    }

    // Setup Modals
    function setupModals() {
        // Pizza Modal
        const pizzaModal = document.getElementById('pizza-modal');
        const closeModal = document.getElementById('close-modal');
        const addToFavoritesBtn = document.getElementById('add-to-favorites-btn');
        
        if (pizzaModal && closeModal) {
            closeModal.addEventListener('click', () => {
                pizzaModal.classList.remove('show');
            });
        }
        
        if (addToFavoritesBtn) {
            addToFavoritesBtn.addEventListener('click', () => {
                if (!currentPizza) return;
                toggleFavorite(currentPizza.id);
            });
        }
        
        // Checkout Modal
        const checkoutModal = document.getElementById('checkout-modal');
        const closeCheckout = document.getElementById('close-checkout');
        
        if (checkoutModal && closeCheckout) {
            closeCheckout.addEventListener('click', () => {
                checkoutModal.classList.remove('show');
            });
        }
        
        // Confirmation Modal
        const confirmationModal = document.getElementById('confirmation-modal');
        const closeConfirmation = document.getElementById('close-confirmation');
        
        if (confirmationModal && closeConfirmation) {
            closeConfirmation.addEventListener('click', () => {
                confirmationModal.classList.remove('show');
                
                // Reset checkout form
                const checkoutForm = document.getElementById('checkout-form');
                if (checkoutForm) checkoutForm.reset();
                
                // Clear cart
                cart = [];
                updateCartUI();
            });
        }
        
        // Tracking Modal
        const trackingModal = document.getElementById('tracking-modal');
        const closeTracking = document.getElementById('close-tracking');
        const trackOrderBtn = document.getElementById('track-order-btn');
        
        if (trackingModal && closeTracking && trackOrderBtn) {
            trackOrderBtn.addEventListener('click', (e) => {
                e.preventDefault();
                trackingModal.classList.add('show');
            });
            
            closeTracking.addEventListener('click', () => {
                trackingModal.classList.remove('show');
            });
        }
        
        // Review Modal
        const reviewModal = document.getElementById('review-modal');
        const closeReviewModal = document.getElementById('close-review-modal');
        
        if (reviewModal && closeReviewModal) {
            closeReviewModal.addEventListener('click', () => {
                reviewModal.classList.remove('show');
            });
        }
        
        // Reviews List Modal
        const reviewsListModal = document.getElementById('reviews-list-modal');
        const closeReviewsList = document.getElementById('close-reviews-list');
        const writeReviewBtn = document.getElementById('write-review-btn');
        
        if (reviewsListModal && closeReviewsList && writeReviewBtn) {
            closeReviewsList.addEventListener('click', () => {
                reviewsListModal.classList.remove('show');
            });
            
            writeReviewBtn.addEventListener('click', () => {
                if (!currentReviewPizza) return;
                
                // Close reviews list modal
                reviewsListModal.classList.remove('show');
                
                // Open review form
                openReviewModal(currentReviewPizza.id);
            });
        }
        
        // Nutrition toggle
        const nutritionToggle = document.getElementById('nutrition-toggle');
        const nutritionInfo = document.getElementById('nutrition-info');
        
        if (nutritionToggle && nutritionInfo) {
            nutritionToggle.addEventListener('click', () => {
                nutritionInfo.classList.toggle('hidden');
                
                const span = nutritionToggle.querySelector('span');
                if (nutritionInfo.classList.contains('hidden')) {
                    span.textContent = 'View Nutritional Information';
                } else {
                    span.textContent = 'Hide Nutritional Information';
                }
            });
        }
        
        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === pizzaModal) {
                pizzaModal.classList.remove('show');
            }
            
            if (e.target === checkoutModal) {
                checkoutModal.classList.remove('show');
            }
            
            if (e.target === confirmationModal) {
                confirmationModal.classList.remove('show');
            }
            
            if (e.target === trackingModal) {
                trackingModal.classList.remove('show');
            }
            
            if (e.target === reviewModal) {
                reviewModal.classList.remove('show');
            }
            
            if (e.target === reviewsListModal) {
                reviewsListModal.classList.remove('show');
            }
        });
    }

    // Setup Customization Functionality
    function setupCustomizationFunctionality() {
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        const quantityInput = document.getElementById('quantity-input');
        const decreaseBtn = document.getElementById('decrease-quantity');
        const increaseBtn = document.getElementById('increase-quantity');
        
        if (!addToCartBtn || !quantityInput || !decreaseBtn || !increaseBtn) {
            console.error('One or more customization elements not found');
            return;
        }
        
        // Size options
        const sizeButtons = document.querySelectorAll('.size-btn');
        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all size buttons
                sizeButtons.forEach(btn => {
                    btn.classList.remove('active', 'border-primary', 'text-primary');
                    btn.classList.add('border-gray-300', 'dark:border-gray-700');
                });
                
                // Add active class to clicked button
                this.classList.add('active', 'border-primary', 'text-primary');
                this.classList.remove('border-gray-300', 'dark:border-gray-700');
                
                // Update nutritional info
                updateNutritionalInfo();
                
                // Update total price
                updateTotalPrice();
            });
        });
        
        // Crust selection
        const crustSelect = document.getElementById('crust-select');
        if (crustSelect) {
            crustSelect.addEventListener('change', updateTotalPrice);
        }
        
        // Toppings selection
        const toppingCheckboxes = document.querySelectorAll('.topping-checkbox');
        toppingCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateTotalPrice);
        });
        
        // Quantity control
        decreaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = quantity - 1;
                updateTotalPrice();
            }
        });
        
        increaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity < 10) {
                quantityInput.value = quantity + 1;
                updateTotalPrice();
            }
        });
        
        quantityInput.addEventListener('change', () => {
            let quantity = parseInt(quantityInput.value);
            if (isNaN(quantity) || quantity < 1) {
                quantityInput.value = 1;
            } else if (quantity > 10) {
                quantityInput.value = 10;
            }
            updateTotalPrice();
        });
        
        // Add to cart button
        addToCartBtn.addEventListener('click', () => {
            if (!currentPizza) return;
            
            // Get selected options
            const sizeBtn = document.querySelector('.size-btn.active');
            if (!sizeBtn) {
                showNotification('Please select a size', 'warning');
                return;
            }
            
            const size = sizeBtn.getAttribute('data-size');
            const sizePrice = parseFloat(sizeBtn.getAttribute('data-price'));
            
            const crustSelect = document.getElementById('crust-select');
            const crust = crustSelect.value;
            const crustPrice = parseFloat(crustSelect.options[crustSelect.selectedIndex].getAttribute('data-price'));
            
            const toppings = [];
            document.querySelectorAll('.topping-checkbox:checked').forEach(checkbox => {
                toppings.push({
                    name: checkbox.getAttribute('data-topping'),
                    price: parseFloat(checkbox.getAttribute('data-price'))
                });
            });
            
            const quantity = parseInt(quantityInput.value);
            
            // Calculate total price
            let totalPrice = currentPizza.price + sizePrice + crustPrice;
            toppings.forEach(topping => {
                totalPrice += topping.price;
            });
            
            // Create cart item
            const cartItem = {
                id: Date.now(), // Unique ID for cart item
                pizzaId: currentPizza.id,
                name: currentPizza.name,
                price: totalPrice,
                size: size,
                crust: crust,
                toppings: toppings,
                quantity: quantity,
                image: currentPizza.image
            };
            
            // Add to cart
            cart.push(cartItem);
            updateCartUI();
            
            // Show success notification
            showNotification(`${quantity} ${currentPizza.name} added to cart!`, 'success');
            
            // Close modal
            const pizzaModal = document.getElementById('pizza-modal');
            if (pizzaModal) {
                pizzaModal.classList.remove('show');
            }
        });
    }

    // Update Nutritional Info
    function updateNutritionalInfo() {
        if (!currentPizza || !currentPizza.nutrition) return;
        
        const sizeBtn = document.querySelector('.size-btn.active');
        if (!sizeBtn) return;
        
        const size = sizeBtn.getAttribute('data-size');
        
        const nutritionCalories = document.getElementById('nutrition-calories');
        const nutritionProtein = document.getElementById('nutrition-protein');
        const nutritionCarbs = document.getElementById('nutrition-carbs');
        const nutritionFat = document.getElementById('nutrition-fat');
        
        if (nutritionCalories) nutritionCalories.textContent = currentPizza.nutrition.calories[size];
        if (nutritionProtein) nutritionProtein.textContent = currentPizza.nutrition.protein[size];
        if (nutritionCarbs) nutritionCarbs.textContent = currentPizza.nutrition.carbs[size];
        if (nutritionFat) nutritionFat.textContent = currentPizza.nutrition.fat[size];
        
        // Update title
        const nutritionTitle = document.querySelector('#nutrition-info h5');
        if (nutritionTitle) {
            nutritionTitle.textContent = `Nutritional Information (${size.charAt(0).toUpperCase() + size.slice(1)} Size)`;
        }
    }

    // Setup Checkout Functionality
    function setupCheckoutFunctionality() {
        const checkoutForm = document.getElementById('checkout-form');
        const applyBtn = document.getElementById('apply-coupon');
        
        if (!checkoutForm || !applyBtn) {
            console.error('Checkout form or apply button not found');
            return;
        }
        
        // Form validation
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('checkout-name').value.trim();
            const email = document.getElementById('checkout-email').value.trim();
            const phone = document.getElementById('checkout-phone').value.trim();
            const address = document.getElementById('checkout-address').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                showError('name-error', 'Please enter your name');
                isValid = false;
            } else {
                hideError('name-error');
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('email-error', 'Please enter a valid email address');
                isValid = false;
            } else {
                hideError('email-error');
            }
            
            // Validate phone
            const phoneRegex = /^\d{10,15}$/;
            if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
                showError('phone-error', 'Please enter a valid phone number');
                isValid = false;
            } else {
                hideError('phone-error');
            }
            
            // Validate address
            if (address === '') {
                showError('address-error', 'Please enter your delivery address');
                isValid = false;
            } else {
                hideError('address-error');
            }
            
            if (isValid) {
                // Create new order
                const orderId = 'PH' + Math.floor(10000 + Math.random() * 90000);
                
                // Get order total from checkout
                const checkoutTotal = document.getElementById('checkout-total');
                const total = checkoutTotal ? parseFloat(checkoutTotal.textContent.slice(1)) : 0;
                
                // Create order object
                const order = {
                    id: orderId,
                    customerName: name,
                    customerEmail: email,
                    customerPhone: phone,
                    deliveryAddress: address,
                    items: [...cart],
                    total: total,
                    status: 'placed',
                    timestamp: new Date().toISOString(),
                    estimatedDelivery: '30-45 minutes'
                };
                
                // Add to orders array
                placedOrders.push(order);
                
                // Set confirmation order ID
                const confirmationOrderId = document.getElementById('confirmation-order-id');
                if (confirmationOrderId) {
                    confirmationOrderId.textContent = orderId;
                }
                
                // Close checkout modal
                const checkoutModal = document.getElementById('checkout-modal');
                if (checkoutModal) {
                    checkoutModal.classList.remove('show');
                }
                
                // Show confirmation modal
                const confirmationModal = document.getElementById('confirmation-modal');
                if (confirmationModal) {
                    confirmationModal.classList.add('show');
                }
            }
        });
        
        // Apply coupon
        applyBtn.addEventListener('click', function() {
            const couponCode = document.getElementById('coupon-code');
            if (!couponCode) return;
            
            const code = couponCode.value.trim().toUpperCase();
            const couponMessage = document.getElementById('coupon-message');
            
            if (code === '') {
                showCouponMessage('Please enter a coupon code', 'text-yellow-500');
                return;
            }
            
            if (coupons[code]) {
                const coupon = coupons[code];
                showCouponMessage(coupon.message, 'text-green-500');
                
                const discountRow = document.getElementById('discount-row');
                if (discountRow) {
                    discountRow.style.display = 'flex';
                }
                
                // Calculate discount
                const checkoutSubtotal = document.getElementById('checkout-subtotal');
                const checkoutDiscount = document.getElementById('checkout-discount');
                const checkoutDelivery = document.getElementById('checkout-delivery');
                const checkoutTotal = document.getElementById('checkout-total');
                
                if (checkoutSubtotal && checkoutDiscount && checkoutDelivery && checkoutTotal) {
                    const subtotal = parseFloat(checkoutSubtotal.textContent.slice(1));
                    let discount = 0;
                    
                    if (coupon.isFixed) {
                        discount = coupon.discount;
                    } else {
                        discount = subtotal * coupon.discount;
                    }
                    
                    // Update discount and total
                    checkoutDiscount.textContent = `-$${discount.toFixed(2)}`;
                    
                    const deliveryFee = parseFloat(checkoutDelivery.textContent.slice(1));
                    const total = subtotal + deliveryFee - discount;
                    
                    checkoutTotal.textContent = `$${total.toFixed(2)}`;
                }
            } else {
                showCouponMessage('Invalid coupon code', 'text-red-500');
            }
        });
        
        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.classList.remove('hidden');
            }
        }
        
        function hideError(elementId) {
            const errorElement = document.getElementById(elementId);
            if (errorElement) {
                errorElement.classList.add('hidden');
            }
        }
        
        function showCouponMessage(message, colorClass) {
            const couponMessage = document.getElementById('coupon-message');
            if (couponMessage) {
                couponMessage.textContent = message;
                couponMessage.className = `text-sm mt-1 ${colorClass}`;
                couponMessage.classList.remove('hidden');
            }
        }
    }

    // Setup Contact Form
    function setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (!contactForm) {
            console.error('Contact form not found');
            return;
        }
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name || !email || !message) {
                console.error('One or more contact form fields not found');
                return;
            }
            
            if (name.value.trim() && email.value.trim() && message.value.trim()) {
                // In a real app, you would send this data to a server
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification('Please fill in all fields', 'warning');
            }
        });
    }

    // Setup Tracking Functionality
    function setupTrackingFunctionality() {
        const trackForm = document.getElementById('track-form');
        const trackingResult = document.getElementById('tracking-result');
        const trackingNotFound = document.getElementById('tracking-not-found');
        
        if (!trackForm || !trackingResult || !trackingNotFound) {
            console.error('Order tracking elements not found');
            return;
        }
        
        trackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const orderId = document.getElementById('order-id');
            if (!orderId) return;
            
            const id = orderId.value.trim().toUpperCase();
            
            if (id) {
                // Find the order in our placed orders
                const order = placedOrders.find(o => o.id === id);
                
                // If real order found or test order ID (starts with PH and at least 6 chars long)
                if (order || (id.startsWith('PH') && id.length >= 6)) {
                    trackingNotFound.classList.add('hidden');
                    trackingResult.classList.remove('hidden');
                    
                    // Set order ID
                    const trackingOrderId = document.getElementById('tracking-order-id');
                    if (trackingOrderId) {
                        trackingOrderId.textContent = id;
                    }
                    
                    // Display the order time if it's a real order
                    const trackingOrderTime = document.getElementById('tracking-order-time');
                    if (trackingOrderTime) {
                        if (order) {
                            trackingOrderTime.textContent = formatDate(new Date(order.timestamp));
                        } else {
                            // Simulate a random order time
                            const now = new Date();
                            let orderTime = new Date(now);
                            // Set order time between 1 minute and 1 hour ago
                            orderTime.setMinutes(now.getMinutes() - Math.floor(Math.random() * 60) - 1);
                            trackingOrderTime.textContent = formatDate(orderTime);
                        }
                    }
                    
                    // Simulate a random order status
                    simulateOrderStatus();
                } else {
                    trackingResult.classList.add('hidden');
                    trackingNotFound.classList.remove('hidden');
                }
            } else {
                showNotification('Please enter an order ID', 'warning');
            }
        });
        
        function simulateOrderStatus() {
            // Reset all statuses
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.classList.remove('active', 'completed');
            });
            
            // Simulate a random status (0-4)
            const statusIndex = Math.floor(Math.random() * 5);
            
            // Mark completed and active status
            for (let i = 0; i <= statusIndex; i++) {
                if (i === statusIndex) {
                    timelineItems[i].classList.add('active');
                } else {
                    timelineItems[i].classList.add('completed');
                }
            }
            
            // Generate random status times
            const now = new Date();
            
            // Set ETA based on status
            let etaMinutes = 0;
            switch (statusIndex) {
                case 0: // Order Placed
                    etaMinutes = 45;
                    break;
                case 1: // Preparing
                    etaMinutes = 35;
                    break;
                case 2: // In the Oven
                    etaMinutes = 25;
                    break;
                case 3: // Out for Delivery
                    etaMinutes = 15;
                    break;
                case 4: // Delivered
                    etaMinutes = 0;
                    break;
            }
            
            // Update status times
            const timeElements = document.querySelectorAll('.timeline-time');
            for (let i = 0; i <= statusIndex; i++) {
                let statusTime = new Date(now);
                statusTime.setMinutes(now.getMinutes() - (statusIndex - i) * 10);
                if (timeElements[i]) {
                    timeElements[i].textContent = formatTime(statusTime);
                }
            }
            
            // Calculate ETA
            const trackingEta = document.getElementById('tracking-eta');
            if (trackingEta) {
                if (etaMinutes > 0) {
                    const eta = new Date(now);
                    eta.setMinutes(now.getMinutes() + etaMinutes);
                    trackingEta.textContent = `${formatTime(eta)} (about ${etaMinutes} minutes)`;
                } else {
                    trackingEta.textContent = 'Delivered';
                }
            }
        }
        
        function formatDate(date) {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            
            return `${month} ${day}, ${year}, ${formatTime(date)}`;
        }
        
        function formatTime(date) {
            let hours = date.getHours();
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            
            hours = hours % 12;
            hours = hours ? hours : 12;
            
            return `${hours}:${minutes} ${ampm}`;
        }
    }

    // Setup Review Functionality
    function setupReviewFunctionality() {
        const reviewForm = document.getElementById('review-form');
        const starRating = document.getElementById('star-rating');
        
        if (!reviewForm || !starRating) {
            console.error('Review form elements not found');
            return;
        }
        
        // Star rating functionality
        const stars = starRating.querySelectorAll('i');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                
                // Reset all stars
                stars.forEach(s => {
                    s.classList.remove('star-filled');
                    s.classList.add('text-gray-300', 'dark:text-gray-600');
                });
                
                // Fill stars up to selected rating
                for (let i = 0; i < rating; i++) {
                    stars[i].classList.add('star-filled');
                    stars[i].classList.remove('text-gray-300', 'dark:text-gray-600');
                }
                
                selectedRating = rating;
            });
        });
        
        // Review form submission
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!currentReviewPizza) return;
            
            const reviewText = document.getElementById('review-text');
            const reviewName = document.getElementById('review-name');
            
            if (!reviewText || !reviewName) {
                console.error('Review form input elements not found');
                return;
            }
            
            if (selectedRating === 0) {
                showNotification('Please select a rating', 'warning');
                return;
            }
            
            if (!reviewText.value.trim()) {
                showNotification('Please write a review', 'warning');
                return;
            }
            
            if (!reviewName.value.trim()) {
                showNotification('Please enter your name', 'warning');
                return;
            }
            
            // Create new review
            const newReview = {
                id: Date.now(),
                name: reviewName.value.trim(),
                rating: selectedRating,
                comment: reviewText.value.trim(),
                date: new Date().toISOString().split('T')[0]
            };
            
            // If reviewsData for this pizza doesn't exist, create it
            if (!reviewsData[currentReviewPizza.id]) {
                reviewsData[currentReviewPizza.id] = [];
            }
            
            // Add review to the beginning of the array
            reviewsData[currentReviewPizza.id].unshift(newReview);
            
            // Reset form
            reviewForm.reset();
            stars.forEach(s => {
                s.classList.remove('star-filled');
                s.classList.add('text-gray-300', 'dark:text-gray-600');
            });
            selectedRating = 0;
            
            // Close review modal
            const reviewModal = document.getElementById('review-modal');
            if (reviewModal) {
                reviewModal.classList.remove('show');
            }
            
            // Show success notification
            showNotification('Thank you for your review!', 'success');
            
            // Update pizza rating
            updatePizzaRating(currentReviewPizza.id);
            
            // If reviews list is open, refresh it
            const reviewsListModal = document.getElementById('reviews-list-modal');
            if (reviewsListModal && reviewsListModal.classList.contains('show')) {
                openReviewsModal(currentReviewPizza.id);
            }
        });
    }

    // Update Pizza Rating
    function updatePizzaRating(pizzaId) {
        if (!reviewsData[pizzaId]) return;
        
        const reviews = reviewsData[pizzaId];
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRating / reviews.length;
        
        // Update pizza data
        const pizzaIndex = pizzas.findIndex(p => p.id === pizzaId);
        if (pizzaIndex !== -1) {
            pizzas[pizzaIndex].rating = Math.round(averageRating * 10) / 10;
            pizzas[pizzaIndex].reviews = reviews.length;
            
            // Update pizza card in the grid
            const pizzaCard = document.querySelector(`.pizza-card[data-pizza-id="${pizzaId}"]`);
            if (pizzaCard) {
                const ratingElement = pizzaCard.querySelector('.rating');
                if (ratingElement) {
                    ratingElement.textContent = pizzas[pizzaIndex].rating.toFixed(1);
                }
                
                const reviewsElement = pizzaCard.querySelector('.reviews-count');
                if (reviewsElement) {
                    reviewsElement.textContent = `(${pizzas[pizzaIndex].reviews} reviews)`;
                }
            }
        }
    }

    // Open Customization Modal
    function openCustomizationModal(pizzaId) {
        const pizza = pizzas.find(p => p.id === pizzaId);
        if (!pizza) return;
        
        currentPizza = pizza;
        
        // Set modal content
        const modalPizzaName = document.getElementById('modal-pizza-name');
        const modalPizzaImg = document.getElementById('modal-pizza-img');
        const modalPizzaDesc = document.getElementById('modal-pizza-desc');
        const modalPizzaRating = document.getElementById('modal-pizza-rating');
        const modalPizzaCalories = document.getElementById('modal-pizza-calories');
        const modalPizzaTag = document.getElementById('modal-pizza-tag');
        
        if (modalPizzaName) modalPizzaName.textContent = `Customize ${pizza.name}`;
        if (modalPizzaImg) modalPizzaImg.src = pizza.image;
        if (modalPizzaDesc) modalPizzaDesc.textContent = pizza.description;
        if (modalPizzaRating) modalPizzaRating.textContent = pizza.rating;
        if (modalPizzaCalories) modalPizzaCalories.textContent = `${pizza.calories} cal`;
        
        if (modalPizzaTag) {
            modalPizzaTag.textContent = pizza.tag;
            
            if (pizza.type === 'veg') {
                modalPizzaTag.className = 'inline-block text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            } else {
                modalPizzaTag.className = 'inline-block text-xs px-2 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            }
        }
        
        // Reset form
        // Size selection - set small as default
        const sizeButtons = document.querySelectorAll('.size-btn');
        sizeButtons.forEach(button => {
            if (button.getAttribute('data-size') === 'small') {
                button.classList.add('active', 'border-primary', 'text-primary');
                button.classList.remove('border-gray-300', 'dark:border-gray-700');
            } else {
                button.classList.remove('active', 'border-primary', 'text-primary');
                button.classList.add('border-gray-300', 'dark:border-gray-700');
            }
        });
        
        // Crust selection - set regular as default
        const crustSelect = document.getElementById('crust-select');
        if (crustSelect) crustSelect.value = 'regular';
        
        // Toppings - uncheck all
        document.querySelectorAll('.topping-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Quantity - set to 1
        const quantityInput = document.getElementById('quantity-input');
        if (quantityInput) quantityInput.value = 1;
        
        // Hide nutritional info
        const nutritionInfo = document.getElementById('nutrition-info');
        const nutritionToggle = document.getElementById('nutrition-toggle');
        
        if (nutritionInfo) nutritionInfo.classList.add('hidden');
        if (nutritionToggle) {
            const span = nutritionToggle.querySelector('span');
            if (span) span.textContent = 'View Nutritional Information';
        }
        
        // Update nutritional info
        updateNutritionalInfo();
        
        // Update total price
        updateTotalPrice();
        
        // Update favorites button
        const addToFavoritesBtn = document.getElementById('add-to-favorites-btn');
        if (addToFavoritesBtn) {
            const icon = addToFavoritesBtn.querySelector('i');
            
            if (favorites.some(item => item.pizzaId === pizza.id)) {
                icon.className = 'fa-solid fa-heart';
                addToFavoritesBtn.classList.add('bg-primary', 'text-white');
                addToFavoritesBtn.classList.remove('text-primary', 'border-primary');
            } else {
                icon.className = 'fa-regular fa-heart';
                addToFavoritesBtn.classList.remove('bg-primary', 'text-white');
                addToFavoritesBtn.classList.add('text-primary', 'border-primary');
            }
        }
        
        // Show modal
        const pizzaModal = document.getElementById('pizza-modal');
        if (pizzaModal) pizzaModal.classList.add('show');
    }

    // Open Review Modal
    function openReviewModal(pizzaId) {
        const pizza = pizzas.find(p => p.id === pizzaId);
        if (!pizza) return;
        
        currentReviewPizza = pizza;
        
        // Set modal content
        const reviewPizzaImg = document.getElementById('review-pizza-img');
        const reviewPizzaName = document.getElementById('review-pizza-name');
        
        if (reviewPizzaImg) reviewPizzaImg.src = pizza.image;
        if (reviewPizzaName) reviewPizzaName.textContent = pizza.name;
        
        // Reset form
        const reviewForm = document.getElementById('review-form');
        if (reviewForm) reviewForm.reset();
        
        // Reset star rating
        const stars = document.querySelectorAll('#star-rating i');
        stars.forEach(star => {
            star.classList.remove('star-filled');
            star.classList.add('text-gray-300', 'dark:text-gray-600');
        });
        selectedRating = 0;
        
        // Show modal
        const reviewModal = document.getElementById('review-modal');
        if (reviewModal) reviewModal.classList.add('show');
    }

    // Open Reviews Modal
    function openReviewsModal(pizzaId) {
        const pizza = pizzas.find(p => p.id === pizzaId);
        if (!pizza) return;
        
        currentReviewPizza = pizza;
        
        // Set modal content
        const reviewsPizzaName = document.getElementById('reviews-pizza-name');
        const reviewsAverage = document.getElementById('reviews-average');
        const reviewsCount = document.getElementById('reviews-count');
        
        if (reviewsPizzaName) reviewsPizzaName.textContent = `${pizza.name} Reviews`;
        if (reviewsAverage) reviewsAverage.textContent = pizza.rating.toFixed(1);
        if (reviewsCount) reviewsCount.textContent = pizza.reviews;
        
        // Generate star rating HTML based on average rating
        const fullStars = Math.floor(pizza.rating);
        const hasHalfStar = pizza.rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fa-solid fa-star text-yellow-400 mr-0.5"></i>';
        }
        
        if (hasHalfStar) {
            starsHTML += '<i class="fa-solid fa-star-half-stroke text-yellow-400 mr-0.5"></i>';
        }
        
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="fa-regular fa-star text-yellow-400 mr-0.5"></i>';
        }
        
        const starsContainer = document.getElementById('reviews-stars');
        if (starsContainer) starsContainer.innerHTML = starsHTML;
        
        // Populate reviews
        const reviewsContainer = document.getElementById('reviews-container');
        if (!reviewsContainer) return;
        
        let reviewsHTML = '';
        
        if (reviewsData[pizzaId] && reviewsData[pizzaId].length > 0) {
            reviewsData[pizzaId].forEach(review => {
                // Generate stars for this review
                let reviewStarsHTML = '';
                for (let i = 0; i < 5; i++) {
                    if (i < review.rating) {
                        reviewStarsHTML += '<i class="fa-solid fa-star text-yellow-400 text-xs"></i>';
                    } else {
                        reviewStarsHTML += '<i class="fa-regular fa-star text-yellow-400 text-xs"></i>';
                    }
                }
                
                reviewsHTML += `
                    <div class="review-card">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h4 class="font-medium text-textDark dark:text-textLight">${review.name}</h4>
                                <div class="flex items-center">
                                    ${reviewStarsHTML}
                                </div>
                            </div>
                            <span class="text-xs text-textGray dark:text-gray-400">${formatReviewDate(review.date)}</span>
                        </div>
                        <p class="text-textGray dark:text-gray-300 text-sm">${review.comment}</p>
                    </div>
                `;
            });
        } else {
            reviewsHTML = `
                <div class="text-center py-6">
                    <p class="text-textGray dark:text-gray-300">No reviews yet. Be the first to review!</p>
                </div>
            `;
        }
        
        reviewsContainer.innerHTML = reviewsHTML;
        
        // Show modal
        const reviewsListModal = document.getElementById('reviews-list-modal');
        if (reviewsListModal) reviewsListModal.classList.add('show');
    }

    // Format Review Date
    function formatReviewDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    // Update Total Price
    function updateTotalPrice() {
        if (!currentPizza) return;
        
        // Get base price
        let total = currentPizza.price;
        
        // Add size price
        const activeSize = document.querySelector('.size-btn.active');
        if (activeSize) {
            const sizePrice = parseFloat(activeSize.getAttribute('data-price'));
            total += sizePrice;
        }
        
        // Add crust price
        const crustSelect = document.getElementById('crust-select');
        if (crustSelect) {
            const selectedOption = crustSelect.options[crustSelect.selectedIndex];
            if (selectedOption) {
                const crustPrice = parseFloat(selectedOption.getAttribute('data-price'));
                total += crustPrice;
            }
        }
        
        // Add toppings price
        document.querySelectorAll('.topping-checkbox:checked').forEach(checkbox => {
            total += parseFloat(checkbox.getAttribute('data-price'));
        });
        
        // Multiply by quantity
        const quantityInput = document.getElementById('quantity-input');
        if (quantityInput) {
            const quantity = parseInt(quantityInput.value);
            total *= quantity;
        }
        
        // Update UI
        const modalTotalPrice = document.getElementById('modal-total-price');
        if (modalTotalPrice) {
            modalTotalPrice.textContent = `$${total.toFixed(2)}`;
        }
    }

    // Update Cart UI
    function updateCartUI() {
        const cartItems = document.getElementById('cart-items');
        const emptyMessage = document.getElementById('empty-cart-message');
        const cartCount = document.getElementById('cart-count');
        const checkoutBtn = document.getElementById('checkout-btn');
        
        if (!cartItems || !emptyMessage || !cartCount || !checkoutBtn) {
            console.error('One or more cart UI elements not found');
            return;
        }
        
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart items
        if (cart.length === 0) {
            emptyMessage.style.display = 'block';
            cartItems.innerHTML = '';
            checkoutBtn.disabled = true;
        } else {
            emptyMessage.style.display = 'none';
            checkoutBtn.disabled = false;
            
            let cartHTML = '';
            
            cart.forEach(item => {
                if (item.isDeal) {
                    // Deal item
                    cartHTML += `
                        <div class="flex border-b border-gray-200 dark:border-gray-700 py-4">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
                            <div class="ml-4 flex-grow">
                                <div class="flex justify-between">
                                    <h4 class="font-medium text-textDark dark:text-textLight">${item.name}</h4>
                                    <button class="remove-item text-red-500 hover:text-red-700" data-item-id="${item.id}">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                                <div class="text-sm text-textGray dark:text-gray-300">
                                    <p>Special Deal</p>
                                </div>
                                <div class="flex justify-between items-center mt-2">
                                    <div class="flex items-center">
                                        <button class="decrease-cart-qty text-sm bg-gray-200 dark:bg-gray-700 w-6 h-6 rounded-full" data-item-id="${item.id}">-</button>
                                        <span class="mx-2">${item.quantity}</span>
                                        <button class="increase-cart-qty text-sm bg-gray-200 dark:bg-gray-700 w-6 h-6 rounded-full" data-item-id="${item.id}">+</button>
                                    </div>
                                    <span class="font-semibold">$${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    // Pizza item
                    let toppingsText = '';
                    if (item.toppings && item.toppings.length > 0) {
                        toppingsText = 'Toppings: ' + item.toppings.map(t => {
                            // Convert snake_case to Title Case
                            return t.name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                        }).join(', ');
                    }
                    
                    cartHTML += `
                        <div class="flex border-b border-gray-200 dark:border-gray-700 py-4">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
                            <div class="ml-4 flex-grow">
                                <div class="flex justify-between">
                                    <h4 class="font-medium text-textDark dark:text-textLight">${item.name}</h4>
                                    <button class="remove-item text-red-500 hover:text-red-700" data-item-id="${item.id}">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                                <div class="text-sm text-textGray dark:text-gray-300">
                                    <p>Size: ${item.size.charAt(0).toUpperCase() + item.size.slice(1)}, Crust: ${item.crust.charAt(0).toUpperCase() + item.crust.slice(1)}</p>
                                    ${toppingsText ? `<p class="text-xs">${toppingsText}</p>` : ''}
                                </div>
                                <div class="flex justify-between items-center mt-2">
                                    <div class="flex items-center">
                                        <button class="decrease-cart-qty text-sm bg-gray-200 dark:bg-gray-700 w-6 h-6 rounded-full" data-item-id="${item.id}">-</button>
                                        <span class="mx-2">${item.quantity}</span>
                                        <button class="increase-cart-qty text-sm bg-gray-200 dark:bg-gray-700 w-6 h-6 rounded-full" data-item-id="${item.id}">+</button>
                                    </div>
                                    <span class="font-semibold">$${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
            
            cartItems.innerHTML = cartHTML;
            
            // Add event listeners to buttons
            // Remove item buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-item-id'));
                    removeFromCart(itemId);
                });
            });
            
            // Decrease quantity buttons
            document.querySelectorAll('.decrease-cart-qty').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-item-id'));
                    updateCartItemQuantity(itemId, -1);
                });
            });
            
            // Increase quantity buttons
            document.querySelectorAll('.increase-cart-qty').forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-item-id'));
                    updateCartItemQuantity(itemId, 1);
                });
            });
        }
        
        // Update subtotal
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const cartSubtotal = document.getElementById('cart-subtotal');
        if (cartSubtotal) {
            cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        }
    }

    // Update Favorites UI
    function updateFavoritesUI() {
        const favoritesItems = document.getElementById('favorites-items');
        const emptyMessage = document.getElementById('empty-favorites-message');
        const favoritesCount = document.getElementById('favorites-count');
        
        if (!favoritesItems || !emptyMessage || !favoritesCount) {
            console.error('One or more favorites UI elements not found');
            return;
        }
        
        // Update favorites count
        favoritesCount.textContent = favorites.length;
        
        // Update favorites items
        if (favorites.length === 0) {
            emptyMessage.style.display = 'block';
            favoritesItems.innerHTML = '';
        } else {
            emptyMessage.style.display = 'none';
            
            let favoritesHTML = '';
            
            favorites.forEach(item => {
                favoritesHTML += `
                    <div class="flex border-b border-gray-200 dark:border-gray-700 py-4">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between">
                                <h4 class="font-medium text-textDark dark:text-textLight">${item.name}</h4>
                                <div class="flex space-x-2">
                                    <button class="add-from-favorites text-primary hover:text-primaryDark" data-pizza-id="${item.pizzaId}">
                                        <i class="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button class="remove-favorite text-red-500 hover:text-red-700" data-pizza-id="${item.pizzaId}">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="text-sm text-textGray dark:text-gray-300">
                                <span class="inline-block text-xs px-2 py-1 rounded-full ${item.type === 'veg' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'} mt-1">${item.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}</span>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <span class="text-primary font-medium">$${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            favoritesItems.innerHTML = favoritesHTML;
            
            // Add event listeners to buttons
            document.querySelectorAll('.remove-favorite').forEach(button => {
                button.addEventListener('click', function() {
                    const pizzaId = parseInt(this.getAttribute('data-pizza-id'));
                    toggleFavorite(pizzaId);
                });
            });
            
            document.querySelectorAll('.add-from-favorites').forEach(button => {
                button.addEventListener('click', function() {
                    const pizzaId = parseInt(this.getAttribute('data-pizza-id'));
                    
                    // Close favorites sidebar
                    const favoritesSidebar = document.getElementById('favorites-sidebar');
                    const cartOverlay = document.getElementById('cart-overlay');
                    
                    if (favoritesSidebar && cartOverlay) {
                        favoritesSidebar.classList.add('translate-x-full');
                        cartOverlay.classList.add('hidden');
                    }
                    
                    // Open customization modal
                    openCustomizationModal(pizzaId);
                });
            });
        }
    }

    // Update Checkout Summary
    function updateCheckoutSummary() {
        const checkoutItems = document.getElementById('checkout-items');
        
        if (!checkoutItems) {
            console.error('Checkout items container not found');
            return;
        }
        
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        // Reset discount
        const discountRow = document.getElementById('discount-row');
        const couponCode = document.getElementById('coupon-code');
        const couponMessage = document.getElementById('coupon-message');
        
        if (discountRow) discountRow.style.display = 'none';
        if (couponCode) couponCode.value = '';
        if (couponMessage) couponMessage.classList.add('hidden');
        
        let checkoutHTML = '';
        
        cart.forEach(item => {
            checkoutHTML += `
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center">
                        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded-md mr-3">
                        <div>
                            <h4 class="text-textDark dark:text-textLight font-medium">${item.name} ${item.isDeal ? '' : `(${item.size.charAt(0).toUpperCase() + item.size.slice(1)})`}</h4>
                            <p class="text-xs text-textGray dark:text-gray-300">Qty: ${item.quantity}</p>
                        </div>
                    </div>
                    <span class="font-medium">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `;
        });
        
        checkoutItems.innerHTML = checkoutHTML;
        
        // Update totals
        const checkoutSubtotal = document.getElementById('checkout-subtotal');
        const checkoutDelivery = document.getElementById('checkout-delivery');
        const checkoutTotal = document.getElementById('checkout-total');
        
        if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        
        const deliveryFee = 2.99;
        if (checkoutDelivery) checkoutDelivery.textContent = `$${deliveryFee.toFixed(2)}`;
        
        if (checkoutTotal) checkoutTotal.textContent = `$${(subtotal + deliveryFee).toFixed(2)}`;
    }

    // Update Cart Item Quantity
    function updateCartItemQuantity(itemId, change) {
        const index = cart.findIndex(item => item.id === itemId);
        if (index === -1) return;
        
        const item = cart[index];
        const newQuantity = item.quantity + change;
        
        if (newQuantity < 1) {
            // If quantity would be less than 1, remove the item
            removeFromCart(itemId);
        } else if (newQuantity <= 10) {
            // Update quantity and total
            item.quantity = newQuantity;
            updateCartUI();
        } else {
            showNotification('Maximum quantity per item is 10', 'warning');
        }
    }

    // Remove Item from Cart
    function removeFromCart(itemId) {
        const index = cart.findIndex(item => item.id === itemId);
        if (index !== -1) {
            const item = cart[index];
            cart.splice(index, 1);
            updateCartUI();
            showNotification(`${item.name} removed from cart!`, 'success');
        }
    }

    // Show Notification
    function showNotification(message, type = 'success') {
        const toaster = document.getElementById('toaster');
        
        if (!toaster) {
            console.error('Toaster element not found');
            return;
        }
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        let icon = '';
        if (type === 'success') {
            icon = '<i class="fa-solid fa-check-circle mr-2"></i>';
        } else if (type === 'error') {
            icon = '<i class="fa-solid fa-circle-exclamation mr-2"></i>';
        } else if (type === 'warning') {
            icon = '<i class="fa-solid fa-triangle-exclamation mr-2"></i>';
        }
        
        notification.innerHTML = `
            <div class="flex items-center">
                ${icon}
                <span>${message}</span>
            </div>
        `;
        
        toaster.appendChild(notification);
        
        // Show notification with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode === toaster) {
                    toaster.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
});