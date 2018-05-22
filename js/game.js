var level = prompt('choose level - easy, medium, hard');
switch(level){
	case 'easy':
		var result;
		do{
			result = +prompt('Guess number from 1 - 9');
			random = Math.round(Math.random()*9+1);
			console.log(random);
		} while(result !== random);
		break;
	case 'medium':
		var result;
		var count = 5;
		do{
			random = Math.round(Math.random()*9+1);
			result = +prompt('Guess number from 1 - 9');
			if(result == random){
				alert('you win!');
			}
			count--;
			alert(count+ 'tries left');
		} while(result !== random && count !== 0);
		if(count == 0){
			alert('you looooooose!!!!');
		}
		break;
	case 'hard':
		var result;
		var count = 2;
		do{
			result = prompt('Guess a rainbow color (red/orange/yellow/green/light-blue/blue/purple)');
		 	arr3 = ['red', 'orange', 'yellow', 'green', 'light-blue', 'blue', 'purple'];
		 	arr3[r];
		 	var r = Math.round(Math.random()*7+1);
		 		if(result == arr3[r]){
		 		alert('You win!');
				}
			count--;
			alert(count+' tries left');
		} while(result !== arr3[r] && count !== 0);
		if(count == 0){
			alert('you looooooose!!!!');
		}
		break;
	default:
		alert('incorrect data');
}