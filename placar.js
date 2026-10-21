const placar = {
largura:800,
altura:60,
corFundo:"black",
corTexto:"white",
pontuação:0,
desenhar(){
    canvasCtx.fillStyle=this.corFundo;
    canvasCtx.fillRect(0,0,this.largura,this.altura)
    canvasCtx.fillStyle=this.corTexto;
    canvasCtx.font = '18px Fantasy';
    canvasCtx.textAlign = 'center';
    canvasCtx.textBaseline = 'middle';
    canvasCtx.fillText("JOGO COBRA",400,30);
    canvasCtx.font = '12px Fantasy';
    canvasCtx.textAlign = 'left';
    canvasCtx,textBaseline = "top";
    canvasCtx.fillText(this.pontuação + 'pontos',10,40);
    }




}
