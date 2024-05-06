const numberArray: number[] = [1, 2, 3, 4, 5];

// const numbersArray: string[] = ["1" , "2" , "3" , "4" , "5"];

const numbersArray: string[] = numberArray.map((value) => value.toString());

console.log(numbersArray);

type computer = {
  ram: string;
  ssd: string;
};

const userComputer: computer = {
  ram: "8gb",
  ssd: "256gb",
};

type computerNumber<T> = {
  [key in keyof T]: T[key];
};

const userComputerNumber: computerNumber<{ ram: string; ssd: number }> = {
  ram: "8gb",
  ssd: 512,
};
