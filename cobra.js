const cobra = {
x:400,
y:260,
cor:"red",
tamanho:10,
direcao:"direita",
vida:3,
desenhar(){
    canvasCtx.fillStyle=this.cor;
    canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
},
mover(){
    if(this.direcao == 'direita') this.x++;
    if(this.direcao == 'esquerda')this.x--;
    if(this.direcao == 'baixo')this.y++;
    if(this.direcao == 'cima')this.y--;
}


}
