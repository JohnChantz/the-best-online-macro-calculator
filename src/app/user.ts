export class User {
  constructor(userName: string, weight: number, height: number, age: number) {
    this.userName = userName;
    this.weight = weight;
    this.height = height;
    this.age = age;
  }

  private userName: string;
  private weight: number;
  private height: number;
  private age: number;
}
