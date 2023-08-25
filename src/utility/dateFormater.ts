// formateDate
export const formateDate = (date: Date) => {
    const year = date.getFullYear();
    const month =
      date.getUTCMonth() + 1 <= 9
        ? `0${date.getUTCMonth() + 1}`
        : date.getUTCMonth() + 1;
    const day =
      date.getUTCDate() <= 9 ? `0${date.getUTCDate()}` : date.getUTCDate();
  
    return `${year}-${month}-${day}`;
  };