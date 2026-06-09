class Student {
  #name;
  #course;

  constructor(name, course) {
    this.#name = name;
    this.#course = course;
  }

  showinfo = () => {
    console.log(`Student name: ${this.#name}, course: ${this.#course}`);
  };
}

var student1 = new Student('John', 'Second');
student1.showinfo();
