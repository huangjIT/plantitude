// Mobile Menu Toggle - CSS Animation
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    // Toggle active class for CSS animation
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });

      // Close mobile menu
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    }
  });
});

// Order Form Functionality - Slide-in Order Form
const orderFormOverlay = document.getElementById('orderFormOverlay');
const orderForm = document.getElementById('orderForm');
const closeFormBtn = document.getElementById('closeFormBtn');
const orderProductImg = document.getElementById('orderProductImg');
const orderProductName = document.getElementById('orderProductName');
const orderProductPrice = document.getElementById('orderProductPrice');

// Open order form
const openOrderForm = (productCard) => {
  // Get product information
  const productName = productCard.querySelector('h3').textContent;
  const productPrice = productCard.querySelector('.product-price').textContent;

  // Get product image - prioritize loaded images
  const productImgElement = productCard.querySelector('img');
  let productImgSrc = productImgElement.src;

  // If image not yet loaded (lazy loading), use data-src
  if (!productImgSrc || productImgSrc === window.location.href) {
    productImgSrc = productImgElement.dataset.src;
  }

  // If in picture element, check source srcset
  const picture = productCard.querySelector('picture');
  if (picture) {
    const source = picture.querySelector('source');
    if (source && source.srcset) {
      productImgSrc = source.srcset;
    } else if (source && source.dataset.srcset) {
      productImgSrc = source.dataset.srcset;
    }
  }

  // Set product info in form
  orderProductImg.src = productImgSrc;
  orderProductImg.alt = productName;
  orderProductName.textContent = productName;
  orderProductPrice.textContent = productPrice;

  // Show form
  orderFormOverlay.classList.add('active');

  // Prevent background scrolling
  document.body.style.overflow = 'hidden';
};

// Close order form
const closeOrderForm = () => {
  orderFormOverlay.classList.remove('active');

  // Restore background scrolling
  document.body.style.overflow = '';

  // Reset form
  setTimeout(() => {
    orderForm.reset();
  }, 400); // Wait for animation to complete before resetting
};

// Add click events to all "Order Now" buttons
const addCartBtns = document.querySelectorAll('.add-cart-btn');
addCartBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const productCard = btn.closest('.product-card');
    openOrderForm(productCard);
  });
});

// Close button click event
if (closeFormBtn) {
  closeFormBtn.addEventListener('click', closeOrderForm);
}

// Click overlay to close form
if (orderFormOverlay) {
  orderFormOverlay.addEventListener('click', (e) => {
    if (e.target === orderFormOverlay) {
      closeOrderForm();
    }
  });
}

// Press ESC to close form
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && orderFormOverlay.classList.contains('active')) {
    closeOrderForm();
  }
});

// Form submission handling
if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(orderForm);
    const orderData = {
      product: orderProductName.textContent,
      price: orderProductPrice.textContent,
      customerName: formData.get('customerName'),
      customerEmail: formData.get('customerEmail'),
      customerPhone: formData.get('customerPhone'),
      customerAddress: formData.get('customerAddress'),
      quantity: formData.get('quantity'),
      notes: formData.get('notes')
    };

    // Close form
    closeOrderForm();
  });
}

// Lazy Loading Images - IntersectionObserver
// Only load images as they approach viewport, improving performance
const lazyLoadImages = () => {
  const images = document.querySelectorAll('img.lazy-load');

  // Configure observer options
  const options = {
    root: null, // Use viewport as root element
    rootMargin: '50px', // Start loading 50px in advance
    threshold: 0.01 // Trigger when 1% visible
  };

  // Create observer
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const picture = img.parentElement;

        // Load source element srcset
        if (picture.tagName === 'PICTURE') {
          const sources = picture.querySelectorAll('source[data-srcset]');
          sources.forEach(source => {
            source.srcset = source.dataset.srcset;
            source.removeAttribute('data-srcset');
          });
        }

        // Load image
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }

        // Add class after image loads (for fade-in animation)
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });

        // Remove lazy-load class
        img.classList.remove('lazy-load');

        // Stop observing this image
        observer.unobserve(img);
      }
    });
  }, options);

  // Observe all images that need lazy loading
  images.forEach(img => {
    imageObserver.observe(img);
  });
};

// Initialize lazy loading after page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
  lazyLoadImages();
}

// Scroll-Driven Animations
// Trigger animations when elements enter viewport
const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-slide-left, .scroll-slide-right, .scroll-fade');

  // Configure observer options
  const options = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger when element reaches 100px from bottom of viewport
    threshold: 0.1 // Trigger when 10% visible
  };

  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class
        entry.target.classList.add('animate-in');

        // Stop observing after animation (performance optimization)
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe all elements that need animation
  animatedElements.forEach(el => {
    observer.observe(el);
  });
};

// Initialize scroll animations after page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}

// Lazy Load Map
// Load map only when user clicks placeholder or scrolls to map location
const initMapLazyLoad = () => {
  const mapPlaceholder = document.getElementById('map-placeholder');
  const mapIframe = document.getElementById('store-map');

  if (!mapPlaceholder || !mapIframe) return;

  // Function to load map
  const loadMap = () => {
    if (mapIframe.dataset.src && !mapIframe.src) {
      mapIframe.src = mapIframe.dataset.src;
      mapIframe.removeAttribute('data-src');
      mapIframe.classList.add('loaded');
      mapPlaceholder.classList.add('hidden');
    }
  };

  // Click placeholder to load map
  mapPlaceholder.addEventListener('click', loadMap);

  // Use IntersectionObserver to auto-load when map area approaches viewport
  const mapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Auto-load when map container enters viewport
        setTimeout(loadMap, 500); // 500ms delay to give user time to react
        mapObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px' // Start loading 100px in advance
  });

  mapObserver.observe(mapPlaceholder.parentElement);
};

// Initialize map lazy loading after page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMapLazyLoad);
} else {
  initMapLazyLoad();
}

// ========================================
// SVG Vine Growth Animations
// ========================================

const initVineAnimations = () => {
  const vines = document.querySelectorAll('.page-vine');

  if (vines.length === 0) return;

  // Trigger vines on scroll
  let scrolled = false;
  
  const triggerVines = () => {
    if (!scrolled && window.scrollY > 50) {
      scrolled = true;
      vines.forEach(vine => {
        vine.classList.add('vine-grow');
      });
      window.removeEventListener('scroll', triggerVines);
    }
  };

  window.addEventListener('scroll', triggerVines);
  
  // Also trigger if user scrolls within first 100ms (fast scroll)
  setTimeout(() => {
    if (window.scrollY > 50) {
      triggerVines();
    }
  }, 100);
};

// Initialize vine animations after page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVineAnimations);
} else {
  initVineAnimations();
}

// ========================================
// Falling Leaves Animation
// ========================================

const initFallingLeaves = () => {
  const container = document.querySelector('.falling-leaves');
  if (!container) return;

  // Create 10 falling leaves
  for (let i = 1; i <= 10; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    container.appendChild(leaf);
  }
};

// Initialize falling leaves after page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFallingLeaves);
} else {
  initFallingLeaves();
}
