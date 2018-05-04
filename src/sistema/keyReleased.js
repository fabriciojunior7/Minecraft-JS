function keyReleased(){
	//print(keyCode);

	//Eixo X
	if(keyCode == 65){
		wasd[1] = false;
	}
	else if(keyCode == 68){
		wasd[3] = false;
	}

	//Eixo Y
	if(keyCode == 87){
		wasd[0] = false;
	}
	else if(keyCode == 83){
		wasd[2] = false;
	}

}