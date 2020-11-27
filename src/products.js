import { formatPrice } from "./helpers";

export default function products() {
  return {
    products: [],
    formatPrice,
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    showCartInHeader: false,
    list: function () {
      this.products = [
        {
          name: "product 1",
          price: 239.9,
          content: "fdkjkdsjdhskds",
          slug: "product-1",
        },
        {
          name: "product 2",
          price: 145,
          content: "fdkjkdsjdhskds",
          slug: "product-2",
        },
        {
          name: "product 3",
          price: 45.67,
          content: "fdkjkdsjdhskds",
          slug: "product-3",
        },
        {
          name: "product 4",
          price: 12.34,
          content: "fdkjkdsjdhskds",
          slug: "product-4",
        },
      ];
    },

    add: function (product) {
      const productToCart = Object.assign({}, product, {
        qty: 1,
        subtotal: +product.price,
      });

      const indexProductInCart = this.cart.findIndex(
        (product) => product.name === productToCart.name
      );

      if (indexProductInCart < 0) {
        this.cart.push(productToCart);
      } else {
        const { qty, price, name, content, slug, subtotal } = this.cart[
          indexProductInCart
        ];
        this.cart.push({
          name,
          slug,
          content,
          qty: +qty + 1,
          price,
          subtotal: +subtotal + +product.price,
        });

        this.cart.splice(indexProductInCart, 1);
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));

      this.showProductsInHeader();
    },

    showProductsInHeader: function () {
      let productsInHeader = "";
      const productsInCart = document.querySelector("#products-in-cart");

      if (this.cart.length <= 0) {
        productsInHeader = "Nenhum produto no carrinho";
      } else {
        productsInHeader = this.cart
          .map((product) => {
            return `
            <div>${product.name} Price: ${this.formatPrice(
              product.price
            )} Qty: ${product.qty} Subtotal: ${this.formatPrice(
              product.subtotal
            )}</div>
          `;
          })
          .join("");
      }

      const html = productsInHeader + '<a href="/cart">Go to cart</a>';
      productsInCart.innerHTML = html;
    },
  };
}
