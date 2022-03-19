var canvas = new fabric.Canvas("myCanvas");

player_x = 100;
player_y = 100;

block_width = 30;
block_height = 30;

var skin = "";
var block = "";

function skin_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        skin = Img;

        skin.scaleToWidth(150);
        skin.scaleToHeight(140);
        skin.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(skin);
    });

}

function block_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block = Img;

        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(block);
    });
}

//endd

skin_update();

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
keypressed = e.keyCode;

if(keypressed=="37"){
    left();
    console.log("left");
}

if(keypressed=="38"){
    up();
    console.log("up");
}

if(keypressed=="39"){
    right();
    console.log("right");
}

if(keypressed=="40"){
    down();
    console.log("down");
}

if(keypressed=="67"){
    console.log("c");
    block_update("cloud.jpg");
}

if(keypressed=="84"){
    console.log("t");
    block_update("trunk.jpg");
}

if(keypressed=="68"){
    console.log("d");
    block_update("dark_green.png");
}

if(keypressed=="76"){
    console.log("l");
    block_update("light_green.png");
}

if(keypressed=="71"){
    console.log("g");
    block_update("ground.png");
}

if(keypressed=="87"){
    console.log("w");
    block_update("wall.jpg");
}

if(keypressed=="89"){
    console.log("y");
    block_update("yellow_wall.png");
}

if(keypressed=="85"){
    console.log("u");
    block_update("unique.png");
}

if(keypressed=="82"){
    console.log("r");
    block_update("roof.jpg");
}

//function to remove a block using A key
if(keypressed=="65"){
    console.log("a to remove");
    object = canvas.getActiveObject();
    canvas.remove(object);
}

if(keypressed=="80" && e.shiftKey==true){
    console.log("shift and p");
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById("current_width").innerHTML= block_width;
    document.getElementById("current_height").innerHTML= block_height;
}

if(keypressed=="77" && e.shiftKey==true){
    console.log("shift and m");
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("current_width").innerHTML= block_width;
    document.getElementById("current_height").innerHTML= block_height;
}

}

function up() {
    if (player_y >=0) {
        player_y = player_y - block_height;
        console.log("block image height =" + block_height);
        console.log("When up arrow is pressed , x-" + player_x + ",y-" + player_y);
        canvas.remove(skin);
        skin_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_height;
        console.log("block image height- " +block_height);
        console.log("When down arrow key is pressed, x- " + player_x + ", y - " + player_y);
        canvas.remove(skin);
        skin_update();
   }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_width;
        console.log("block image width - " + block_width);
        console.log("When left arrow key pressed, x - " + player_x + ", y-" + player_y);
        canvas.remove(skin);
        skin_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_width;
        console.log("block image width - " + block_width);
        console.log("When right arrow key pressed, x - " + player_x + ", y-" + player_y);
        canvas.remove(skin);
        skin_update();
    }
}