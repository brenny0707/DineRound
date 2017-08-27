export const uniqTables = (tables) => {
  let tableList = {};
  let tableArray = [];
  tables.forEach( (table) => {
    tableList[table.time] = table;
  });
  Object.keys(tableList).forEach( (key) => {
    tableArray.push(tableList[key]);
  });
  return tableArray;
};
