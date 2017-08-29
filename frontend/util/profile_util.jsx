export const FetchUserProfile = () => {
  return $.ajax({
    method: "GET",
    url: "api/users",
  });
};

export const deleteUserReservation = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/reservations/${id}`,
  });
};
