class Form{
    constructor(){
        this.input=createInput("Enter name");
        this.button=createButton("Next");
        this.greeting=createElement("h2");
        this.reset=createButton("Reset")
    }


    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.reset.hide();
    }

    
    display(){
        var title= createElement('h1')
        title.html("Car Race")
        title.position(displayWidth/2-175,displayHeight/2-300)

        
        this.input.position(displayWidth/2-100,displayHeight/2-100)
        
        this.button.position(displayWidth/2-40,displayHeight/2-50);

        this.reset.position(displayWidth/2-40,displayHeight/2)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide();

            player.name=this.input.value()
            playerCount+=1;
            player.index = playerCount;
            player.updateCount(playerCount)
            player.update(player.name)
            
            
            this.greeting.html("Hi, "+player.name)
            this.greeting.position(displayWidth/2-200,displayHeight/2-200)
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
        })
    }
}