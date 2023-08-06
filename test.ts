class Car {
  make: string;
  model: string;
  year: number;
  mileage: number;

  constructor(make: string, model: string, year: number, mileage: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  drive(distance: number): void {
    this.mileage += distance;
  }
}