class View {
  say(massege) {
    console.log(massege);
    const header = document.createElement('h1');
    header.textContent = massege;
    header.style.color = 'red';
    document.getElementById('root').appendChild(header);
  }
  init() {
    const button = document.querySelector('button');
    button.onclick = () => controller.outMessage();
  }
}

class Controller {
  constructor(myEvent, model) {
    this.myEvent = myEvent;
    this.model = model;
  }
  outMessage() {
    this.model.triggerMessage(this.myEvent);
  }
}

class Model {
  constructor(view) {
    this.view = view;
  }
  triggerMessage(ms) {
    this.view.say(ms.toUpperCase());
  }
}

const view = new View();
view.init();
const model = new Model(view);
const controller = new Controller('Hello Artem!', model);
