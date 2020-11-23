class Game{
  constructor(){}

  getState(){
    database.ref('gameState').on("value",function(data){
      gS = data.val();
      console.log(gS)
    })
  }

  updateState(state){
    database.ref('/').update({
      gameState : state
    })
  }

  start(){
    console.log("check");
    console.log(gS)
    if(gS === 0){
      
      form = new Form();
      form.display()
    }
  }
}