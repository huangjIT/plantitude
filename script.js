// 移动端菜单切换
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    // 切换菜单显示/隐藏
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
      mobileMenu.style.display = 'block';
      menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  });
}

// 平滑滚动
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
      
      // 关闭移动端菜单
      if (mobileMenu && mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    }
  });
});

// 购物车按钮点击提示（基础版）
const addCartBtns = document.querySelectorAll('.add-cart-btn');
addCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.closest('.product-card').querySelector('h3').textContent;
    alert(`"${productName}" has been added to your cart!`);
  });
});