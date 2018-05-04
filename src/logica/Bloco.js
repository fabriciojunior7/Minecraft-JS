function Bloco(posX, posY, fisica){
	
	//Atributos
	Entidade.call(this, posX*base, posY*base, base, base);
	this.posX = posX;
	this.posY = posY;
	this.fisica = fisica;

	//Metodos
	this.desenhar = function(){
		stroke(255, 0, 0);
		strokeWeight(5);
		fill(this.cor);
		rect(this.x, this.y, this.largura, this.altura);
	}

	this.colisao = function(entidade){
		hit = collideRectRect(this.x, this.y, this.largura, this.altura, entidade.x, entidade.y, entidade.largura, entidade.altura);
		if(hit){
			
			distX = abs((this.x+this.largura/2) - (entidade.x+entidade.largura/2));
			distY = abs((this.y+this.altura/2) - (entidade.y+entidade.altura/2));
			tamanhoH = (this.largura/2) + (entidade.largura/2);
			tamanhoV = (this.altura/2) + (entidade.altura/2);

			if(distX < tamanhoH && entidade.x < this.x){
				entidade.empurrar("direita", this);
			}
			else if(distX < tamanhoH && entidade.x > this.x){
				entidade.empurrar("esquerda", this);
			}

			 if(distY < tamanhoV && entidade.y < this.y){
				entidade.empurrar("cima", this);
			}
			else if(distY < tamanhoV && entidade.y > this.y){
				entidade.empurrar("baixo", this);
			}

		}
	}
	

}