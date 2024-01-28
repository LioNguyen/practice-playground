export function bubbleSort(list, type = "asc") {
  if (!Array.isArray(list) || !list.length) {
    return list;
  }

  for (let i = list.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const currentValue = list[j];
      const nextValue = list[j + 1];
      if (type === "asc") {
        if (currentValue > nextValue) {
          [list[j], list[j + 1]] = [nextValue, currentValue];

          // Other method to swap
          // const temp = list[j];
          // list[j] = list[j + 1];
          // list[j + 1] = temp;
        }
      } else {
        if (currentValue < nextValue) {
          [list[j], list[j + 1]] = [nextValue, currentValue];
        }
      }
    }
  }

  return list;
}

var testList = [
  [1, 6, 34, 2, 8],
  [67, 34, 2, 56575, 0, 8, 6, 2],
  [4, 1, 7, 2323, 8989, 111, 89, 11],
];

testList.forEach((test) => {
  console.log(bubbleSort(test, "desc"));
});
