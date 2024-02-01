export const capitalizeFirstLetter = (value: any) => {
    if (!value) return;
    return value.charAt(0).toUpperCase() + value.slice(1);
  };