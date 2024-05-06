type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodo = async (): Promise<Todo> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await data.json();
  return result;
};

const consoleTodo = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

consoleTodo();

/*


how ts know which type of data come from fetch






*/
