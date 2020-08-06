class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("GameStart",130,20);
    Player.getPlayerInfo();
    var posy = 40;
    if (allplayer != undefined){
      for(var plr in allplayer){
        posy = posy + 30;
        text(allplayer[plr].name + ":"+ allplayer[plr].distance,130,posy)
      }
    }
  }
}
