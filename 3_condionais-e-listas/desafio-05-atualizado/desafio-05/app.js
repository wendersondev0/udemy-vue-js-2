new Vue({
	el: '#desafio',
	data: {
		mostrar: true,
		anos: [2022, 2021, 2020, 2019, 2018],
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	},
	methods: {
		isArray(variavel) {
			return typeof variavel === "object"
		}
	}
});
