"Hangry Shark Racing Game" created using (HTML/CSS JAVASCRIPT/JQUERY).

The game Hangry Shark is a race in the ocean between one hungry shark and one angry shark. When you combine the two you come up with an hangry shark.

This is a multiplayer game one player will use the right arrow key to swim and the other player will use the d key.

The theme of this game will take you away and make you feel like your deep sea.

The objective is to reach the finish line before the other shark does, if you do not theres a background timer set to 15 seconds that will automatically reset the game when that time is reached.



#angryShark {
    height: 115px;  //player one
    width: 250px;
    bottom: 10px;
    position: sticky; <---- sticky positioning to shorten race distance
    background: url(IMGS/angryShark.png) no-repeat;
}


#hungryShark {
    height: 194px;   //player 2
    width: 194px;
    left: 0;
    bottom: 15px;
    position: sticky;   <---- sticky positioning to shorten race distance
    background: url(IMGS/hungryShark.png) no-repeat;
}


direction == 37) {
    $("#angryShark").animate({  // moving with arrow keys
        left: "-=5"
    }, 0);
    break;

    $(document).keydown(function(e) {  // moving with character keys
        if (e.keyCode == 87) { //W Up
            $('#hungryShark').animate({
                top: -dstnc + Ypos + 'px'
            }, spd);
            Ypos = Ypos - dstnc;

Overall I am very proud of myself for overcoming a few objections during the process of making this game.  
1. was getting the sharks to move on key press and key down.
2. being able to have more control using css, something i struggled with in the past.
3. creating a intro screen to give users time to get ready.
On the other hand I could've made the game better in a lot of ways!
1. Identifying a winner.
2. user input to make players feel unique while playing.
3. D.R.Y methods in the animations

Shoutouts to wdi 36 , Jesse, Roman, Archy, Megan, Chelsea, Ali, and Carl. All of those people motivated me during the way to challenge myself and step outside the box. I wanted to keep it simple but I also wanted to add some key features that I had not been experienced with.
