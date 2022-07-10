type Last = {
  <T>(arr: T[]): T;
};

type Prepend = {
  <T>(arr: T[], val: T): T[];
};

const last: Last = (arr) => {
  return arr[arr.length - 1];
};

const prepend: Prepend = (arr, item) => {
  const newArr = [item, ...arr];
  return newArr;
};

last([1, 2, 3, 4]);
prepend([1, 2, 3, 4], 5);
