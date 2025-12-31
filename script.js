// Product data
const products = [
    {
        id: 1,
        name: "Pocky Peach Cream",
        description: "55g Pocky Peach Cream Covered Biscuit Sticks",
        price: 32000,
        image: "https://pocky.glico.com/global/products/img/cn/22_thumb_peach.png",
        category: "pocky"
    },
    {
        id: 2,
        name: "Pocky Matcha Cream",
        description: "50g Pocky Matcha Cream Covered Biscuit Sticks",
        price: 32000,
        image: "https://pocky.glico.com/global/products/img/cn/22_thumb_matcha.png",
        category: "pocky"
    },
    {
        id: 3,
        name: "Pocky Blueberry & Raspberry",
        description: "55g Pocky Blueberry and Raspberry Cream Covered Biscuit Sticks",
        price: 32000,
        image: "https://pocky.glico.com/global/products/img/cn/22_thumb_blueberry_raspberry.png",
        category: "pocky"
    },
    {
        id: 4,
        name: "Pocky Milk Strawberry Flakes",
        description: "45g Pocky Milk Cream Covered Biscuit Sticks with Real Strawberry Flakes",
        price: 32000,
        image: "https://pocky.glico.com/global/products/img/cn/23_thumb_milk_strawberry.png",
        category: "pocky"
    },
    {
        id: 5,
        name: "Pocky Milk Blueberry Flakes",
        description: "45g Pocky Milk Cream Covered Biscuit Sticks with Real Blueberry Flakes",
        price: 32000,
        image: "https://pocky.glico.com/global/products/img/cn/23_thumb_milk_blueberry.png",
        category: "pocky"
    },
    {
        id: 6,
        name: "Pocky Milk Cranberry Flakes",
        description: "45g Pocky Milk Cream Covered Biscuit Sticks with Real Cranberry Flakes",
        price: 32000,
        image: "https://pocky.glico.com/global/products/img/cn/23_thumb_milk_cranberry.png",
        category: "pocky"
    },
    {
        id: 7,
        name: "Pocky Cocoa Nibs",
        description: "Cocoa Nibs Pocky Biscuit Stick 32g",
        price: 43000,
        image: "https://pocky.glico.com/global/products/img/cn/25_main_cocoa_nibs.png",
        category: "pocky"
    },
    {
        id: 8,
        name: "Pocky Pistachio",
        description: "Coated with Pistachio Cream Containing Pistachio Flakes 37g",
        price: 43000,
        image: "https://pocky.glico.com/global/products/img/cn/25_main_pistachio.png",
        category: "pocky"
    },
    {
        id: 9,
        name: "Relax Pocky Matcha",
        description: "48g Relax Pocky Matcha ice cream Covered Biscuit Sticks",
        price: 39000,
        image: "https://pocky.glico.com/global/products/img/cn/25_thumb_relax_matcha.png",
        category: "pocky"
    },
    {
        id: 10,
        name: "Relax Pocky Cheese",
        description: "48g Relax Pocky Cheese cake Covered Biscuit Sticks",
        price: 39000,
        image: "https://pocky.glico.com/global/products/img/cn/25_thumb_relax_cheese.png",
        category: "pocky"
    },
    {
        id: 11,
        name: "Pocky Choco Milk Cookie",
        description: "35g Pocky Biscuit Sticks Coated with Milk and Chocolate Cream Containing Cookie Crumbs",
        price: 26000,
        image: "https://pocky.glico.com/global/products/img/cn/23_thumb_chocomilk.png",
        category: "pocky"
    },
    {
        id: 12,
        name: "Pocky Strawberry Milk Cookie",
        description: "35g Pocky Biscuit Sticks Coated with Strawberry and Milk Cream Containing Cookie Crumbs",
        price: 26000,
        image: "https://pocky.glico.com/global/products/img/cn/23_thumb_strawberry_milk.png",
        category: "pocky"
    },
    {
        id: 13,
        name: "Pocky Banana Pudding Cookie",
        description: "35g Pocky Biscuit Sticks Coated with Chocolate and Banana pudding Cream Containing Cookie Crumbs",
        price: 26000,
        image: "https://pocky.glico.com/global/products/img/cn/23_thumb_banana_pudding.png",
        category: "pocky"
    },
    {
        id: 14,
        name: "Luckin Coffee Original",
        description: "LUCKIN COFFEE ORIGINAL 15 SACHET",
        price: 168000,
        image: "https://img.lazcdn.com/g/p/61235a7628266e4201ff6726315ceb9c.png_720x720q80.png",
        category: "luckin"
    },
    {
        id: 15,
        name: "Luckin Coffee Coconut",
        description: "LUCKIN COFFEE COCONUT 15 SACHET",
        price: 168000,
        image: "https://img.lazcdn.com/g/p/61235a7628266e4201ff6726315ceb9c.png_720x720q80.png",
        category: "luckin"
    },
    {
        id: 16,
        name: "Oreo Cookies Birthday Cake",
        description: "Oreo Cookies Birthday Cake 97g",
        price: 30000,
        image: "https://yerb-labs.com/cdn/shop/products/82856762-B357-443D-8B97-6505E4D88239.jpg?v=1673032328",
        category: "oreo"
    },
    {
        id: 17,
        name: "Oreo Cookies Matcha",
        description: "Oreo Cookies Matcha 97g",
        price: 30000,
        image: "https://candyfunhouse.com/cdn/shop/files/cfh-2024-oreo-matcha-candy-funhouse-2025.jpg?v=1740148680",
        category: "oreo"
    },
    {
        id: 18,
        name: "Oreo Cookies Grape & Peach",
        description: "Oreo Cookies Grape & Peach 97g",
        price: 30000,
        image: "https://longdan.co.uk/cdn/shop/products/4501552.png?v=1668170793",
        category: "oreo"
    },
    {
        id: 19,
        name: "Oreo Cookies Blueberry & Raspberry",
        description: "Oreo Cookies Blueberry & Raspberry 97g",
        price: 30000,
        image: "https://longdan.co.uk/cdn/shop/products/4501555.png?v=1668170865",
        category: "oreo"
    },
    {
        id: 20,
        name: "Oreo Cookies Strawberry",
        description: "Oreo Cookies Strawberry 97g",
        price: 30000,
        image: "https://candymail.co.uk/cdn/shop/files/B9949960-4753-4D4E-BB5A-61F972A2ABF5.webp?v=1759318520",
        category: "oreo"
    },
    {
        id: 21,
        name: "Oreo Multi Flavor Cookies",
        description: "Oreo Multi Flavor Cookies",
        price: 70000,
        image: "MultiFlav.jpg",
        category: "oreo"
    },
    {
        id: 22,
        name: "Oreo Mini Packs",
        description: "Oreo Mini Packs",
        price: 55000,
        image: "MiniPacks.jpg",
        category: "oreo"
    },
    {
        id: 23,
        name: "Oreo Peach Flavor",
        description: "Oreo Peach Flavor",
        price: 42000,
        image: "Peach.jpg",
        category: "oreo"
    },
    {
        id: 24,
        name: "Oreo Matcha Flavor",
        description: "Oreo Matcha Flavor",
        price: 42000,
        image: "Matcha.jpg",
        category: "oreo"
    },
    {
        id: 25,
        name: "Oreo Coffee + Chocolate + Hazelnut",
        description: "Oreo Coffee + Chocolate + Hazelnut",
        price: 60000,
        image: "CoffeeDLL.jpg",
        category: "oreo"
    },
    {
        id: 26,
        name: "Lindt Lindor 70% Dark Mint",
        description: "Lindt Lindor 70% Dark Mint Chocolate",
        price: 275000,
        image: "Mint.jpg",
        category: "lindt"
    },
    {
        id: 27,
        name: "Lindt Lindor Assorted",
        description: "Lindt Lindor Assorted Chocolate",
        price: 275000,
        image: "AssChoc.jpg",
        category: "lindt"
    },
    {
        id: 28,
        name: "Lindt Lindor Pistachio",
        description: "Lindt Lindor Pistachio",
        price: 275000,
        image: "Pista.jpg",
        category: "lindt"
    },
    {
        id: 29,
        name: "Lindt Lindor Milk",
        description: "Lindt Lindor Milk",
        price: 275000,
        image: "Milk.jpg",
        category: "lindt"
    },
    {
        id: 30,
        name: "Lindt Lindor Dark Chocolate",
        description: "Lindt Lindor Dark Chocolate",
        price: 275000,
        image: "DarkChoc.jpg",
        category: "lindt"
    },
    {
        id: 31,
        name: "Meiji Milk Chocolate",
        description: "Meiji Milk Chocolate",
        price: 50000,
        image: "MilkC.jpg",
        category: "meiji"
    },
    {
        id: 32,
        name: "Meiji Black Chocolate",
        description: "Meiji Black Chocolate",
        price: 50000,
        image: "BlackC.jpg",
        category: "meiji"
    },
        {
            id: 33,
            name: "TONYS Coated Strawberry Chocolate",
            description: "TONYS Coated Strawberry Chocolate",
            price: 25000,
            image: "TONYS.jpg",
            category: "tonys"
        },
        {
            id: 34,
            name: "TONYS Coated Strawberry Matcha",
            description: "TONYS Coated Strawberry Matcha",
            price: 25000,
            image: "TONYS.jpg",
            category: "tonys"
        },
        {
            id: 35,
            name: "TONYS Coated Strawberry Vanilla",
            description: "TONYS Coated Strawberry Vanilla",
            price: 25000,
            image: "TONYS.jpg",
            category: "tonys"
        },
        {
            id: 36,
            name: "Morinaga Bake Creamy Cheese",
            description: "Morinaga Bake Creamy Cheese 10 Mini Pcs",
            price: 75000,
            image: "BAKECheese.jpg",
            category: "morinaga"
        },
        {
            id: 37,
            name: "Gelang Liontin Cinnabar",
            description: "Gelang Liontin Cinnabar",
            price: 150000,
            image: "GELANG.jpg",
            category: "accessories"
        },
        {
            id: 38,
            name: "Teh Oolong Persik (Pink) - 蜜桃乌龙茶",
            description: "Teh Oolong rasa persik • 15 kantong teh celup",
            price: 35000,
            image: "olong.jpg",
            category: "teh"
        },
        {
            id: 39,
            name: "Teh Hijau Persik (Hijau) - 蜜桃绿茶",
            description: "Teh hijau rasa persik • 15 kantong teh celup",
            price: 35000,
            image: "olong.jpg",
            category: "teh"
        },
        {
            id: 40,
            name: "Teh Oolong Persik Putih (Putih) - 白桃乌龙茶",
            description: "Teh oolong persik putih • 15 kantong teh celup",
            price: 35000,
            image: "olong.jpg",
            category: "teh"
        },
        {
            id: 41,
            name: "Termos Chagee",
            description: "Termos minum Chagee original",
            price: 130000,
            image: "chag.jpg",
            category: "tumbler"
        },
        {
            id: 42,
            name: "六神 - Salep Pereda / Penenang Kulit (Hijau)",
            description: "Salep pereda gatal & penenang kulit 六神",
            price: 35000,
            image: "bedak.jpg",
            category: "liushen"
        },
        {
            id: 43,
            name: "六神 - Bedak Penyegar Tubuh (Biru)",
            description: "Bedak penyegar tubuh 六神",
            price: 35000,
            image: "bedak.jpg",
            category: "liushen"
        },
        {
            id: 44,
            name: "Kue Nagasaki Rasa Susu Pando",
            description: "Kue Nagasaki Rasa Susu Pando (12 buah)",
            price: 135000,
            image: "nagasaki.jpg",
            category: "cake"
        },
        {
            id: 45,
            name: "Cheesecake setengah matang rasa original",
            description: "Cheesecake setengah matang rasa original 240g",
            price: 130000,
            image: "cake.jpg",
            category: "cake"
        },
        {
            id: 46,
            name: "Cheesecake setengah matang rasa cokelat",
            description: "Cheesecake setengah matang rasa cokelat 240g isi 8",
            price: 130000,
            image: "cake.jpg",
            category: "cake"
        },
        {
            id: 47,
            name: "Permen hawthorn",
            description: "Permen hawthorn (buah shānzhā) rasa original",
            price: 105000,
            image: "haw.jpg",
            category: "permen"
        },
        {
            id: 48,
            name: "Kalbarri - Mixed Dried Fruits",
            description: "Kalbarri - Mixed Dried Fruits",
            price: 190000,
            image: "dried.jpg",
            category: "dried"
        },
        {
            id: 49,
            name: "Roti rasa alpukat MOXIAOYAN",
            description: "Roti rasa alpukat MOXIAOYAN 250g",
            price: 120000,
            image: "MOXIAOYAN.jpg",
            category: "roti"
        },
        {
            id: 50,
            name: "Abon babi original",
            description: "Abon babi original",
            price: 200000,
            image: "abon.jpg",
            category: "abon"
        },
        {
            id: 51,
            name: "Abon babi mix seaweed",
            description: "Abon babi mix seaweed",
            price: 200000,
            image: "abon.jpg",
            category: "abon"
        },
        {
            id: 52,
            name: "Dendeng Sapi Premium Rasa Lada Hitam",
            description: "Dendeng Sapi Premium Rasa Lada Hitam (Black Pepper Beef Jerky)",
            price: 175000,
            image: "sapi.jpg",
            category: "dendeng"
        },
        {
            id: 53,
            name: "Dendeng Babi Mini Rasa Satay",
            description: "Dendeng Babi Mini Rasa Satay (Mini Satay Pork Jerky)",
            price: 190000,
            image: "babi.jpg",
            category: "dendeng"
        },
        {
            id: 54,
            name: "Keripik kentang Lay's dalam tiga rasa eksklusif Tiongkok",
            description: "Keripik kentang Lay's dalam tiga rasa eksklusif Tiongkok",
            price: 110000,
            image: "layschn.jpg",
            category: "lays"
        },
        {
            id: 55,
            name: "Keripik kentang Lay's Rasa Babi Rebus",
            description: "Keripik kentang Lay's Rasa Babi Rebus isi 3",
            price: 100000,
            image: "laysor.jpg",
            category: "lays"
        },
        {
            id: 56,
            name: "Angpao Dompet Kain Pita Embos Motif Sangjit",
            description: "Angpao Dompet Kain Pita Embos Motif Sangjit – Souvenir Imlek CNY, Dompet Angpau Tradisional untuk Sangjit & Wedding",
            price: 40000,
            image: "willintojastip.png",
            category: "accessories"
        },
        {
            id: 57,
            name: "VRT3 High-Pressure Plunger Pump",
            description: "VRT3 High-Pressure Plunger Pump Pressure Unloader Regulator Valve, Large Flow, 3/8” Brass Quick Connect",
            price: 750000,
            image: "omhaf.png",
            category: "mesin"
        },
        {
            id: 58,
            name: "Jepit Rambut Anak Miffy Cute",
            description: "Jepit Rambut Anak Miffy Cute – Hair Clip Set Lucu & Gemes",
            price: 29000,
            image: "miffy.png",
            category: "accessories"
        },
        {
            id: 59,
            name: "Jepit Rambut Anak Miffy Cute",
            description: "Jepit Rambut Anak Miffy Cute – Hair Clip Set Lucu & Gemes",
            price: 35000,
            image: "miffy 2.png",
            category: "accessories"
        },

];

