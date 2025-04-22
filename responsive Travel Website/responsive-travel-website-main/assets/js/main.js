 /*==================== SHOW MENU ====================*/
 const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if(navToggle){
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu');
});
}

/*===== MENU HIDDEN =====*/
if(navClose){
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu');
});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
const navMenu = document.getElementById('nav-menu');
navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
const header = document.getElementById('header');
if(this.scrollY >= 100) header.classList.add('scroll-header'); 
else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Detect the user's preferred color scheme
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

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
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

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
const scrollUp = document.getElementById('scroll-up');
if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); 
else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
const scrollY = window.pageYOffset;

sections.forEach(current =>{
   const sectionHeight = current.offsetHeight;
   const sectionTop = current.offsetTop - 50;
   const sectionId = current.getAttribute('id');
   
   if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
       document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link');
   }else{
       document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link');
   }
});
}
window.addEventListener('scroll', scrollActive);

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
 videoButton = document.getElementById('video-button'),
 videoIcon = document.getElementById('video-icon');

function playPause(){ 
if (videoFile.paused){
   // Play video
   videoFile.play();
   // Change the icon
   videoIcon.classList.add('ri-pause-line');
   videoIcon.classList.remove('ri-play-line');
}
else {
   // Pause video
   videoFile.pause(); 
   // We change the icon
   videoIcon.classList.remove('ri-pause-line');
   videoIcon.classList.add('ri-play-line');
}
}
videoButton.addEventListener('click', playPause);

function finalVideo(){
// Video ends, icon change
videoIcon.classList.remove('ri-pause-line');
videoIcon.classList.add('ri-play-line');
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
distance: '60px',
duration: 2800,
reset: false,
});

sr.reveal(`.home__data, .home__social-link, .home__info,
     .discover__container,
     .experience__data, .experience__overlay,
     .place__card,
     .sponsor__content,
     .footer__data, .footer__rights`,{
origin: 'top',
interval: 100,
});

sr.reveal(`.about__data, 
     .video__description,
     .subscribe__description`,{
origin: 'left',
});

sr.reveal(`.about__img-overlay, 
     .video__content,
     .subscribe__form`,{
origin: 'right',
interval: 100,
});

/*==================== SWIPER DISCOVER ====================*/
// Data for discover section
const discoverData = [
{
   id: 'bali',
   title: 'Bali',
   description: '24 tours available',
   price: 2499,
   img: `https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80`
},
{
   id: 'hawaii',
   title: 'Hawaii',
   description: '15 tours available',
   price: 3499,
   img: `https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80`
},
{
   id: 'hvar',
   title: 'Hvar',
   description: '18 tours available',
   price: 1999,
   img: `https://images.unsplash.com/photo-1596394723269-b2cbdd97ffb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80`
},
{
   id: 'whitehaven',
   title: 'Whitehaven',
   description: '32 tours available',
   price: 2499,
   img: `https://images.unsplash.com/photo-1589211759524-6f89c00ac9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80`
},
{
   id: 'bora',
   title: 'Bora Bora',
   description: '29 tours available',
   price: 1599,
   img: `https://images.unsplash.com/photo-1573548842355-73bb50e50323?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80`
}
];

// Generate discover cards
const discoverWrapper = document.querySelector('.discover__container .swiper-wrapper');

discoverData.forEach(item => {
const cardHTML = `
   <div class="discover__card swiper-slide">
       <img src="${item.img}" alt="${item.title}" class="discover__img">
       <div class="discover__data">
           <h2 class="discover__title">${item.title}</h2>
           <span class="discover__description">${item.description}</span>
       </div>
   </div>
`;
discoverWrapper.innerHTML += cardHTML;
});

// Initialize Swiper
let swiper = new Swiper(".discover__container", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
loop: true,
spaceBetween: 32,
coverflowEffect: {
   rotate: 0,
   stretch: 0,
   depth: 100,
   modifier: 1,
   slideShadows: false,
},
pagination: {
   el: ".swiper-pagination",
},
});

