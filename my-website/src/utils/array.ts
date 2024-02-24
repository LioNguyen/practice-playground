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

export function getFilterList(
  filterList: string[],
  hasSort: boolean = true,
  dataList?: any[]
) {
  if (!filterList || !filterList.length) return [];

  let clonedList = [...filterList];
  if (hasSort) {
    clonedList = sortList([...filterList]);
  }

  const arr = clonedList.filter(Boolean).map((item) => {
    let count = 0;
    if (!!dataList && dataList?.length > 0) {
      count = dataList.filter((data) => data.category === item).length;
    }

    return {
      name: `${item}${count > 0 ? ` (${count})` : ""}`,
      value: item,
    };
  });
  arr.unshift({
    name: "All",
    value: "All",
  });

  return arr;
}
