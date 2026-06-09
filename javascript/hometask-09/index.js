class First {
  run() {
    console.log('run');
  }
  go() {
    console.log('go');
  }
  say() {
    console.log('say');
  }
}

class Second {
  run() {
    console.log('second');
  }
  go() {
    console.log('second');
  }
}

class Third {
  static createobj(name) {
    return new name();
  }
}

const first = Third.createobj(Second);
first.run();
first.go();
// first.say();
