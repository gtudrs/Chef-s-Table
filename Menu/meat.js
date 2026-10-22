document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cartCount = document.getElementById("cart-count");

    const products = [
        { name: "Piept de pui", price: 4.99, img: "https://www.shutterstock.com/shutterstock/videos/16645813/thumb/1.jpg" },
        { name: "Pulpe de pui", price: 4.49, img: "https://www.joesfreshpoultry.com.au/cdn/shop/products/chicken-thigh-fillet-raw.jpg?v=1658365095" },
        { name: "Pui întreg", price: 3.99, img: "https://cdn11.bigcommerce.com/s-1ly92eod7l/images/stencil/1280x1280/products/597/7049/Image_fx-55__85738.1755893844.png?c=1" },
        { name: "Aripioare de pui", price: 5.49, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eJ9GpjH1yABbr1WsmJJU66crR3wME271whNVtmFlgjWR10AWMZihl1yGP3R3s0QYw9o&usqp=CAU" },
        { name: "Piept de curcan", price: 6.99, img: "https://www.shutterstock.com/image-photo/raw-turkey-breast-steaks-organic-600nw-1806303784.jpg" },
        { name: "Curcan măcinat", price: 5.99, img: "https://glenwoodmeats.ca/wp-content/uploads/2020/08/236-gr-turkey.jpg" },
        { name: "Carne de rață", price: 7.49, img: "https://gladwins.co.uk/wp-content/uploads/2024/04/duck-breast.jpeg" },
        { name: "Ribeye de vită", price: 14.99, img: "https://huntresssteak.com/wp-content/uploads/2024/03/Prime-Bone-in-Ribeye-Steak-Huntress-scaled.jpeg" },
        { name: "Mușchi de vită", price: 12.99, img: "https://www.themeatman.co.uk/cdn/shop/files/sirloinsteaks2023.jpg?v=1698143790" },
        { name: "Tenderloin de vită", price: 19.99, img: "https://www.shutterstock.com/image-photo/fresh-raw-beef-meat-whole-600nw-1021135813.jpg" },
        { name: "Vită măcinată", price: 7.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQn_y1uIVCxw_3gnkmPfmSP5ryiQs7GCd_A&s" },
        { name: "Cotlete de miel", price: 16.49, img: "https://www.meatemporium.com.au/cdn/shop/collections/image_1024x1024.png?v=1650502378" },
        { name: "Pulpa de miel", price: 13.99, img: "https://static.vecteezy.com/system/resources/previews/053/595/239/non_2x/marinated-raw-lamb-mutton-leg-thigh-with-thyme-and-spices-black-background-top-view-photo.jpg" },
        { name: "Carne de capră", price: 11.99, img: "https://s3.amazonaws.com/grazecart/greenpasturesfarm/images/1652209731_627ab84341267.jpg" },
        { name: "Cotlete de porc", price: 6.49, img: "https://previews.123rf.com/images/composterbox/composterbox2101/composterbox210100135/161505322-marbled-raw-pork-chops-meat-steak-or-tomahawk-dark-wooden-background-top-view.jpg" },
        { name: "Mușchiuleț de porc", price: 8.99, img: "https://img.freepik.com/premium-photo/raw-pork-tenderloin-meat-marble-board-black-background-top-view_89816-30614.jpg" },
        { name: "Coaste de porc", price: 7.99, img: "https://thumbs.dreamstime.com/b/rack-raw-pork-spare-ribs-seasoned-spices-black-background-top-view-169125991.jpg" },
        { name: "Carne de porc macinata", price: 5.99, img: "https://img.freepik.com/premium-photo/raw-minced-pork-black-background-top-view-space-text_89816-7493.jpg" },
        { name: "Bacon", price: 10.49, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sBMrrCQekS7nB277fuWyk78ekttlOfp1bGbGgzxMNEdqbjVoX8lS7NU&s=10" },
        { name: "Cârnați de porc", price: 9.49, img: "https://img.freepik.com/premium-photo/raw-sausages-dark-background_249006-2232.jpg" },
        { name: "Șuncă", price: 8.99, img: "https://www.dicksonsfarmstand.com/cdn/shop/products/gammonnew_1024x1024.jpg?v=1638725644" },
        { name: "Salam", price: 12.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlZFp4zVU7_ywvD0J4NLYa-uzAlJaIR2LjJxPMy9Y4lX0uHY0dGB2IuvA&s=10" },
        { name: "Cotlet de vițel", price: 15.99, img: "https://freezedrywholesalers.com/cdn/shop/files/veal_720x.jpg?v=1693569756" },
        { name: "Pulpe de vițel", price: 13.49, img: "https://ottomanelli.com/wp-content/uploads/2020/08/ossobucco.jpg" },
        { name: "Carne de iepure", price: 9.99, img: "https://img.freepik.com/premium-photo/raw-rabbit-meat-with-spice-ingredients-set-old-dark-wooden-table-background-with-copy-space-text_249006-14047.jpg" },
        { name: "Carne de prepeliță", price: 11.99, img: "https://img.freepik.com/premium-photo/fresh-raw-meat-quails-ready-cooking-dark-wooden-background_249006-14136.jpg" },
        { name: "Vânat", price: 17.49, img: "https://img.freepik.com/premium-photo/raw-wild-game-meat-venison-dear-ready-cooking-dark-background-top-view_89816-55924.jpg" },
        { name: "Carne de bizon", price: 18.99, img: "https://t4.ftcdn.net/jpg/03/74/52/37/360_F_374523768_yB9KfQ2f8nmEj5adG2Zq8GjbTEzLG8a5.jpg" }
    ];

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.img}" width="200px" height="150px">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        `;

        div.querySelector(".add-to-cart").addEventListener("click", () => {
            addToCart(product);
            updateCartCount(); 
            window.dispatchEvent(new Event("storage")); 
        });

        productList.appendChild(div);
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find(item => item.name === product.name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    window.addEventListener("storage", updateCartCount);
    updateCartCount();
});