const insertion_sort = (item) => {
  let sortedItem = Array.from(item);
  const n = item.length;

  let j;
  for (let i=1; i<n; i++) {
    j = i;

    while (j > 0 && sortedItem[j].toString() < sortedItem[j-1].toString()) {
      const x = sortedItem[j];
      sortedItem[j] = sortedItem[j-1];
      sortedItem[j-1] = x;

      j = j - 1;
    }
  }
  console.log(sortedItem)
};
const item = "insertionsort";
insertion_sort(item);