/*==================== PACKAGE DATA ====================*/
const packages = [
{
   id: 'bali-adventure',
   destination: 'bali',
   title: 'Bali Adventure',
   subtitle: 'Indonesia',
   price: 2499,
   duration: 7,
   activity: 'adventure',
   rating: 4.8,
   img: `https://images.unsplash.com/photo-1583531352515-8884af319dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80`
},
{
   id: 'bali-relax',
   destination: 'bali',
   title: 'Bali Relaxation',
   subtitle: 'Indonesia',
   price: 1999,
   duration: 5,
   activity: 'relaxation',
   rating: 4.9,
   img: `https://images.unsplash.com/photo-1557367184-663fba4b8b91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80`
},
{
   id: 'bora-paradise',
   destination: 'bora',
   title: 'Bora Bora Paradise',
   subtitle: 'Polinesia',
   price: 1599,
   duration: 4,
   activity: 'relaxation',
   rating: 5.0,
   img: `https://images.unsplash.com/photo-1544550581-1bcabf842b77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80`
},
{
   id: 'hawaii-surf',
   destination: 'hawaii',
   title: 'Hawaii Surf Camp',
   subtitle: 'USA',
   price: 3499,
   duration: 10,
   activity: 'adventure',
   rating: 4.9,
   img: `https://images.unsplash.com/photo-1535569333377-29c1b878720d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80`
},
{
   id: 'whitehaven-family',
   destination: 'whitehaven',
   title: 'Whitehaven Family Trip',
   subtitle: 'Australia',
   price: 2499,
   duration: 7,
   activity: 'family',
   rating: 4.8,
   img: `https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80`
},
{
   id: 'hvar-cultural',
   destination: 'hvar',
   title: 'Hvar Cultural Experience',
   subtitle: 'Croatia',
   price: 1999,
   duration: 5,
   activity: 'cultural',
   rating: 4.7,
   img: `https://images.unsplash.com/photo-1565625483295-71cef982ad48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80`
},
{
   id: 'hawaii-luxury',
   destination: 'hawaii',
   title: 'Hawaii Luxury Retreat',
   subtitle: 'USA',
   price: 4999,
   duration: 14,
   activity: 'relaxation',
   rating: 5.0,
   img: `https://images.unsplash.com/photo-1498967852262-84a67cf60854?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80`
},
{
   id: 'bora-honeymoon',
   destination: 'bora',
   title: 'Bora Bora Honeymoon',
   subtitle: 'Polinesia',
   price: 3999,
   duration: 8,
   activity: 'relaxation',
   rating: 5.0,
   img: `https://images.unsplash.com/photo-1583592643761-bf2efd95e208?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80`
}
];

/*==================== RENDER PACKAGES ====================*/
const packagesContainer = document.getElementById('packages-container');

function renderPackages(packagesData = packages) {
packagesContainer.innerHTML = '';

packagesData.forEach(pkg => {
   const cardHTML = `
       <div class="place__card" data-id="${pkg.id}" data-price="${pkg.price}" data-duration="${pkg.duration}" data-activity="${pkg.activity}">
           <img src="${pkg.img}" alt="${pkg.title}" class="place__img">
           
           <div class="place__content">
               <span class="place__rating">
                   <i class="ri-star-fill place__rating-icon"></i>
                   <span class="place__rating-number">${pkg.rating}</span>
               </span>

               <div class="place__data">
                   <h3 class="place__title">${pkg.title}</h3>
                   <span class="place__subtitle">${pkg.subtitle}</span>
                   <span class="place__price">$${pkg.price}</span>
               </div>
           </div>

           <button class="button button--flex place__button" data-id="${pkg.id}">
               <i class="ri-arrow-right-line"></i>
           </button>
       </div>
   `;
   packagesContainer.innerHTML += cardHTML;
});

// Add event listeners to book buttons
document.querySelectorAll('.place__button').forEach(button => {
   button.addEventListener('click', () => {
       const packageId = button.getAttribute('data-id');
       const selectedPackage = packages.find(pkg => pkg.id === packageId);
       openBookingModal(selectedPackage);
   });
});
}

// Initial render
renderPackages();

/*==================== FILTER PACKAGES ====================*/
// Initialize noUiSlider
const priceRange = document.getElementById('price-range');

noUiSlider.create(priceRange, {
start: [500, 5000],
connect: true,
step: 100,
range: {
   'min': 500,
   'max': 5000
}
});

// Update price display
const priceMin = document.getElementById('price-min');
const priceMax = document.getElementById('price-max');

priceRange.noUiSlider.on('update', function (values, handle) {
if (handle === 0) {
   priceMin.textContent = `$${Math.round(values[0])}`;
} else {
   priceMax.textContent = `$${Math.round(values[1])}`;
}
});

// Filter packages
const packageFilter = document.getElementById('package-filter');

