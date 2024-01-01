new Vue({
    el: "#desafio",
    data: {
        valor: ""
    },
    methods: {
        showAlert() {
            alert("exibindo alerta");
        },
        storeKeyValue(event) {
            this.valor = event.target.value;
        },
        storeEnterKeyValue(event) {
            this.valor = event.target.value;
        }
    }
})