const { API } = require("../../backend");

// Get all products from database
export const getAllProducts = () => {
  return fetch(`${API}/products/suggested`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSuggestedProducts = () => {
  return fetch(`${API}/products/suggested`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Get product by its id
export const getAProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all filters from database
export const getProductFilters = () => {
  return fetch(`${API}/filters`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getProductByFilters = (
  price,
  colors,
  discount,
  material,
  category,
  sizes,
  skip,
  limit
) => {
  return fetch(
    `${API}/products?${price}&${colors}&${discount}&${material}&${category}&${sizes}&${skip}&${limit}`,
    { method: "GET" }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
