export const fetchOpenTables = data => {
  return $.ajax({
    method: "GET",
    url: "api/tables",
    data,
  });
};
