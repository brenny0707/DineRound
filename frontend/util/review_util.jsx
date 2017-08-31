export const fetchReviews = (restaurantId) => {
  return $.ajax({
    method: "GET",
    url: `api/restaurants/${restaurantId}/reviews`
  });
};

export const fetchReview = (reservationId) => {
  return $.ajax({
    method: "GET",
    url: `api/reservations/${reservationId}/reviews`
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: `api/reservations/${review.reservation_id}/reviews`,
    data: { review },
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `api/reservations/${review.reservation_id}/reviews`,
    data: { review },
  });
};
