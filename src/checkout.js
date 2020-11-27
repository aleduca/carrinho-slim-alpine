import { BASEURL, STRIPEPK, STRIPESK } from "./constants";
import http from "./http";

export default function checkout() {
  return {
    loading: false,
    checkout: async function () {
      try {
        this.loading = true;

        const products = localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [];

        const stripe = Stripe(STRIPEPK);

        const { data } = await http.post(`${BASEURL}/checkout`, {
          products,
          secret: STRIPESK,
        });

        this.loading = false;
        stripe.redirectToCheckout({ sessionId: data["id"] });
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  };
}
