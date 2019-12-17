( function( $ ) {

	$( function() {
	
		$(document).ready(function () {

			$(".StartButton").click(function () {
			    $(".SplashScreen").hide();
			    $(".FinishScreen").hide();
			    $("#canvasArea").show();
			    init();
			});
			
			//Canvas stuff
			var canvas = $("#canvasArea")[0];
			var ctx = canvas.getContext("2d");
			var w = $("#canvasArea").width();
			var h = $("#canvasArea").height();
			
			//Lets save the cell width in a variable for easy control
			var sw = 10;
			var direction;
			var nd;
			var food;
			var score;
			
			//Lets create the snake now
			var snake_array; //an array of cells to make up the snake
			
			function endGame() {
			    $("#canvasArea").hide();
			    $("#score").text(score);
			    $(".FinishScreen").show();
			}
			
			function init() {
			    direction = "right"; //default direction
			    nd = [];
			    create_snake();
			    create_food(); //Now we can see the food particle
			    //finally lets display the score
			    score = 0;
			
			    //Lets move the snake now using a timer which will trigger the paint function
			    //every 60ms
			    if (typeof game_loop != "undefined") clearInterval(game_loop);
				game_loop = setInterval(paint, 120);
				
			}
			
			function create_snake() {
			    var length = 5; //Length of the snake
			    snake_array = []; //Empty array to start with
			    for (var i = length - 1; i >= 0; i--) {
			        //This will create a horizontal snake starting from the top left
			        snake_array.push({
			            x: i,
			            y: 0
			        });
			    }
			}
			
			//Lets create the food now
			function create_food() {
			    food = {
			        x: Math.round(Math.random() * (w - sw) / sw),
			        y: Math.round(Math.random() * (h - sw) / sw),


			    };
			    //This will create a cell with x/y between 0-44
			    //Because there are 45(450/10) positions accross the rows and columns
			    			    
			}
			
			//Lets paint the snake now
			function paint() {
			    if (nd.length) {
			        direction = nd.shift();
			    }
			
			    //To avoid the snake trail we need to paint the BG on every frame
			    //Lets paint the canvas now
			    ctx.fillStyle = "#679f55";
			    ctx.fillRect(0, 0, w, h);
			    ctx.strokeStyle = "#292d26";
			    ctx.strokeRect(0, 0, w, h);
			
			    //The movement code for the snake to come here.
			    //The logic is simple
			    //Pop out the tail cell and place it infront of the head cell
			    var nx = snake_array[0].x;
			    var ny = snake_array[0].y;
			
			    //These were the position of the head cell.
			    //We will increment it to get the new head position
			    //Lets add proper direction based movement now
			    if (direction == "right") nx++;
			    else if (direction == "left") nx--;
			    else if (direction == "up") ny--;
			    else if (direction == "down") ny++;
			
			    //Lets add the game over clauses now
			    //This will restart the game if the snake hits the wall
			    //Lets add the code for body collision
			    //Now if the head of the snake bumps into its body, the game will restart
			    if (nx == -1 || nx == w / sw || ny == -1 || ny == h / sw || check_collision(nx, ny, snake_array)) {
			        //end game
			        return endGame();
			    }
			
			    //Lets write the code to make the snake eat the food
			    //The logic is simple
			    //If the new head position matches with that of the food,
			    //Create a new head instead of moving the tail
			    if (nx == food.x && ny == food.y) {
			        var tail = {
			            x: nx,
			            y: ny
			        };
			        score++;
			
			        //Create new food
			        create_food();
			    } else
			
			    {
			        var tail = snake_array.pop(); //pops out the last cell
			        tail.x = nx;
			        tail.y = ny;
			    }
			
			    //The snake can now eat the food.
			    snake_array.unshift(tail); //puts back the tail as the first cell
			
			    for (var i = 0; i < snake_array.length; i++) {
			        var c = snake_array[i];
			
			        //Lets paint 10px wide cells
			        paint_cell(c.x, c.y);
			    }
			
			    //Lets paint the food
			    paint_cell(food.x, food.y);
			
			    //Lets paint the score
			    var score_text = "Punkte: " + score;
			    ctx.fillStyle = "#292d26";
			    ctx.fillText(score_text, 5, h - 5);
			
			    //Set the font and font size
			    ctx.font = '12px Source Code Pro';
			
			    //position of the fill text counter
			    ctx.fillText(itemCounter, 10, 10);
			
			}
			
			//Lets first create a generic function to paint cells
			function paint_cell(x, y) {
			    ctx.fillStyle = "#292d26";
			    ctx.fillRect(x * sw, y * sw, sw, sw);
			}
			
			function check_collision(x, y, array) {
			    //This function will check if the provided x/y coordinates exist
			    //in an array of cells or not
			    for (var i = 0; i < array.length; i++) {
			        if (array[i].x == x && array[i].y == y) return true;
			    }
			
			    return false;
			}
			
			// Lets prevent the default browser action with arrow key usage
			var keys = {};
			window.addEventListener("keydown",
			    function(e){
			        keys[e.keyCode] = true;
			        switch(e.keyCode){
			            case 37: case 39: case 38:  case 40: // Arrow keys
			            case 32: e.preventDefault(); break; // Space
			            default: break; // do not block other keys
			        }
			    },
			false);
			window.addEventListener('keyup',
			    function(e){
			        keys[e.keyCode] = false;
			    },
			false);
			
			//Lets add the keyboard controls now
			$(document).on('keydown',function (e) {
			    var key = e.which;
			    var td;
			    if (nd.length) {
			        var td = nd[nd.length - 1];
			
			    } else {
			        td = direction;
			    }
			
			    //We will add another clause to prevent reverse gear
			    if (key == "37" && td != "right") nd.push("left");
			    else if (key == "38" && td != "down") nd.push("up");
			    else if (key == "39" && td != "left") nd.push("right");
			    else if (key == "40" && td != "up") nd.push("down");
			
			    //The snake is now keyboard controllable
			
			});
			
		});
		
		
		$(document).on('click', '.button', function(e) {
            console.log('here');
            var e = jQuery.Event("keydown");
		    if ($(this).hasClass('phoneNavigation__number--4')) {
		        e.which = 37;
		    }
		    else if ($(this).hasClass('phoneNavigation__number--2')) {
		        e.which = 38;
		    }
		    else if ($(this).hasClass('phoneNavigation__number--6')) {
		        e.which = 39;
		    }
		    else if ($(this).hasClass('phoneNavigation__number--8')) {
		        e.which = 40;
		    }
            $(document).trigger(e);
		});	

	});

})( jQuery );