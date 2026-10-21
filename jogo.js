function jogar(){
tela.desenhar();
cobra.desenhar();
placar.desenhar();
cobra.mover();
requestAnimationFrame(jogar);
}
jogar();