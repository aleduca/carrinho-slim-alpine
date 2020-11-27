import { formatPrice } from "./helpers";

export default function cart() {
  return {
    formatPrice,
    products: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],

    change: function (product, key) {
      if (product.qty <= 0) {
        return;
      }

      const productNewPrice = Object.assign({}, product, {
        qty: +product.qty,
        subtotal: +product.qty * +product.price,
      });

      this.products[key] = productNewPrice;

      localStorage.setItem("cart", JSON.stringify(this.products));
    },
    remove: function (key) {
      this.products.splice(key, 1);
      localStorage.removeItem("cart");

      if (this.products.length > 0) {
        localStorage.setItem("cart", JSON.stringify(this.products));
      }
    },
    clear: function () {
      localStorage.removeItem("cart");
      this.products = [];
    },
    total: function () {
      return this.products.reduce((acc, product) => {
        return +acc + +product.subtotal;
      }, 0);
    },
  };
}
