function Player(){
	
	//Atributos
	//Entidade.call(this, 320-12, 240-25, 25, 50);
	Entidade.call(this, 320-12, 240-25, base-10, base-10);
	this.velocidade = 2;

	//Metodos
	this.empurrar = function(direcao, entidade){
		if(direcao == "direita" && wasd[3]){
			cameraX += this.velocidade;
			print("direita");
		}
		else if(direcao == "esquerda" && wasd[1]){
			cameraX -= this.velocidade;
			print("esquerda");
		}
		else if(direcao == "cima" && wasd[2]){
			cameraY += this.velocidade;
			print("cima");
		}
		else if(direcao == "baixo" && wasd[0]){
			cameraY -= this.velocidade;
			print("baixo");
		}
	}

}