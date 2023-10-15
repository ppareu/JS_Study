class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run = function () {
    alert(`${this.name} is running.`);
  };
}

const cheese = new Pet("치즈", "yellow");
cheese.run();
