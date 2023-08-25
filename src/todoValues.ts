export let todoTitle: string;
export let todoDate: Date;
export let todoDescription: string;

//
export const getTodoTitle: EventListener = (event: Event): void => {
  const titleInputElem = event.target as HTMLInputElement;
  todoTitle = titleInputElem.value;
};
//
export const getTodoDate: EventListener = (event: Event): void => {
  const dateInputElem = event.target as HTMLInputElement;
  todoDate = new Date(dateInputElem.value);

   const currentDate = new Date();
   const selectedDate = todoDate.getTime();
   if (
     currentDate.getTime() > selectedDate &&
     currentDate.getDate() !== todoDate.getDate()
   ) {
     alert("please the date you entered is not valid");
// 
     dateInputElem.value = "";
   }
};
//
export const getTodoDesc: EventListener = (event: Event): void => {
  const descriptionTextAreaElem = event.target as HTMLTextAreaElement;
  todoDescription = descriptionTextAreaElem.value;
};
