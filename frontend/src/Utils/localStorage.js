// Add a product to a localStorage
export const addFavoritesToLocalStorage = (product) => {
  const favorites = getFavoritesFromLocalStorage();
  if (!favorites.some((p) => p._id === product._id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

// Remove
export const removeFavoritesFromLocalStorage = (productId) => {
  const favorites = getFavoritesFromLocalStorage();
  const updateFavorites = favorites.filter(
    (product) => product._id !== productId
  );
  localStorage.setItem("favorites", JSON.stringify(updateFavorites));
};

// Retrieve
export const getFavoritesFromLocalStorage = () => {
  const favoritesJSON = localStorage.getItem("favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};
