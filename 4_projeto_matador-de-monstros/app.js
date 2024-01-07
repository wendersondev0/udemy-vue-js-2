new Vue({
    el: '#projeto',
    data: {
        jogoIniciado: false,
        jogador: {
            vida: 100
        },
        monstro: {
            vida: 100
        },
        historico: []
    },
    methods: {
        ataqueJogador(especial) {
            if (especial) {
                var vidaAtaqueJogador = Math.floor(Math.random() * (16) + 5);
                this.monstro.vida -= vidaAtaqueJogador;
                var itemHistoricoDeAtaqueJogadorEspecial = { corHistoricoAtaque: "historico-cor-jogador", mensagem: `JOGADOR ATINGIU MONSTRO COM ${vidaAtaqueJogador}.` };
                this.historico.unshift(itemHistoricoDeAtaqueJogadorEspecial);
            } else {
                var vidaAtaqueJogador = Math.floor(Math.random() * 6);
                this.monstro.vida -= vidaAtaqueJogador;
                var itemHistoricoDeAtaqueJogador = { corHistoricoAtaque: "historico-cor-jogador", mensagem: `JOGADOR ATINGIU MONSTRO COM ${vidaAtaqueJogador}.` };
                this.historico.unshift(itemHistoricoDeAtaqueJogador);
            }
        },
        ataqueMonstro() {
            var vidaAtaqueMonstro = Math.floor(Math.random() * (6) + 5);
            this.jogador.vida -= vidaAtaqueMonstro;
            var itemHistoricoDeAtaqueMonstro = { corHistoricoAtaque: "historico-cor-monstro", mensagem: `MONSTRO ATINGIU JOGADOR COM ${vidaAtaqueMonstro}.` };
            this.historico.unshift(itemHistoricoDeAtaqueMonstro);
        },
        iniciarNovoJogo() {
            this.jogoIniciado = false;
            this.jogador.vida = 100;
            this.monstro.vida = 100;
            this.historico = new Array();
        },
        atacar(especial) {
            this.ataqueJogador(especial);
            this.ataqueMonstro();
        },
        curar() {
            var cura = Math.floor(Math.random() * (6) + 5);
            var vidaAnterior = this.jogador.vida;
            this.jogador.vida += cura;
            if (this.jogador.vida >= 100) {
                this.jogador.vida = 100;
                cura = cura - (vidaAnterior + cura - 100);
                var itemHistoricoDeCuraJogador = { corHistoricoAtaque: "historico-cor-jogador", mensagem: `JOGADOR CUROU ${cura}.` };
                this.historico.unshift(itemHistoricoDeCuraJogador);
            } else {
                var itemHistoricoDeCuraJogador = { corHistoricoAtaque: "historico-cor-jogador", mensagem: `JOGADOR CUROU ${cura}.` };
                this.historico.unshift(itemHistoricoDeCuraJogador);
            }
            this.ataqueMonstro();
        }
    },
    computed: {
        barraJogadorClassCor() {
            return (this.jogador.vida > 20) ? 'vida-alta' : 'vida-baixa';
        },
        barraMonstroClassCor() {
            return (this.monstro.vida > 20) ? 'vida-alta' : 'vida-baixa';
        },
        vitoria() {
            if (this.monstro.vida <= 0) {
                this.iniciarNovoJogo();
                return true;
            }
            return false;
        },
        derrota() {
            if (this.jogador.vida <= 0) {
                this.iniciarNovoJogo();
                return true;
            }
            return false;
        }
    }
});
