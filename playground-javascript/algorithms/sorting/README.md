# SORTING

## Resources

- [Sorting](https://visualgo.net/en/sorting)

## Bubble sort

```js
function bubbleSort(list) {
  if (!Array.isArray(list) || !list.length) {
    return list;
  }

  for (let i = list.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }

  return list;
}
```