packageFilter.addEventListener('submit', (e) => {
e.preventDefault();

const priceValues = priceRange.noUiSlider.get();
const minPrice = Math.round(priceValues[0]);
const maxPrice = Math.round(priceValues[1]);

const duration = document.getElementById('duration-filter').value;
const activity = document.getElementById('activity-filter').value;

let filteredPackages = packages.filter(pkg => {
   // Filter by price
   if (pkg.price < minPrice || pkg.price > maxPrice) {
       return false;
   }
   
   // Filter by duration
   if (duration !== 'all') {
       if (duration === 'short' && pkg.duration > 3) return false;
       if (duration === 'medium' && (pkg.duration < 4 || pkg.duration > 7)) return false;
       if (duration === 'long' && pkg.duration < 8) return false;
   }
   
   // Filter by activity
   if (activity !== 'all' && pkg.activity !== activity) {
       return false;
   }
   
   return true;
});

renderPackages(filteredPackages);
});

/*==================== GALLERY MODAL ====================*/
// Gallery image data
const galleryImages = [
{ id: 1, category: 'beaches', url: `https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80`, title: 'Maldives Beach' },
{ id: 2, category: 'beaches', url: `https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80`, title: 'Sunset Beach' },
{ id: 3, category: 'resorts', url: `https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80`, title: 'Beach Resort' },
{ id: 4, category: 'resorts', url: `https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80`, title: 'Luxury Resort' },
{ id: 5, category: 'activities', url: `https://images.unsplash.com/photo-1513039464749-94912b3841ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80`, title: 'Snorkeling' },
{ id: 6, category: 'activities', url: `https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80`, title: 'Hiking' }
];

// Show gallery modal
document.getElementById('explore-button').addEventListener('click', (e) => {
e.preventDefault();
openGalleryModal();
});

function openGalleryModal() {
document.getElementById('gallery-modal').classList.add('active');
renderGallery('all');
}

document.getElementById('gallery-close').addEventListener('click', () => {
document.getElementById('gallery-modal').classList.remove('active');
});

// Gallery filter tabs
document.querySelectorAll('[data-gallery]').forEach(tab => {
tab.addEventListener('click', () => {
   document.querySelectorAll('[data-gallery]').forEach(t => t.classList.remove('active'));
   tab.classList.add('active');
   
   const category = tab.getAttribute('data-gallery');
   renderGallery(category);
});
});

function renderGallery(category) {
const galleryContainer = document.getElementById('gallery-container');
galleryContainer.innerHTML = '';

const filteredImages = category === 'all' 
   ? galleryImages 
   : galleryImages.filter(img => img.category === category);

filteredImages.forEach(img => {
   const itemHTML = `
       <div class="gallery__item">
           <img src="${img.url}" alt="${img.title}" class="gallery__img">
           <div class="gallery__overlay">
               <h3 class="gallery__title">${img.title}</h3>
           </div>
       </div>
   `;
   galleryContainer.innerHTML += itemHTML;
});
}

/*==================== BOOKING MODAL ====================*/
// Open booking modal
function openBookingModal(packageData) {
// Set destination data
document.getElementById('destination-id').value = packageData.id;
document.getElementById('destination').value = packageData.title;

// Show modal
document.getElementById('booking-modal').classList.add('active');

// Initialize date pickers
flatpickr("#check-in", {
   minDate: "today",
   dateFormat: "Y-m-d",
   onChange: calculatePrice
});

flatpickr("#check-out", {
   minDate: "today",
   dateFormat: "Y-m-d",
   onChange: calculatePrice
});

// Clear previous values
document.getElementById('check-in').value = '';
document.getElementById('check-out').value = '';
document.getElementById('guests').value = '2';
document.getElementById('room-type').value = '';
document.getElementById('estimated-price').textContent = `$${packageData.price}`;
}

document.getElementById('reserve-button').addEventListener('click', (e) => {
e.preventDefault();

// Default to Bali package
const defaultPackage = packages.find(pkg => pkg.id === 'bali-adventure');
openBookingModal(defaultPackage);
});

document.getElementById('booking-close').addEventListener('click', () => {
document.getElementById('booking-modal').classList.remove('active');
});

