const pizzaData = [
  {
      id: 'margherita',
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
      basePrice: 12.99,
      category: 'vegetarian',
      image: 'assets/img/product-1.png',
      rating: 4.5
  },
  {
      id: 'pepperoni',
      name: 'Pepperoni Pizza',
      description: 'Traditional pizza topped with spicy pepperoni slices and cheese.',
      basePrice: 14.99,
      category: 'non-vegetarian',
      image: 'assets/img/product-2.png',
      rating: 4.8
  },
  {
      id: 'veggie',
      name: 'Veggie Supreme',
      description: 'Loaded with bell peppers, mushrooms, onions, olives, and tomatoes.',
      basePrice: 15.99,
      category: 'vegetarian',
      image: 'assets/img/product-3.png',
      rating: 4.3
  },
  {
      id: 'hawaiian',
      name: 'Hawaiian Pizza',
      description: 'Sweet and savory combination of ham and pineapple.',
      basePrice: 16.99,
      category: 'non-vegetarian',
      image: 'assets/img/product-4.png',
      rating: 4.0
  },
  {
      id: 'mushroom',
      name: 'Mushroom Truffle',
      description: 'Gourmet pizza with assorted mushrooms and truffle oil.',
      basePrice: 17.99,
      category: 'vegetarian',
      image: 'assets/img/product-5.png',
      rating: 4.6
  },
  {
      id: 'bbq-chicken',
      name: 'BBQ Chicken',
      description: 'Tangy BBQ sauce, grilled chicken, red onions, and cilantro.',
      basePrice: 18.99,
      category: 'non-vegetarian',
      image: 'assets/img/product-6.png',
      rating: 4.7
  },
  {
      id: 'supreme',
      name: 'Supreme Pizza',
      description: 'The ultimate combo with pepperoni, sausage, bell peppers, onions, and olives.',
      basePrice: 19.99,
      category: 'non-vegetarian',
      image: 'assets/img/product-1.png',
      rating: 4.9
  },
  {
      id: 'mediterranean',
      name: 'Mediterranean',
      description: 'Feta cheese, spinach, olives, sun-dried tomatoes, and artichoke hearts.',
      basePrice: 18.49,
      category: 'vegetarian',
      image: 'assets/img/product-2.png',
      rating: 4.4
  },
  {
      id: 'buffalo',
      name: 'Buffalo Chicken',
      description: 'Spicy buffalo sauce, grilled chicken, blue cheese, and ranch drizzle.',
      basePrice: 18.99,
      category: 'non-vegetarian',
      image: 'assets/img/product-3.png',
      rating: 4.5
  },
  {
      id: 'quattro',
      name: 'Quattro Formaggi',
      description: 'Four cheese blend of mozzarella, gorgonzola, fontina, and parmesan.',
      basePrice: 17.49,
      category: 'vegetarian',
      image: 'assets/img/product-4.png',
      rating: 4.6
  },
  {
      id: 'meat-lovers',
      name: 'Meat Lovers',
      description: 'Loaded with pepperoni, sausage, bacon, ham, and ground beef.',
      basePrice: 20.99,
      category: 'non-vegetarian',
      image: 'assets/img/product-5.png',
      rating: 4.8
  },
  {
      id: 'taco',
      name: 'Taco Pizza',
      description: 'Unique pizza with seasoned ground beef, lettuce, tomatoes, and a creamy drizzle.',
      basePrice: 19.49,
      category: 'specialty',
      image: 'assets/img/product-6.png',
      rating: 4.3
  }
];

