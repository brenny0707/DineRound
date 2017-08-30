export const fetchReviews = (restaurantId) => {
  return $.ajax({
    method: "GET",
    url: `api/restaurants/${restaurantId}/reviews`
  });
};

export const fetchReview = (reservationId) => {
  return $.ajax({
    method: "GET",
    url: `api/reservation/${reservationId}/reviews`
  });
};
