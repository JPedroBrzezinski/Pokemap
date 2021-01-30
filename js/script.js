// função que esconde a tag "ul" do html
$('ul').hide()

// função que procura um pokemon com base no tipo
async function searchPokemon(type) {

    // usa a função "fetch()" para fazer uma requisição assíncrona
    const data = await fetch(`https://pokeapi.co/api/v2/type/${type}`)

    // converte o dado recebido para json
    const json = await data.json()

    // gera um valor aleatório entre 0 e a quantidade total de pokemons
    const max = json.pokemon.length
    const numRandom = Math.floor(Math.random() * (max - 0 + 1) + 0)

    // retorna o nome de um pokemon aleatório
    return json.pokemon[numRandom].pokemon.name
}


// função que busca o clima com base na cidade
async function searchWeather(city = 'London', key = 'f0605c78d3d0c0ef7d5694b7f89ccffe') {

    // usa a função "fetch()" para fazer uma requisição assíncrona
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)

    // converte o dado recebido para json
    const json = await data.json()

    // converte a temperatura para graus celcius
    const celcius = json.main.temp - 273

    // criei uma variável para armazenar o nome de um pokemon
    let pokemon = null


    // selecionei a tag <li> com o type "temperature" e usei a função .html() para escrever dentro dessa tag

    // função .toUpperCase() é usado para colocar uma palavra toda em maiúscula

    // função .toFixed() controla o número de casas decimais, no caso ali, coloquei como duas
    $('li[temperature]').html(`${city.toUpperCase()} Temperature: ${celcius.toFixed(2)}°C`)


    // aqui fiz uma série de comparações apenas seguindo o enunciado, lembrando que primeiro precisamos verificar se chouveu, para depois verificar as temperaturas

    // durante todas essas condicionais, eu seleciono cada tag específica de "<li>" e uso a função .html() para informar uma frase dentro dela

    // uso a função searchPokemon() em cada condicional para pegar o nome de um pokemon aleatório de um tipo específico, ice, water, fire...
    if (json.weather[0].main == 'Rain') {
        $('li[itRains]').html('Is it raining? YES!')
        
        pokemon = await searchPokemon('electric')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Electric')
        
    } else if (celcius < 5) {
        $('li[itRains]').html('Is it raining? NO!')
        
        pokemon = await searchPokemon('ice')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Ice')
        
    } else if (celcius >= 5 && celcius < 10) {
        $('li[itRains]').html('Is it raining? NO!')
        
        pokemon = await searchPokemon('water')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Water')
        
    } else if (celcius >= 12 && celcius < 15) {
        $('li[itRains]').html('Is it raining? NO!')
        
        pokemon = await searchPokemon('grass')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Grass')
        
    } else if (celcius >= 15 && celcius < 21) {
        $('li[itRains]').html('Is it raining? NO!')
        
        pokemon = await searchPokemon('ground')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Ground')
        
    } else if (celcius >= 23 && celcius < 27) {
        $('li[itRains]').html('Is it raining? NO!')
        
        pokemon = await searchPokemon('bug')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Bug')
        
    } else if (celcius >= 27 && celcius <= 33) {
        $('li[itRains]').html('Is it raining? NO!')
        
        pokemon = await searchPokemon('rock')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Rock')
        
    } else if (celcius > 33) {
        $('li[itRains]').html('Is it raining? NO!')
        
        pokemon = await searchPokemon('fire')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Fire')
        
    } else {
        $('li[itRains]').html('Is it raining? NO!')
        
        pokemon = await searchPokemon('normal')
        $('li[pokemonName]').html(`Pokemon Name: ${pokemon}`)
        $('li[pokemonType]').html('Pokemon Type: Normal')
    }
}


// aqui eu seleciono o botão com base no type e uso a função .click() do botão que tem como parâmetro o próprio evento, que eu chamo de "e" (poderia chamar de qualquer coisa)

// uso a função .preventDefault() do evento para que o evento padrão não ocorra, e eu possa alterar o que acontece depois que eu clico no botão

// em seguida faço uma condicional verificando se o campo de texto está vazio ou não no momento que o botão é clicado

// SE o campo de texto estiver vazio, eu uso a função alert() para enviar um alerta com uma mensagem pedindo para ele preencher o campo

// SE NÃO, eu executo a função searchWeather() que envia como parâmetro o que o usuário digitou na pesquisa
$('[type=submit]').click(e => {
    e.preventDefault()
    
    if ($('#pesquisaCity').val() == '') {
        alert('PLEASE FILL THE TEXT INPUT!')
    } else {
        searchWeather($('#pesquisaCity').val())

        // função fadeIn() para que as informações apareçam de forma suave, e tem como parâmetro um tempo em milissegundos, que coloquei como 1000
        $('ul').fadeIn(1000)
    }
})