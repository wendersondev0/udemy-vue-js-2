new Vue({
    el: "#desafio",
    data: {
        nome: "wenderson",
        idade: "19",
        linkImageUrl: "https://i.redd.it/fi4oa3o2w7t51.png"
    },
    methods: {
        mostrarNumeroAleatorio() {
            return Math.random();
        }
    }
})