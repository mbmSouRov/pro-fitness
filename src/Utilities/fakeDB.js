const addToDb = (time) => {
  let listedCart = {};

  const storedCart = localStorage.getItem("listing-cart");
  if (storedCart) {
    listedCart = JSON.parse(storedCart);
  }
  listedCart = time;
  localStorage.setItem("listing-cart", JSON.stringify(listedCart));
  return listedCart;
};

const getListedCart = () => {
  let listedCart = 0;

  const storedCart = localStorage.getItem("listing-cart");
  if (storedCart) {
    listedCart = JSON.parse(storedCart);
  }

  return listedCart;
};

export { addToDb, getListedCart };