// State
let currentCategory = 'all';
let currentSort = 'default';

// Format price to Rupiah
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

// Generate WhatsApp message
function generateWhatsAppMessage(product) {
    const message = `Halo WILLINTOJASTIP, saya ingin membeli ${product.name} (${formatPrice(product.price)})`;
    return `https://wa.me/6287885154927?text=${encodeURIComponent(message)}`;
}

// Render products
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    
    if (productsToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">Tidak ada produk yang sesuai dengan filter.</p>';
        return;
    }
    
    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
                <a href="${generateWhatsAppMessage(product)}" class="btn-buy" target="_blank">
                    <i class="fab fa-whatsapp"></i> Beli Sekarang
                </a>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterProducts(category) {
    currentCategory = category;
    updateProducts();
}

// Sort products
function sortProducts(sortType) {
    currentSort = sortType;
    updateProducts();
}

// Update products based on filter and sort
function updateProducts() {
    let filteredProducts = currentCategory === 'all' 
        ? [...products] 
        : products.filter(p => p.category === currentCategory);
    
    // Sort products
    switch(currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Keep original order
            break;
    }
    
    renderProducts(filteredProducts);
}

// Mobile menu toggle
function setupMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('mainNav');
    
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}

// Setup smooth scrolling
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup active nav link
function setupActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Render initial products
    renderProducts(products);
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup smooth scrolling
    setupSmoothScroll();
    
    // Setup active nav
    setupActiveNav();
    
    // Setup filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.dataset.category);
        });
    });
    
    // Setup sort select
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });
    
    console.log('WILLINTOJASTIP website loaded successfully!');
});