// Toppings Data
const toppingsData = [
  { id: 'extra-cheese', name: 'Extra Cheese', price: 1.50, category: 'vegetarian' },
  { id: 'mushrooms', name: 'Mushrooms', price: 1.00, category: 'vegetarian' },
  { id: 'olives', name: 'Olives', price: 1.00, category: 'vegetarian' },
  { id: 'peppers', name: 'Bell Peppers', price: 1.00, category: 'vegetarian' },
  { id: 'onions', name: 'Onions', price: 0.75, category: 'vegetarian' },
  { id: 'pepperoni', name: 'Pepperoni', price: 1.50, category: 'non-vegetarian' },
  { id: 'sausage', name: 'Sausage', price: 1.50, category: 'non-vegetarian' },
  { id: 'bacon', name: 'Bacon', price: 1.75, category: 'non-vegetarian' },
  { id: 'chicken', name: 'Grilled Chicken', price: 2.00, category: 'non-vegetarian' }
];

// Valid coupon codes
const validCoupons = {
  'PIZZA10': { discount: 0.10, description: '10% off your order' },
  'FREESHIP': { discount: 2.99, description: 'Free delivery' },
  'WELCOME20': { discount: 0.20, description: '20% off your first order' }
};

// Global Variables
let cart = [];
let currentPizza = null;
let appliedCoupon = null;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the site
  renderPizzaMenu();
  initializeCart();
  setupEventListeners();
  updateCartCount();
  setupSwiper();
  setupScrollToTop();
  setupNavigation();
});

function setupEventListeners() {
  // Navigation toggle for mobile
  const toggleButton = document.querySelector('.toggle-button');
  const closeButton = document.querySelector('.close-button');
  const nav = document.querySelector('.nav');

  toggleButton.addEventListener('click', () => {
      nav.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
      nav.classList.remove('active');
  });

  // Cart Toggle
  const cartIcon = document.getElementById('cart-icon');
  const cartPanel = document.getElementById('cart-panel');
  const cartClose = document.getElementById('cart-close');

  cartIcon.addEventListener('click', () => {
      cartPanel.classList.add('active');
  });

  cartClose.addEventListener('click', () => {
      cartPanel.classList.remove('active');
  });

  // Menu Filter Buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');
          // Filter pizzas
          const filter = button.dataset.filter;
          filterPizzas(filter);
      });
  });

  // Customization Modal
  const closeModal = document.getElementById('close-modal');
  const customizationModal = document.getElementById('customization-modal');

  closeModal.addEventListener('click', () => {
      customizationModal.classList.remove('active');
  });

  // Size Options
  const sizeOptions = document.querySelectorAll('.size-option');
  sizeOptions.forEach(option => {
      option.addEventListener('click', () => {
          sizeOptions.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
          updateTotalPrice();
      });
  });

  // Crust Options
  const crustOptions = document.querySelectorAll('.crust-option');
  crustOptions.forEach(option => {
      option.addEventListener('click', () => {
          crustOptions.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
          updateTotalPrice();
      });
  });

  // Quantity Buttons
  const decreaseBtn = document.getElementById('decrease-quantity');
  const increaseBtn = document.getElementById('increase-quantity');
  const quantityInput = document.getElementById('quantity-input');

  decreaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
          updateTotalPrice();
      }
  });

  increaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
      updateTotalPrice();
  });

  quantityInput.addEventListener('change', updateTotalPrice);

  // Add to Cart Button in Modal
  const modalAddToCartBtn = document.getElementById('modal-add-to-cart');
  modalAddToCartBtn.addEventListener('click', addCustomizedPizzaToCart);

  // Order Now Button in Home Section
  const orderNowBtn = document.getElementById('order-now-btn');
  orderNowBtn.addEventListener('click', () => {
      document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
  });

  // View Menu Button in About Section
  const viewMenuBtn = document.getElementById('view-menu-btn');
  viewMenuBtn.addEventListener('click', () => {
      document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
  });

  // Add to cart buttons in Products section
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          const productId = e.target.dataset.id;
          // For simplicity, add a fixed product to cart
          const product = {
              id: productId,
              name: e.target.closest('.product__item').querySelector('.product__name').textContent.replace('<br>', ' '),
              price: parseFloat(e.target.closest('.product__item').querySelector('.product__price').textContent.replace('$', '')),
              image: e.target.closest('.product__item').querySelector('img').src,
              quantity: 1,
              options: {
                  size: 'Medium',
                  crust: 'Classic',
                  toppings: []
              }
          };
          addToCart(product);
      });
  });

  // Checkout Button
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  checkoutBtn.addEventListener('click', () => {
      cartPanel.classList.remove('active');
      document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
      updateOrderSummary();
  });

  // Coupon Code
  const applyCouponBtn = document.getElementById('apply-coupon');
  applyCouponBtn.addEventListener('click', applyCoupon);

  // Place Order Button
  const placeOrderBtn = document.getElementById('place-order-btn');
  placeOrderBtn.addEventListener('click', placeOrder);

  // Form Validation
  const deliveryForm = document.getElementById('delivery-form');
  const formInputs = deliveryForm.querySelectorAll('.form-input[required]');
  
  formInputs.forEach(input => {
      input.addEventListener('blur', validateInput);
      input.addEventListener('input', () => {
          validateInput({ target: input });
          checkFormValidity();
      });
  });

  // Confirmation Modal Close Button
  const closeConfirmationBtn = document.getElementById('close-confirmation');
  closeConfirmationBtn.addEventListener('click', () => {
      document.getElementById('confirmation-modal').classList.remove('active');
      resetOrder();
  });
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Remove active class from all links
          navLinks.forEach(l => l.classList.remove('active-link'));
          
          // Add active class to clicked link
          this.classList.add('active-link');
          
          // Get the target section id
          const targetId = this.getAttribute('href');
          
          // Scroll to target section
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
          
          // Close mobile menu if open
          document.querySelector('.nav').classList.remove('active');
      });
  });

  // Update active link on scroll
  window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section[id]').forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              navLinks.forEach(link => {
                  link.classList.remove('active-link');
                  if (link.getAttribute('href') === `#${sectionId}`) {
                      link.classList.add('active-link');
                  }
              });
          }
      });
  });
}

