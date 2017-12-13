

$(document).ready(function(){

	//init function 
	var randomNumber = ""
	var img1Val  = ""
	var img1Va2 = ""
	var img1Va3 = ""
	var img1Va4 = ""
	var score = 0 ; 
	var min = 10;
	var max = 100;
	var crystalMin = 1 ;
	var crystalMax = 10 ;
	var wins  = 0 ; 
	var loss = 0; 

	//start the game 
	$("#startButton").click(function(){

		randomNumber = getRandomInt(min, max);
		$("#randomNumber").val(randomNumber); 
		score = 0 ; 
		$("#score").val(score); 
		assignValueToCrystals(); 
	})

	
	//generate random number
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}

	//asign value to each crystal image 
	function assignValueToCrystals(){
		img1Val = getRandomInt (crystalMin,crystalMax); 
		console.log(img1Val);
		$("#image1").val(parseInt(img1Val));
		
		
		img2Val = getRandomInt (crystalMin,crystalMax); 
			while(img1Val===img2Val){
				img2Val = getRandomInt(crystalMin,crystalMax);
			}
		$("#image2").val(parseInt(img2Val));	
		console.log(img2Val);
		
		img3Val = getRandomInt (crystalMin,crystalMax); 
			while(img1Val===img3Val|| img2Val===img3Val){
				img3Val = getRandomInt(crystalMin,crystalMax); 
			}
		$("#image3").val(parseInt(img3Val));	
		console.log(img3Val);
		
		img4Val = getRandomInt (crystalMin,crystalMax); 
			while(img4Val === img1Val || img4Val === img2Val || img4Val === img3Val){
				img4Val = getRandomInt (crystalMin,crystalMax); 
			}
		$("#image4").val(parseInt(img4Val));	
		console.log(img4Val);	
	}


	///Calculate score on image click		
	$(".img-thumbnail").on("click", function(){
		crystalValue = $(this).val(); 
		score = parseInt(crystalValue) + parseInt(score);
		$("#score").val(score); 
		winOrLoss(score, randomNumber); 
	})

	//Decide win or loss 
	function winOrLoss(score, randomNumber){
		if (parseInt(score) === parseInt(randomNumber)){
			$("#result").val("You Win !!");
			wins = parseInt(wins) + 1;
			$("#wins").val(wins) ; 
		}

		else if (parseInt(score) > parseInt(randomNumber)){
			$("#result").val("You Loose !!");
			loss = parseInt(loss) + 1;
			$("#loss").val(loss) ; 
		}


	}


})




