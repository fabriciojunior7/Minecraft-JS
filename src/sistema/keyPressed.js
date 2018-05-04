function keyPressed(){
	//print(keyCode);

	//Eixo X
	if(keyCode == 65){
		wasd[1] = true;
	}
	else if(keyCode == 68){
		wasd[3] = true;
	}

	//Eixo Y
	if(keyCode == 87){
		wasd[0] = true;
	}
	else if(keyCode == 83){
		wasd[2] = true;
	}

}