function setupSwiper() {
  const swiper = new Swiper('.popular__swiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      speed: 600,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          640: {
              spaceBetween: 40
          }
      },
      on: {
          slideChangeTransitionStart: function () {
              // Get current active slide's pizza image
              const activeSlide = this.slides[this.activeIndex];
              const pizzaImage = activeSlide.querySelector('.popular__card-image');
              
              // Trigger rotation
              pizzaImage.classList.add('rotating');
              
              // Cleanup after animation
              setTimeout(() => {
                  pizzaImage.classList.remove('rotating');
              }, 600);
          }
      }
  });
}

function setupScrollToTop() {
  const scrollBtn = document.getElementById('scrollBtn');
  
  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 350) {
          scrollBtn.classList.add('show-scroll');
      } else {
          scrollBtn.classList.remove('show-scroll');
      }
  });
  
  scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
}

function renderPizzaMenu() {
  const pizzaGrid = document.getElementById('pizza-grid');
  let pizzaHTML = '';
  
  pizzaData.forEach(pizza => {
      pizzaHTML += `
          <div class="pizza-card" data-category="${pizza.category}">
              <span class="pizza-tag tag-${pizza.category === 'vegetarian' ? 'vegetarian' : 'non-vegetarian'}">
                  ${pizza.category === 'vegetarian' ? 'Vegetarian' : pizza.category === 'non-vegetarian' ? 'Non-Veg' : 'Specialty'}
              </span>
              <div class="pizza-image-container">
                  <img src="${pizza.image}" alt="${pizza.name}" class="pizza-image">
              </div>
              <div class="pizza-info">
                  <h3 class="pizza-name">${pizza.name}</h3>
                  <p class="pizza-description">${pizza.description}</p>
                  <div class="pizza-price-rating">
                      <div class="pizza-price">$${pizza.basePrice.toFixed(2)}</div>
                      <div class="pizza-rating">
                          <div class="rating-stars">
                              ${renderStars(pizza.rating)}
                          </div>
                          <span>${pizza.rating}</span>
                      </div>
                  </div>
                  <button class="customize-btn" data-id="${pizza.id}">Customize</button>
              </div>
          </div>
      `;
  });
  
  pizzaGrid.innerHTML = pizzaHTML;
  
  // Add event listeners to customize buttons
  const customizeButtons = document.querySelectorAll('.customize-btn');
  customizeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          const pizzaId = e.target.dataset.id;
          openCustomizationModal(pizzaId);
      });
  });
}

function renderStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
      stars += '<i class="ri-star-fill"></i>';
  }
  
  if (halfStar) {
      stars += '<i class="ri-star-half-fill"></i>';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="ri-star-line"></i>';
  }
  
  return stars;
}

function filterPizzas(category) {
  const pizzaCards = document.querySelectorAll('.pizza-card');
  
  pizzaCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

function openCustomizationModal(pizzaId) {
  // Find the pizza data
  currentPizza = pizzaData.find(pizza => pizza.id === pizzaId);
  
  if (!currentPizza) return;
  
  // Set pizza details in the modal
  document.getElementById('pizza-modal-image').src = currentPizza.image;
  document.getElementById('pizza-modal-name').textContent = currentPizza.name;
  document.getElementById('pizza-modal-description').textContent = currentPizza.description;
  
  // Reset size options
  document.querySelectorAll('.size-option').forEach(option => {
      option.classList.remove('selected');
      if (option.dataset.size === 'medium') {
          option.classList.add('selected');
      }
  });
  
  // Update size prices
  document.getElementById('small-price').textContent = `$${currentPizza.basePrice.toFixed(2)}`;
  document.getElementById('medium-price').textContent = `$${(currentPizza.basePrice + 3).toFixed(2)}`;
  document.getElementById('large-price').textContent = `$${(currentPizza.basePrice + 6).toFixed(2)}`;
  
  // Reset crust options
  document.querySelectorAll('.crust-option').forEach(option => {
      option.classList.remove('selected');
      if (option.dataset.crust === 'classic') {
          option.classList.add('selected');
      }
  });
  
  // Render toppings
  renderToppings();
  
  // Reset quantity
  document.getElementById('quantity-input').value = 1;
  
  // Update total price
  updateTotalPrice();
  
  // Show the modal
  document.getElementById('customization-modal').classList.add('active');
}

function renderToppings() {
  const toppingsContainer = document.getElementById('toppings-container');
  let toppingsHTML = '';
  
  // Filter toppings based on pizza category for vegetarian options
  const isVegetarian = currentPizza.category === 'vegetarian';
  const relevantToppings = isVegetarian ? 
      toppingsData.filter(topping => topping.category === 'vegetarian') : 
      toppingsData;
  
  relevantToppings.forEach(topping => {
      toppingsHTML += `
          <div class="topping-option">
              <input type="checkbox" id="topping-${topping.id}" value="${topping.id}" class="topping-checkbox">
              <label for="topping-${topping.id}">${topping.name}</label>
              <span class="topping-price">+$${topping.price.toFixed(2)}</span>
          </div>
      `;
  });
  
  toppingsContainer.innerHTML = toppingsHTML;
  
  // Add event listeners to topping checkboxes
  document.querySelectorAll('.topping-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', updateTotalPrice);
  });
}

