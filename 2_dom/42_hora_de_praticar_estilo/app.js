new Vue({
	el: '#desafio',
	data: {
		aplicarDestaque: true,
		aplicarEncolher: false,
		aplicarOutraClasse: true,
		classeCss: "bordaQuadrada",
		styleCssColor: 'green',
		porcentagem: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.aplicarDestaque = !this.aplicarDestaque;
				this.aplicarEncolher = !this.aplicarEncolher;
			}, 1000);
		},
		iniciarProgresso() {
			setInterval(() => {
				if (this.porcentagem < 100)
					this.porcentagem++;
			}, 1000);
		}
	}
})
