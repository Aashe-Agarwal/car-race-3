class Game{
    constructor(){
        
    }
    getState(){
        database.ref("gamestate").on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate: state
        });
    }

    start(){
        if(gamestate === 0){
            player= new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1=createSprite(400,100);
        car1.addImage("car",car1img);
        car2=createSprite(600,100);
        car2.addImage("car2",car2img);
        car3=createSprite(800,100);
        car3.addImage("car3",car3img);
        car4=createSprite(1000,100);
        car4.addImage("car4",car4img);
        cars=[car1,car2,car3,car4]
    }
    

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index=0;
            var xpos=150;
            var ypos=0;
            background("brown")
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
            for(var plr in allPlayers){
                index+=1;
                xpos+=200;
                ypos=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=xpos;
                cars[index-1].y=ypos;
                if(index=== player.index){
                    fill(rgb(random(0,255),random(0,255),random(0,255)));
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;

                }
                else{
                    fill("black");
                }
                textAlign(CENTER);
             textSize(20);
               text(allPlayers[plr].name,cars[index-1].x-25,cars[index-1].y+60)  
              
            }

        }

        if (keyDown("up")&&player.index!==null){
            player.distance+=5;
            player.update();
        }

        if (player.distance > 3415){
            gamestate=2
            
        }

        drawSprites();
    }

    end(){
       console.log("game over")

    }

    
}