function updateTotalPrice() {
  if (!currentPizza) return;
  
  // Get selected size and its price modifier
  const selectedSize = document.querySelector('.size-option.selected');
  const sizeModifier = parseFloat(selectedSize.dataset.priceModifier);
  
  // Get selected crust and its price modifier
  const selectedCrust = document.querySelector('.crust-option.selected');
  const crustModifier = parseFloat(selectedCrust.dataset.priceModifier);
  
  // Get selected toppings
  const selectedToppings = Array.from(document.querySelectorAll('.topping-checkbox:checked'));
  const toppingsTotal = selectedToppings.reduce((total, checkbox) => {
      const toppingId = checkbox.value;
      const topping = toppingsData.find(t => t.id === toppingId);
      return total + (topping ? topping.price : 0);
  }, 0);
  
  // Get quantity
  const quantity = parseInt(document.getElementById('quantity-input').value);
  
  // Calculate total price
  const basePrice = currentPizza.basePrice;
  const total = (basePrice + sizeModifier + crustModifier + toppingsTotal) * quantity;
  
  // Update the display
  document.getElementById('modal-total-price').textContent = `$${total.toFixed(2)}`;
}

function addCustomizedPizzaToCart() {
  if (!currentPizza) return;
  
  // Get all selected options
  const selectedSize = document.querySelector('.size-option.selected').dataset.size;
  const selectedCrust = document.querySelector('.crust-option.selected').dataset.crust;
  
  const selectedToppings = Array.from(document.querySelectorAll('.topping-checkbox:checked')).map(checkbox => {
      const toppingId = checkbox.value;
      return toppingsData.find(t => t.id === toppingId);
  });
  
  const quantity = parseInt(document.getElementById('quantity-input').value);
  
  // Calculate price
  const sizeModifier = parseFloat(document.querySelector('.size-option.selected').dataset.priceModifier);
  const crustModifier = parseFloat(document.querySelector('.crust-option.selected').dataset.priceModifier);
  const toppingsTotal = selectedToppings.reduce((total, topping) => total + topping.price, 0);
  
  const itemPrice = currentPizza.basePrice + sizeModifier + crustModifier + toppingsTotal;
  
  // Create cart item
  const cartItem = {
      id: `${currentPizza.id}-${Date.now()}`,
      name: currentPizza.name,
      basePrice: itemPrice,
      price: itemPrice * quantity,
      image: currentPizza.image,
      quantity: quantity,
      options: {
          size: selectedSize,
          crust: selectedCrust,
          toppings: selectedToppings
      }
  };
  
  // Add to cart
  addToCart(cartItem);
  
  // Close the modal
  document.getElementById('customization-modal').classList.remove('active');
}

function initializeCart() {
  // Check if there's a cart in localStorage
  const savedCart = localStorage.getItem('pizzaCart');
  if (savedCart) {
      cart = JSON.parse(savedCart);
      updateCartDisplay();
  }
}

