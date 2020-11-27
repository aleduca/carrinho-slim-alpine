function formatPrice(price) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    maximumFractionDigits: 4,
    currency: "BRL",
  }).format(price);
}

export { formatPrice };
