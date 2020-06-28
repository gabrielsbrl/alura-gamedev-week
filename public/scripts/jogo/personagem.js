class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.yInicial = height - this.altura - variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 3;

        this.quantidadePulo = 0;
    }

    pula() {
        this.velocidadeDoPulo = -30;
        this.quantidadePulo++;
    }

    podePular() {
        return this.quantidadePulo < 2;
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.velocidadeDoPulo = 0;
            this.quantidadePulo = 0;
        }
    }

    estaColidindo(inimigo) {
        const precisao = .7
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
        );

        return colisao;
    }

}