function addToCart(item) {
  cart.push(item);
  saveCart();
  updateCartDisplay();
  updateCartCount();
  
  // Show notification
  const cartPanel = document.getElementById('cart-panel');
  cartPanel.classList.add('active');
  
  // Auto-hide cart after 3 seconds
  setTimeout(() => {
      cartPanel.classList.remove('active');
  }, 3000);
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  
  if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
          <div class="empty-cart-message">
              <i class="ri-shopping-cart-line empty-cart-icon"></i>
              <p>Your cart is empty</p>
              <p>Add some delicious pizzas!</p>
          </div>
      `;
      document.getElementById('cart-checkout-btn').disabled = true;
  } else {
      let cartHTML = '';
      
      cart.forEach((item, index) => {
          const toppingsText = item.options && item.options.toppings && item.options.toppings.length > 0 ? 
              `Toppings: ${item.options.toppings.map(t => t.name).join(', ')}` : '';
          
          cartHTML += `
              <div class="cart-item">
                  <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                  <div class="cart-item-details">
                      <h4 class="cart-item-title">${item.name}</h4>
                      <div class="cart-item-options">
                          ${item.options ? `${item.options.size} | ${item.options.crust}` : ''}
                          ${toppingsText ? `<br>${toppingsText}` : ''}
                      </div>
                      <div class="cart-item-price">$${(item.basePrice * item.quantity).toFixed(2)}</div>
                      <div class="cart-item-actions">
                          <div class="cart-item-quantity">
                              <button class="quantity-btn decrease-cart-item" data-index="${index}">-</button>
                              <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}" readonly>
                              <button class="quantity-btn increase-cart-item" data-index="${index}">+</button>
                          </div>
                          <button class="remove-item" data-index="${index}">Remove</button>
                      </div>
                  </div>
              </div>
          `;
      });
      
      cartItemsContainer.innerHTML = cartHTML;
      document.getElementById('cart-checkout-btn').disabled = false;
      
      // Add event listeners to cart item buttons
      document.querySelectorAll('.decrease-cart-item').forEach(button => {
          button.addEventListener('click', decreaseCartItemQuantity);
      });
      
      document.querySelectorAll('.increase-cart-item').forEach(button => {
          button.addEventListener('click', increaseCartItemQuantity);
      });
      
      document.querySelectorAll('.remove-item').forEach(button => {
          button.addEventListener('click', removeCartItem);
      });
  }
  
  updateCartTotal();
  updateOrderSummary();
}

function decreaseCartItemQuantity(e) {
  const index = parseInt(e.target.dataset.index);
  if (cart[index].quantity > 1) {
      cart[index].quantity--;
      cart[index].price = cart[index].basePrice * cart[index].quantity;
      saveCart();
      updateCartDisplay();
      updateCartCount();
  }
}

function increaseCartItemQuantity(e) {
  const index = parseInt(e.target.dataset.index);
  cart[index].quantity++;
  cart[index].price = cart[index].basePrice * cart[index].quantity;
  saveCart();
  updateCartDisplay();
  updateCartCount();
}

function removeCartItem(e) {
  const index = parseInt(e.target.dataset.index);
  cart.splice(index, 1);
  saveCart();
  updateCartDisplay();
  updateCartCount();
}

function updateCartTotal() {
  const subtotal = cart.reduce((total, item) => total + (item.basePrice * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;
  
  document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
  
  // Enable/disable checkout button
  const placeOrderBtn = document.getElementById('place-order-btn');
  if (placeOrderBtn) {
      placeOrderBtn.disabled = count === 0;
  }
}

function saveCart() {
  localStorage.setItem('pizzaCart', JSON.stringify(cart));
}

function updateOrderSummary() {
  const summaryItemsContainer = document.getElementById('summary-items');
  const emptyMessage = document.getElementById('empty-summary');
  
  if (cart.length === 0) {
      emptyMessage.style.display = 'block';
      document.getElementById('place-order-btn').disabled = true;
  } else {
      emptyMessage.style.display = 'none';
      
      let summaryHTML = '';
      
      cart.forEach(item => {
          const toppingsText = item.options && item.options.toppings && item.options.toppings.length > 0 ? 
              `Toppings: ${item.options.toppings.map(t => t.name).join(', ')}` : '';
          
          summaryHTML += `
              <div class="summary-item">
                  <img src="${item.image}" alt="${item.name}" class="summary-item-img">
                  <div class="summary-item-details">
                      <h4 class="summary-item-name">${item.name} x${item.quantity}</h4>
                      <div class="summary-item-options">
                          ${item.options ? `${item.options.size} | ${item.options.crust}` : ''}
                          ${toppingsText ? `<br>${toppingsText}` : ''}
                      </div>
                  </div>
                  <div class="summary-item-price">$${(item.basePrice * item.quantity).toFixed(2)}</div>
              </div>
          `;
      });
      
      summaryItemsContainer.innerHTML = summaryHTML + emptyMessage.outerHTML;
      document.getElementById('place-order-btn').disabled = false;
      
      // Update totals
      const subtotal = cart.reduce((total, item) => total + (item.basePrice * item.quantity), 0);
      const deliveryFee = 2.99;
      
      let total = subtotal + deliveryFee;
      
      // Apply coupon if exists
      if (appliedCoupon) {
          const discountRow = document.getElementById('discount-row');
          const discountAmount = document.getElementById('discount-amount');
          
          discountRow.style.display = 'flex';
          
          if (appliedCoupon.code === 'FREESHIP') {
              discountAmount.textContent = `-$${deliveryFee.toFixed(2)}`;
              total = subtotal;
          } else {
              const discount = subtotal * appliedCoupon.discount;
              discountAmount.textContent = `-$${discount.toFixed(2)}`;
              total = subtotal + deliveryFee - discount;
          }
      }
      
      document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
      document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
  }
}

function applyCoupon() {
  const couponInput = document.getElementById('coupon-input');
  const couponMessage = document.getElementById('coupon-message');
  const couponCode = couponInput.value.trim().toUpperCase();
  
  if (!couponCode) {
      couponMessage.textContent = 'Please enter a coupon code';
      couponMessage.className = 'coupon-message error';
      return;
  }
  
  if (validCoupons[couponCode]) {
      appliedCoupon = {
          code: couponCode,
          discount: validCoupons[couponCode].discount,
          description: validCoupons[couponCode].description
      };
      
      couponMessage.textContent = `Coupon applied: ${validCoupons[couponCode].description}`;
      couponMessage.className = 'coupon-message success';
      
      // Update order summary
      updateOrderSummary();
  } else {
      couponMessage.textContent = 'Invalid coupon code';
      couponMessage.className = 'coupon-message error';
  }
}

function validateInput(event) {
  const input = event.target;
  const error = document.getElementById(`${input.id}-error`);
  
  if (!input.validity.valid) {
      input.classList.add('error');
      error.classList.add('active');
  } else {
      input.classList.remove('error');
      error.classList.remove('active');
  }
}

function checkFormValidity() {
  const form = document.getElementById('delivery-form');
  const placeOrderBtn = document.getElementById('place-order-btn');
  
  // Check if all required fields are valid
  const requiredInputs = form.querySelectorAll('.form-input[required]');
  let allValid = true;
  
  requiredInputs.forEach(input => {
      if (!input.validity.valid) {
          allValid = false;
      }
  });
  
  // Also check if cart is not empty
  if (cart.length === 0) {
      allValid = false;
  }
  
  placeOrderBtn.disabled = !allValid;
}

function placeOrder(e) {
  e.preventDefault();
  
  // Validate the form
  const form = document.getElementById('delivery-form');
  const requiredInputs = form.querySelectorAll('.form-input[required]');
  let formValid = true;
  
  requiredInputs.forEach(input => {
      if (!input.validity.valid) {
          input.classList.add('error');
          document.getElementById(`${input.id}-error`).classList.add('active');
          formValid = false;
      }
  });
  
  if (!formValid) {
      return;
  }
  
  // Generate order number
  const orderNumber = `PZ${Math.floor(Math.random() * 900000) + 100000}`;
  
  // Calculate estimated delivery time (30-45 minutes from now)
  const now = new Date();
  const deliveryTime = new Date(now.getTime() + (Math.floor(Math.random() * 15) + 30) * 60000);
  const formattedTime = deliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Set order details in confirmation modal
  document.getElementById('confirmation-order-number').textContent = orderNumber;
  document.getElementById('confirmation-estimated-time').textContent = formattedTime;
  
  // Show confirmation modal
  document.getElementById('confirmation-modal').classList.add('active');
}

function resetOrder() {
  // Clear cart
  cart = [];
  saveCart();
  updateCartDisplay();
  updateCartCount();
  
  // Reset coupon
  appliedCoupon = null;
  document.getElementById('coupon-input').value = '';
  document.getElementById('coupon-message').textContent = '';
  document.getElementById('coupon-message').className = 'coupon-message';
  document.getElementById('discount-row').style.display = 'none';
  
  // Reset form
  document.getElementById('delivery-form').reset();
  
  // Update UI
  updateOrderSummary();
  
  // Scroll to top
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}