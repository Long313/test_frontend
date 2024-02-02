import { ItemType } from "./type";

export const capitalizeFirstLetter = (value: any) => {
  if (!value) return;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const handleSortList = (value: string, list: ItemType[]) => {
  const newList = [...list];

  switch (value) {
    case "":
      return newList;
    case "name":
      const result1 = newList.sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        return 0;
      });
      return result1;
    case "low":
      const result2 = newList.sort((a, b) => {
        return a.price - b.price;
      });
      return result2;
    case "high":
      const result3 = newList.sort((a, b) => {
        return b.price - a.price;
      });
      return result3;
    default:
      return newList;
  }
};
