class Form{
  constructor(){
    this.input = createInput("NAME");
    this.button = createButton("START");
    this.reset = createButton("RESET");
    this.title = createElement('h2');
  }

  display(){
    this.input.position(displayWidth/2-50,displayHeight/2-100);
    this.button.position(displayWidth-50,displayHeight/2-50);
    this.reset.position(displayWidth-100,displayHeight-100);
  }
}