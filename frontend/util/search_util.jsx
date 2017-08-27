export const searchOpenTables = data => {
  return $.ajax({
    method: "GET",
    url: "api/tables",
    data,
  });
};

export const searchRestaurants = name => {
  return $.ajax({
    method: "GET",
    url: "api/restaurants",
    data: { name }
  });
};