// Calculate price
function calculatePrice() {
const packageId = document.getElementById('destination-id').value;
const packageData = packages.find(pkg => pkg.id === packageId);

const basePrice = packageData.price;
const checkIn = document.getElementById('check-in').value;
const checkOut = document.getElementById('check-out').value;
const guests = parseInt(document.getElementById('guests').value) || 2;
const roomType = document.getElementById('room-type').value;

let totalPrice = basePrice;

// Calculate days
if (checkIn && checkOut) {
   const checkInDate = new Date(checkIn);
   const checkOutDate = new Date(checkOut);
   const days = Math.round((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
   
   if (days > 0) {
       // Add base price for each day beyond the first
       totalPrice = basePrice + (days - 1) * (basePrice * 0.6);
   }
}

// Add guest price
if (guests > 2) {
   totalPrice += (guests - 2) * (basePrice * 0.3);
}

// Add room type price
if (roomType === 'deluxe') totalPrice *= 1.2;
if (roomType === 'suite') totalPrice *= 1.5;
if (roomType === 'villa') totalPrice *= 1.8;

document.getElementById('estimated-price').textContent = `$${Math.round(totalPrice)}`;
}

// Room type selection
document.getElementById('room-type').addEventListener('change', calculatePrice);

// Guests selection
document.getElementById('guests').addEventListener('input', calculatePrice);

// Booking form submission
document.getElementById('booking-form').addEventListener('submit', (e) => {
e.preventDefault();

let isValid = true;
const formElements = e.target.elements;

// Validate form
for (let i = 0; i < formElements.length; i++) {
   const element = formElements[i];
   
   if (element.required && !element.value) {
       element.parentElement.classList.add('error');
       isValid = false;
   } else {
       element.parentElement.classList.remove('error');
   }
}

if (isValid) {
   // Hide booking modal
   document.getElementById('booking-modal').classList.remove('active');
   
   // Show payment modal
   openPaymentModal();
}
});

/*==================== PAYMENT MODAL ====================*/
function openPaymentModal() {
// Prepare booking summary
const packageId = document.getElementById('destination-id').value;
const packageData = packages.find(pkg => pkg.id === packageId);

const destination = document.getElementById('destination').value;
const checkIn = document.getElementById('check-in').value;
const checkOut = document.getElementById('check-out').value;
const guests = document.getElementById('guests').value;
const roomType = document.getElementById('room-type').value;
const price = document.getElementById('estimated-price').textContent;

let roomTypeText = 'Standard Room';
if (roomType === 'deluxe') roomTypeText = 'Deluxe Room';
if (roomType === 'suite') roomTypeText = 'Suite';
if (roomType === 'villa') roomTypeText = 'Private Villa';

const bookingSummary = `
   <p><strong>Destination:</strong> ${destination}</p>
   <p><strong>Check-in:</strong> ${checkIn}</p>
   <p><strong>Check-out:</strong> ${checkOut}</p>
   <p><strong>Guests:</strong> ${guests}</p>
   <p><strong>Room Type:</strong> ${roomTypeText}</p>
   <p><strong>Total Price:</strong> ${price}</p>
`;

document.getElementById('booking-summary').innerHTML = bookingSummary;

// Show payment modal
document.getElementById('payment-modal').classList.add('active');
}

document.getElementById('payment-close').addEventListener('click', () => {
document.getElementById('payment-modal').classList.remove('active');
});

// Payment form validation
document.querySelectorAll('.payment-card__digit').forEach((input, index, inputs) => {
input.addEventListener('input', (e) => {
   // Allow only numbers
   e.target.value = e.target.value.replace(/\D/g, '');
   
   // Auto-move to next input
   if (e.target.value.length === 4 && index < inputs.length - 1) {
       inputs[index + 1].focus();
   }
});
});

// Payment form submission
document.getElementById('payment-form').addEventListener('submit', (e) => {
e.preventDefault();

let isValid = true;
const formElements = e.target.elements;

// Validate form
for (let i = 0; i < formElements.length; i++) {
   const element = formElements[i];
   
   if (element.required && !element.value) {
       if (element.parentElement.classList.contains('booking-form__group')) {
           element.parentElement.classList.add('error');
       }
       isValid = false;
   } else if (element.parentElement.classList.contains('booking-form__group')) {
       element.parentElement.classList.remove('error');
   }
}

if (isValid) {
   // Show loading overlay
   document.getElementById('loading-overlay').classList.add('active');
   
   // Simulate payment processing
   setTimeout(() => {
       // Hide loading overlay
       document.getElementById('loading-overlay').classList.remove('active');
       
       // Hide payment modal
       document.getElementById('payment-modal').classList.remove('active');
       
       // Show confirmation modal
       openConfirmationModal();
   }, 2000);
}
});

/*==================== CONFIRMATION MODAL ====================*/
function openConfirmationModal() {
// Generate random booking reference
const bookingRef = 'TR' + Math.floor(1000000 + Math.random() * 9000000);
document.getElementById('booking-reference').textContent = bookingRef;

// Generate trip itinerary
const checkIn = document.getElementById('check-in').value;
const checkOut = document.getElementById('check-out').value;

if (checkIn && checkOut) {
   const checkInDate = new Date(checkIn);
   const checkOutDate = new Date(checkOut);
   const days = Math.round((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
   
   let itineraryHTML = '';
   
   // Day 1 (arrival)
   itineraryHTML += `
       <div class="timeline-item">
           <h3 class="timeline-item__title">Day 1: Arrival</h3>
           <p class="timeline-item__text">Airport pickup and transfer to your accommodation. Welcome dinner in the evening.</p>
       </div>
   `;
   
   // Middle days
   if (days > 2) {
       itineraryHTML += `
           <div class="timeline-item">
               <h3 class="timeline-item__title">Day 2-${days-1}: Activities</h3>
               <p class="timeline-item__text">Enjoy various activities including beach time, water sports, local tours, and culinary experiences.</p>
           </div>
       `;
   }
   
   // Last day (departure)
   itineraryHTML += `
       <div class="timeline-item">
           <h3 class="timeline-item__title">Day ${days}: Departure</h3>
           <p class="timeline-item__text">Breakfast at the hotel, checkout, and transfer to the airport.</p>
       </div>
   `;
   
   document.getElementById('trip-itinerary').innerHTML = itineraryHTML;
}

// Show confirmation modal
document.getElementById('confirmation-modal').classList.add('active');
}

document.getElementById('confirmation-close').addEventListener('click', () => {
document.getElementById('confirmation-modal').classList.remove('active');
});

document.getElementById('close-confirmation').addEventListener('click', () => {
document.getElementById('confirmation-modal').classList.remove('active');
});

/*==================== REVIEW SYSTEM ====================*/
// Review data
let reviews = [
{ id: 1, destination: 'bali', name: 'John D.', rating: 5, date: '2023-05-12', text: 'Absolutely amazing experience! The beaches were pristine and the locals were incredibly friendly.' },
{ id: 2, destination: 'hawaii', name: 'Sarah M.', rating: 4, date: '2023-04-23', text: 'Great surf spots and beautiful scenery. Weather was perfect throughout our stay.' },
{ id: 3, destination: 'bora', name: 'Michael T.', rating: 5, date: '2023-06-01', text: 'The most romantic getaway! Crystal clear waters and luxurious accommodations.' },
{ id: 4, destination: 'whitehaven', name: 'Emily R.', rating: 5, date: '2023-05-18', text: 'The white sand beaches are out of this world. Great for families!' },
{ id: 5, destination: 'hvar', name: 'David P.', rating: 4, date: '2023-04-15', text: 'Rich in culture and history. The local cuisine was fantastic.' },
{ id: 6, destination: 'bali', name: 'Jessica K.', rating: 4, date: '2023-03-22', text: 'The temples and rice terraces were breathtaking. Would definitely recommend.' }
];

// Render reviews
function renderReviews(destination = 'all') {
const reviewsContainer = document.getElementById('reviews-container');
reviewsContainer.innerHTML = '';

const filteredReviews = destination === 'all'
   ? reviews
   : reviews.filter(review => review.destination === destination);

filteredReviews.forEach(review => {
   const initials = review.name.split(' ').map(n => n[0]).join('');
   
   // Format date
   const reviewDate = new Date(review.date);
   const formattedDate = reviewDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
   
   // Create stars
   let starsHTML = '';
   for (let i = 1; i <= 5; i++) {
       if (i <= review.rating) {
           starsHTML += '<i class="ri-star-fill review__star"></i>';
       } else {
           starsHTML += '<i class="ri-star-line review__star"></i>';
       }
   }
   
   const reviewHTML = `
       <div class="review" data-id="${review.id}">
           <div class="review__header">
               <div class="review__user">
                   <div class="review__avatar">${initials}</div>
                   <div class="review__info">
                       <div class="review__name">${review.name}</div>
                       <div class="review__date">${formattedDate}</div>
                   </div>
               </div>
               <div class="review__stars">
                   ${starsHTML}
               </div>
           </div>
           <p class="review__text">${review.text}</p>
       </div>
   `;
   
   reviewsContainer.innerHTML += reviewHTML;
});

if (filteredReviews.length === 0) {
   reviewsContainer.innerHTML = `
       <div class="text-center p-4">
           <p>No reviews for this destination yet. Be the first to write one!</p>
       </div>
   `;
}
}

// Initial rendering
renderReviews();

// Review tabs
document.querySelectorAll('[data-tab]').forEach(tab => {
tab.addEventListener('click', () => {
   document.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('active'));
   tab.classList.add('active');
   
   const destination = tab.getAttribute('data-tab');
   renderReviews(destination);
});
});

// Open review modal
document.getElementById('write-review-button').addEventListener('click', () => {
document.getElementById('review-modal').classList.add('active');

// Reset form
document.getElementById('review-destination').value = '';
document.getElementById('review-name').value = '';
document.getElementById('review-rating').value = '0';
document.getElementById('review-text').value = '';

document.querySelectorAll('#review-stars .stars__item').forEach(star => {
   star.classList.remove('ri-star-fill');
   star.classList.add('ri-star-line');
});
});

document.getElementById('review-close').addEventListener('click', () => {
document.getElementById('review-modal').classList.remove('active');
});

// Star rating
document.querySelectorAll('#review-stars .stars__item').forEach(star => {
star.addEventListener('click', () => {
   const value = parseInt(star.getAttribute('data-value'));
   document.getElementById('review-rating').value = value;
   
   document.querySelectorAll('#review-stars .stars__item').forEach(s => {
       const starValue = parseInt(s.getAttribute('data-value'));
       
       if (starValue <= value) {
           s.classList.remove('ri-star-line');
           s.classList.add('ri-star-fill');
       } else {
           s.classList.remove('ri-star-fill');
           s.classList.add('ri-star-line');
       }
   });
});
});

// Submit review
document.getElementById('review-form').addEventListener('submit', (e) => {
e.preventDefault();

let isValid = true;

// Validate form
const destination = document.getElementById('review-destination').value;
const name = document.getElementById('review-name').value;
const rating = parseInt(document.getElementById('review-rating').value);
const text = document.getElementById('review-text').value;

if (!destination) {
   document.getElementById('review-destination').parentElement.classList.add('error');
   isValid = false;
} else {
   document.getElementById('review-destination').parentElement.classList.remove('error');
}

if (!name) {
   document.getElementById('review-name').parentElement.classList.add('error');
   isValid = false;
} else {
   document.getElementById('review-name').parentElement.classList.remove('error');
}

if (rating === 0) {
   document.getElementById('review-rating').parentElement.classList.add('error');
   isValid = false;
} else {
   document.getElementById('review-rating').parentElement.classList.remove('error');
}

if (!text) {
   document.getElementById('review-text').parentElement.classList.add('error');
   isValid = false;
} else {
   document.getElementById('review-text').parentElement.classList.remove('error');
}

if (isValid) {
   // Add new review
   const newReview = {
       id: reviews.length + 1,
       destination,
       name,
       rating,
       date: new Date().toISOString().split('T')[0],
       text
   };
   
   reviews.unshift(newReview); // Add to beginning
   
   // Close modal
   document.getElementById('review-modal').classList.remove('active');
   
   // Re-render reviews
   const activeTab = document.querySelector('[data-tab].active');
   const activeDestination = activeTab.getAttribute('data-tab');
   renderReviews(activeDestination);
}
});

/*==================== NEWSLETTER FORM ====================*/
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
e.preventDefault();

const email = document.getElementById('newsletter-email').value;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!email || !emailRegex.test(email)) {
   // Show error
   alert('Please enter a valid email address.');
   return;
}

// Show loading overlay
document.getElementById('loading-overlay').classList.add('active');

// Simulate submission
setTimeout(() => {
   // Hide loading overlay
   document.getElementById('loading-overlay').classList.remove('active');
   
   // Clear input
   document.getElementById('newsletter-email').value = '';
   
   // Show success message
   alert('Thank you for subscribing to our newsletter!');
}, 1000);
});

