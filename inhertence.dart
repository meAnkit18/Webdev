import 'dart:io';

void main() {
  Car c = Car(4, "BMW");
  Bike b = Bike(2, "Yamaha");

  c.showDetails();
  c.start();

  b.showDetails();
  b.start();
}

mixin Vehicle {
  late int wheels;
  late String brand;

  void showDetails() {
    print("Wheels: $wheels, Brand: $brand");
  }

  void start() {
    print("$brand is starting...");
  }
}

class Car with Vehicle {
  Car(int wheels, String brand) {
    this.wheels = wheels;
    this.brand = brand;
  }
}

class Bike with Vehicle {
  Bike(int wheels, String brand) {
    this.wheels = wheels;
    this.brand = brand;
  }
}