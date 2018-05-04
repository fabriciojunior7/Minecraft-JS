function Chunk(){

	//Atributos
	this.entidades = [new Pedra(1, 3), new Pedra(2, 2), new Pedra(3, 3), new Pedra(1, 1), new Pedra(5, 7), new Pedra(-2, -2), new Pedra(-3, -2)];
	//this.entidades = [new Pedra(1,0)];

	//Metodos
	this.processar = function(){
		for(var i=0; i<this.entidades.length; i++){
			this.entidades[i].processar();
			this.entidades[i].desenhar();
		}
	}
	
}