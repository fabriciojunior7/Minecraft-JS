function Entidade(x, y, largura, altura){
	
	//Atributos
	this.x = x;
	this.y = y;
	this.posX = 0;
	this.posY = 0;
	this.largura = largura;
	this.altura = altura;
	this.cor = color(0, 0, 0);

	//Metodos
	this.desenhar = function(){
		noStroke();
		fill(this.cor);
		rect(this.x, this.y, this.largura, this.altura);
	}

	this.processar = function(){
		this.x = cameraX+this.posX*base;
		this.y = cameraY+this.posY*base;
		if(this.fisica){
			this.colisao(player);
		}
	}

	this.vibrar = function(){
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	}

}