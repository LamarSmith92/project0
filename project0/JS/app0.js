var playerOne = fighterJetSpeed;
var playerTwo = fighterJetLightning;


var playerOne = function($fighterJet
 ,speed){
    fighterJet
Width = $fighterJet
.width();

    $fighterJet
.animate({
        "left": "50%"
    }, speed);
};

$(function(){
    fighterJet($("#fighterJet"), 5000);

});
