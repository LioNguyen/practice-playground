export function sortList(list: any[], type: "asc" | "desc" = "asc") {
  if (!list || !list.length) return list;

  if (type === "desc") {
    return list.sort((a, b) => {
      if (a < b) return 1;

      return -1;
    });
  }

  return list.sort((a, b) => {
    if (a > b) return 1;
    return -1;
  });
}

export function sortListBasedOnProperty(
  list: any[],
  propertyName: string,
  type: "asc" | "desc" = "asc"
) {
  if (!list || !list.length) return list;

  if (type === "desc") {
    return list.sort((a, b) => {
      if (a[propertyName] < b[propertyName]) return 1;

      return -1;
    });
  }

  return list.sort((a, b) => {
    if (a[propertyName] > b[propertyName]) return 1;
    return -1;
  });
}

export function getUniqueItemList(list: any[], hasSort: boolean = true) {
  if (!list || !list.length) return list;

  const listSet = new Set(list);

  if (hasSort) {
    return sortList(Array.from(listSet));
  }
  return Array.from(listSet);
}

export function getFilterList(list: string[], hasSort: boolean = true) {
  if (!list || !list.length) return [];

  let clonedList = [...list];
  if (hasSort) {
    clonedList = sortList([...list]);
  }

  const arr = clonedList.filter(Boolean).map((item) => ({
    name: item,
    value: item,
  }));
  arr.unshift({
    name: "All",
    value: "All",
  });

  return arr;
}
