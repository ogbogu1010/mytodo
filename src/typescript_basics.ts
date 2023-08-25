type IMyVar = {
    name: string;
    age: number;
    price?: number;
  };
  
  type IStudents = { name: string; age: number }[];
  
  interface IWorkers {
      name: string;
      salary: number;
      level: string | number | boolean
  }
  
  let myVar: IMyVar;
  let students: IStudents;
  let workers: IWorkers[];
  
  myVar = { name: "dksjkl", age: 349 };
  
  students = [
    { name: "student name", age: 45934 },
    { name: "student name", age: 45934 },
  ];
  
  workers = [{name:"David", level:2, salary: 345}]
  