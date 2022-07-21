//CLASS BY FUNCTIONS
function Player(spriteSheet) {
    //Attributes
    this.posX = 0;
    this.posY = 0;
    this.width = 48;
    this.height = 48;
    this.spriteX = 0;
    this.spriteY = 0;
    this.sprite = spriteSheet;
    this.spriteFrameWidth = 3; //Total Sprites desenhado Horizontal
    this.spriteFrameHeight = 4; //Total Sprites desenhado Vertical
    this.moveL = this.moveR = this.moveU = this.moveD = false;
    this.speed = 1;
    this.countAnimation = 0;
    this.speedAnimation = 5;
    
    //Methods
    
    //DrawPlayer
    this.draw = function(ctx) {
        ctx.drawImage( this.sprite, this.spriteX, this.spriteY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        this.animation(); 
    }

    //Function to change Direction and Move
    this.motion = function(){
        if(this.moveL) { 
            this.posX -= this.speed;
            this.spriteY = this.height * 1;
        } else 
        if(this.moveR) {
            this.posX += this.speed;
            this.spriteY = this.height * 2;
        } else 
        if(this.moveU) {
            this.posY -= this.speed;
            this.spriteY = this.height * 3;
        } else 
        if(this.moveD) {
            this.posY += this.speed;
            this.spriteY = this.height * 0;
        }  
    }

    //ANIMATION
    this.animation = function() {
        if(this.moveU || this.moveD || this.moveL || this.moveR) {
            this.countAnimation++;
            if(this.countAnimation >= this.speedAnimation * this.spriteFrameWidth ) { this.countAnimation = 0; }
            this.spriteX = Math.floor( this.countAnimation / this.speedAnimation) * this.width;
        }
    }
}