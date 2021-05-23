var bancoPalavras = [
    palavras1 = [
        'casa',
        'cerveja',
        'refrigerante',
        'pastel',
        'bola',
        'bicicleta',
        'skate',
        'carro',
        'moto',
        'ônibus',
        'violão',
        'celular',
        'whatsapp',
        'fone de ouvido',
        'cama',
        'avião',
        'gato',
        'cachorro',
        'cavalo',
        'televisão',
        'água',
        'sol',
        'praia',
        'mesa',
        'cadeira',
        'prato',
        'garfo',
        'faca',
        'caneta',
        'lápis',
        'borracha',
        'vassoura',
        'boca',
        'olho',
        'nariz',
        'ouvido',
        'tênis'],
    palavras2 = [
        'sunga',
        'batata',
        'boia',
        'bexiga',
        'baú',
        'azeite',
        'açúcar',
        'andar',
        'cinema',
        'caixa',
        'sanduíche',
        'chinelo',
        'mochila',
        'chorar',
        'bala',
        'bruxa',
        'canudo',
        'cogumelo',
        'lixo',
        'boneca',
        'buzina',
        'baleia',
        'nadar',
        'dormir',
        'lua',
        'leoa',
        'lavar',
        'luva',
        'lixa',
        'leite',
        'limonada',
        'lobo',
        'ovelha',
        'urso',
        'porta',
        'sorvete',
        'caderno',
        'carteira',
        'circo',
        'elevador'],
    palavras3 = [
        'ler',
        'lagartixa',
        'vidro',
        'dançar',
        'estudar',
        'brincar',
        'amar',
        'descobrir',
        'futuro',
        'julgar',
        'digitar',
        'escutar',
        'perder',
        'guiar',
        'conduzir',
        'paciência',
        'apostar',
        'passar',
        'missão',
        'açougue',
        'esquecer',
        'voltar',
        'pulmão',
        'sozinho',
        'financiar',
        'balcão',
        'lava',
        'declaração',
        'piscina',
        'louco',
        'soldado',
        'pista',
        'dinheiro',
        'segredo',
        'fé',
        'ré',
        'contar',
        'infarto',
        'ajudar'],
    palavras4 = [
        'selmini',
        'humberto',
        'flávio',
        'vince vader',
        'life lab',
        'gamelab',
        'espm júnior',
        'marketing',
        'jacarito',
        'war vikings',
        'smooh',
        'andré',
        'surjan',
        'surian',
        'sandra'
        ]
]

var semPalavras = false

function sortearPalavra() {
    if (round < 1 || round > 4) {
        return 'round bugado!'
    }
    var palavras = bancoPalavras[round - 1]
    var i = Math.floor(Math.random() * palavras.length);
    var palavra = palavras[i];
    palavras.splice(i, 1);

    if (palavras.length == 0) {
        //acaba o round
        $("#avisos").text("As palavras deste round acabaram!")
        semPalavras = true
        return ""
    }
    return palavra;
}

function mostrarPalavra() {
    $("#palavra").text(sortearPalavra)
}

function validarPalavra() {
    if(semPalavras){
        return
    }
    if ( $("#palavra").text() == $("#palpite").val()) {
        $("#avisos").text("Correto!")
        pontos++
        $("#pontos").text(pontos)
        mostrarPalavra()

    }
    else {
        $("#avisos").text("Falso!")
        $("#pontos").text(pontos)
    }

}