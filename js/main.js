//Load code after all page Loaded.
window.onload = function(){
    //Controls
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext('2d');
    var spriteSheet = new Image();
    spriteSheet.src = "img/players.png";


    //FIRST PLAYER
    var playerOne = new Player(spriteSheet);
    
    //Call StartFunction after all image loaded.
    spriteSheet.onload = function (){
        start();
    }

    //FUNCTIONS BY GAME
    //Make the first call
    function start(){
        update();
    }

    //Update all codes in loop
    function update(){
        render();
        window.requestAnimationFrame(update, cnv);
    }

    //Draw all on screen
    function render(){
        ctx.clearRect(0,0,cnv.width,cnv.height);
        playerOne.draw(ctx);
        playerOne.motion(); 
    }


    //MOVE PLAYER CODE
    //LISTENERS
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
    //On keyDown any key
    function keydownHandler(e){
        switch(e.keyCode){
            case UP:
                playerOne.moveU = true;
                playerOne.moveD = false;
                playerOne.moveL = false;
                playerOne.moveR = false;
                break;
            case DOWN:
                playerOne.moveU = false;
                playerOne.moveD = true;
                playerOne.moveL = false;
                playerOne.moveR = false;
                break;
            case LEFT: 
                playerOne.moveU = false;
                playerOne.moveD = false;
                playerOne.moveL = true;
                playerOne.moveR = false; 
                break;
            case RIGHT:
                playerOne.moveU = false;
                playerOne.moveD = false;
                playerOne.moveL = false;
                playerOne.moveR = true;
                break;
        }
    }

    //On KeyUp any key
    function keyupHandler(e){ 
        switch(e.keyCode) {
            case UP:
                playerOne.moveU = false;
                break;
            case DOWN:
                playerOne.moveD = false;
                break;
            case LEFT:
                playerOne.moveL = false;
                break;
            case RIGHT:
                playerOne.moveR = false;
                break;
        }
    }
    //END OF MOVE PLAYER CODE

 
}