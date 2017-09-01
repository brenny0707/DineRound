export const createFavorite = (restaurantId) => {
  return $.ajax({
    method: "POST",
    url: `api/restaurants/${restaurantId}/favorites`,
  });
};


export const deleteFavorite = (restaurantId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/restaurants/${restaurantId}/favorites`,
  });
};
