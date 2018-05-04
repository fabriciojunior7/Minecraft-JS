function setup(){
	tela = createCanvas(640, 480);
	tela.position(windowWidth/2 - 320, windowHeight/2 - 240);
	frameRate(fps);

	player = new Player();
	chunk = new Chunk();
}