//variaveis
var canvas, ctx, altura, largura, frames = 0, maxP = 3,

chao = {
    y: 550,
    altura: 50,
    cor: "#ffdf70",
    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(0, this.y, largura, this.altura);
    }
}, 

bloco = {
    x: 50,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "#ff4e4e",
    gravidade: 1.5,
    velocidade: 0,
    fcdp: 15,
    quantP: 0,
    atualiza: function() {
        this.velocidade += this.gravidade;
        this.y += this.velocidade
        if(this.y > chao.y - this.altura) {

            this.y = chao.y - this.altura;
            this.quantP = 0;
        }
    },
    pula: function() {
        if (this.quantP< maxP) {
            this.velocidade = -this.fcdp;
            this.quantP++;
        }
    },
    desenha:function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.altura, this.largura);
    }
},

obstaculos = {
    _obs: [],
    cores: ["#ffbc1c","#ff1c1c","#ff85e1","#52a7ff","#78ff5d"],

    insere: function() {
        this._obs.push({
            x: 200,
            largura: 30+Math.floor(21*Math.random()),
            altura: 30 + Math.floor(120*Math.random()),
            cor: this.cores[Math.floor(5*Math.random())]
        });
    },
    atualiza: function () {

    },
    desenha: function() {
        for(var i = 0, tam = this._obs.lengh; i < tam; i++) {
            var obs = this._obs[i];
            ctx.fillStyle = obs.cor;
            ctx.fillRect(obs.x, chao.y-obs.altura, obs.largura, obs.altura);
        }
    }
};


function clique(event) {
    bloco.pula();
}

function main() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    if(largura>=500) {
        largura = 600;
        altura = 600;
    }

    canvas = document.createElement("canvas");
    canvas.width = largura;
    canvas.height = altura;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    document.addEventListener("mousedown", clique);

    roda();

}

function roda() {
    atualiza();
    desenha();


    window.requestAnimationFrame(roda);
}


function atualiza() {
    frames++;
    bloco.atualiza();
    
}

function desenha() {
    ctx.fillStyle = "#50beff"
    ctx.fillRect(0,0,largura, altura)

    chao.desenha();
    obstaculos.desenha();
    bloco.desenha();
}

//começa o jg
main();