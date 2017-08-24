export const fetchRestaurants = () => {
  return $.ajax({
      method: "GET",
      url: `api/restaurants`
  });
};

export const fetchRestaurant = (id) => {
  return $.ajax({
      method: "GET",
      url: `api/restaurants/${id}`
  });
};
