export const fetchFavorites = () => {
  return $.ajax({
    method: "GET",
    url: `api/users/favorites`,
  });
};
