type zihad = {
  name: string;
  current: string;
  course: string;
};

type checkZihad<T> = T extends keyof zihad ? true : false;

type hisName = checkZihad<"name">;