/*==================== MAP INTEGRATION ====================*/
// Initialize map
function initMap() {
const map = L.map('destinations-map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for destinations
const destinations = [
   { name: 'Bali', lat: -8.4095, lng: 115.1889 },
   { name: 'Hawaii', lat: 19.8968, lng: -155.5828 },
   { name: 'Bora Bora', lat: -16.5004, lng: -151.7415 },
   { name: 'Whitehaven', lat: -20.2758, lng: 149.0371 },
   { name: 'Hvar', lat: 43.1729, lng: 16.4425 }
];

destinations.forEach(destination => {
   const marker = L.marker([destination.lat, destination.lng]).addTo(map);
   marker.bindPopup(`<b>${destination.name}</b><br>Click to explore`).openPopup();
   
   marker.on('click', () => {
       // Find package and open booking
       const packageData = packages.find(pkg => pkg.destination.toLowerCase() === destination.name.toLowerCase());
       if (packageData) {
           openBookingModal(packageData);
       }
   });
});
}

// Initialize map after page load
window.addEventListener('load', initMap);

/*==================== ACCORDION FUNCTIONALITY ====================*/
document.querySelectorAll('.accordion__header').forEach(header => {
header.addEventListener('click', () => {
   const accordion = header.parentElement;
   accordion.classList.toggle('active');
});
});

/*==================== AUTH TABS ====================*/
document.querySelectorAll('[data-auth]').forEach(tab => {
tab.addEventListener('click', () => {
   document.querySelectorAll('[data-auth]').forEach(t => t.classList.remove('active'));
   tab.classList.add('active');
   
   const authType = tab.getAttribute('data-auth');
   
   if (authType === 'login') {
       document.getElementById('login-form').classList.remove('hidden');
       document.getElementById('register-form').classList.add('hidden');
   } else {
       document.getElementById('login-form').classList.add('hidden');
       document.getElementById('register-form').classList.remove('hidden');
   }
});
});

/*==================== WEATHER WIDGET ====================*/
// Weather data
const weatherData = {
'bali': [
   { date: 'Today', temp: '29°C', desc: 'Sunny' },
   { date: 'Tomorrow', temp: '28°C', desc: 'Partly Cloudy' },
   { date: 'Wed', temp: '30°C', desc: 'Sunny' },
   { date: 'Thu', temp: '27°C', desc: 'Rainy' },
   { date: 'Fri', temp: '29°C', desc: 'Partly Cloudy' }
],
'hawaii': [
   { date: 'Today', temp: '26°C', desc: 'Sunny' },
   { date: 'Tomorrow', temp: '27°C', desc: 'Sunny' },
   { date: 'Wed', temp: '25°C', desc: 'Partly Cloudy' },
   { date: 'Thu', temp: '26°C', desc: 'Sunny' },
   { date: 'Fri', temp: '26°C', desc: 'Sunny' }
],
'bora': [
   { date: 'Today', temp: '27°C', desc: 'Sunny' },
   { date: 'Tomorrow', temp: '28°C', desc: 'Sunny' },
   { date: 'Wed', temp: '28°C', desc: 'Partly Cloudy' },
   { date: 'Thu', temp: '27°C', desc: 'Sunny' },
   { date: 'Fri', temp: '26°C', desc: 'Partly Cloudy' }
],
'whitehaven': [
   { date: 'Today', temp: '24°C', desc: 'Sunny' },
   { date: 'Tomorrow', temp: '25°C', desc: 'Partly Cloudy' },
   { date: 'Wed', temp: '23°C', desc: 'Rainy' },
   { date: 'Thu', temp: '22°C', desc: 'Partly Cloudy' },
   { date: 'Fri', temp: '25°C', desc: 'Sunny' }
],
'hvar': [
   { date: 'Today', temp: '23°C', desc: 'Sunny' },
   { date: 'Tomorrow', temp: '24°C', desc: 'Sunny' },
   { date: 'Wed', temp: '22°C', desc: 'Partly Cloudy' },
   { date: 'Thu', temp: '21°C', desc: 'Rainy' },
   { date: 'Fri', temp: '23°C', desc: 'Sunny' }
]
};

// Render weather data
function renderWeather(destination = 'bali') {
const weatherContent = document.getElementById('weather-content');
weatherContent.innerHTML = '';

const data = weatherData[destination];

data.forEach(day => {
   let icon = 'ri-sun-line';
   if (day.desc === 'Partly Cloudy') icon = 'ri-sun-cloudy-line';
   if (day.desc === 'Rainy') icon = 'ri-showers-line';
   
   const dayHTML = `
       <div class="weather-widget__day">
           <div class="weather-widget__date">${day.date}</div>
           <i class="${icon} text-3xl text-blue-500"></i>
           <div class="weather-widget__temp">${day.temp}</div>
           <div class="weather-widget__desc">${day.desc}</div>
       </div>
   `;
   
   weatherContent.innerHTML += dayHTML;
});
}

// Initial weather render
renderWeather('bali');

// Weather location change
document.getElementById('weather-location').addEventListener('change', (e) => {
renderWeather(e.target.value);
});

/*==================== CURRENCY CONVERTER ====================*/
// Exchange rates (simplified for demo)
const exchangeRates = {
'USD': {
   'EUR': 0.93,
   'GBP': 0.81,
   'JPY': 150.28,
   'AUD': 1.52,
   'CAD': 1.38,
   'CNY': 7.13,
   'IDR': 15741.50,
   'THB': 35.52
},
'EUR': {
   'USD': 1.07,
   'GBP': 0.88,
   'JPY': 162.12,
   'AUD': 1.64,
   'CAD': 1.49,
   'CNY': 7.69,
   'IDR': 16980.75,
   'THB': 38.32
},
'GBP': {
   'USD': 1.23,
   'EUR': 1.14,
   'JPY': 185.95,
   'AUD': 1.88,
   'CAD': 1.71,
   'CNY': 8.82,
   'IDR': 19486.39,
   'THB': 43.94
},
// More rates would be added for other currencies
};

// Convert currency
function convertCurrency() {
const amount = parseFloat(document.getElementById('amount-from').value);
const fromCurrency = document.getElementById('currency-from').value;
const toCurrency = document.getElementById('currency-to').value;

if (!amount || isNaN(amount)) {
   document.getElementById('amount-to').value = '';
   return;
}

if (fromCurrency === toCurrency) {
   document.getElementById('amount-to').value = amount;
   return;
}

// Get exchange rate
let rate;

if (fromCurrency === 'USD') {
   rate = exchangeRates.USD[toCurrency];
} else if (toCurrency === 'USD') {
   rate = 1 / exchangeRates.USD[fromCurrency];
} else if (fromCurrency === 'EUR') {
   rate = exchangeRates.EUR[toCurrency];
} else if (toCurrency === 'EUR') {
   rate = 1 / exchangeRates.EUR[fromCurrency];
} else if (fromCurrency === 'GBP') {
   rate = exchangeRates.GBP[toCurrency];
} else if (toCurrency === 'GBP') {
   rate = 1 / exchangeRates.GBP[fromCurrency];
} else {
   // Convert via USD
   const rateToUSD = 1 / exchangeRates.USD[fromCurrency];
   const rateFromUSD = exchangeRates.USD[toCurrency];
   rate = rateToUSD * rateFromUSD;
}

// Calculate and display result
const result = amount * rate;
document.getElementById('amount-to').value = result.toFixed(2);
}

// Convert button
document.getElementById('convert-currency').addEventListener('click', (e) => {
e.preventDefault();
convertCurrency();
});

// Swap currencies
document.getElementById('swap-currency').addEventListener('click', () => {
const fromCurrency = document.getElementById('currency-from').value;
const toCurrency = document.getElementById('currency-to').value;

document.getElementById('currency-from').value = toCurrency;
document.getElementById('currency-to').value = fromCurrency;

convertCurrency();
});

/*==================== PACKING LIST ====================*/
let packingItems = [];
const packingForm = document.getElementById('packing-form');
const packingInput = document.getElementById('packing-item');
const packingItemsList = document.getElementById('packing-items');
const itemsCount = document.getElementById('items-count');
const clearItemsBtn = document.getElementById('clear-items');
const addCommonItemsBtn = document.getElementById('add-common-items');

// Render packing items
function renderPackingItems() {
packingItemsList.innerHTML = '';

packingItems.forEach((item, index) => {
   const itemHTML = `
       <li class="packing-list__item ${item.checked ? 'checked' : ''}">
           <input type="checkbox" class="packing-list__checkbox" data-id="${index}" ${item.checked ? 'checked' : ''}>
           <span class="packing-list__text">${item.text}</span>
           <button class="packing-list__delete" data-id="${index}">
               <i class="ri-delete-bin-line"></i>
           </button>
       </li>
   `;
   
   packingItemsList.innerHTML += itemHTML;
});

// Update items count
itemsCount.textContent = packingItems.length;
}

// Add item to packing list
packingForm.addEventListener('submit', (e) => {
e.preventDefault();

const text = packingInput.value.trim();

if (text) {
   packingItems.push({
       text,
       checked: false
   });
   
   packingInput.value = '';
   renderPackingItems();
}
});

// Toggle item checked state
packingItemsList.addEventListener('change', (e) => {
if (e.target.classList.contains('packing-list__checkbox')) {
   const id = parseInt(e.target.getAttribute('data-id'));
   packingItems[id].checked = e.target.checked;
   renderPackingItems();
}
});

// Delete item
packingItemsList.addEventListener('click', (e) => {
if (e.target.classList.contains('ri-delete-bin-line') || 
   e.target.classList.contains('packing-list__delete')) {
   
   const button = e.target.classList.contains('packing-list__delete') 
       ? e.target 
       : e.target.parentElement;
   
   const id = parseInt(button.getAttribute('data-id'));
   packingItems.splice(id, 1);
   renderPackingItems();
}
});

// Clear all items
clearItemsBtn.addEventListener('click', () => {
packingItems = [];
renderPackingItems();
});

// Add common items
addCommonItemsBtn.addEventListener('click', () => {
const commonItems = [
   'Passport & Travel Documents',
   'Swimwear',
   'Sunscreen',
   'Beach Towel',
   'Sunglasses',
   'Flip-flops',
   'Hat',
   'Phone Charger',
   'Camera',
   'Medication'
];

// Add only items that don't already exist
commonItems.forEach(item => {
   if (!packingItems.some(existing => existing.text === item)) {
       packingItems.push({
           text: item,
           checked: false
       });
   }
});

renderPackingItems();
});

// Initial render
renderPackingItems();

// Mobile-first check
function checkOrientation() {
const isMobile = window.innerWidth < 768;

if (isMobile) {
   // Adjust certain elements for better mobile experience
   document.querySelectorAll('.booking-form__group').forEach(group => {
       group.classList.add('mb-4');
   });
}
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);