function mover(){
	
	//Eixo X
	if(wasd[1]){
		cameraX += player.velocidade;
	}
	else if(wasd[3]){
		cameraX -= player.velocidade;
	}

	//Eixo Y
	if(wasd[0]){
		cameraY += player.velocidade;
	}
	else if(wasd[2]){
		cameraY -= player.velocidade;
	}

}