// https://github.com/guto-alves/loterias-api

const lotterys = () => {
    
    const url = 'https://loteriascaixa-api.herokuapp.com/api'

    fetch(url)
    .then(response => response.json())
    .then((data) => {

        data.forEach((item) => {

            const list = document.getElementById("loterias")

            const listItem = `<li class="${item}" onclick="${item.replace(/-/g, "")}()">${item}</li>`

            list.innerHTML += listItem

            // console.log(item)

        });
        
        });
    }

lotterys()

function clearUl() {
    let ulDezenas = document.getElementById("dezenas")
    ulDezenas.innerText = ""
}

function maismilionaria() {

    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/maismilionaria/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function megasena() {

    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/megasena/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function lotofacil() {
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function quina() {
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/quina/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function lotomania() {
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/lotomania/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function timemania() {
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/timemania/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function duplasena() {
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/duplasena/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function federal() {

    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/federal/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function diadesorte() {
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/diadesorte/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}

function supersete() {
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/supersete/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.loteria
        
        const sorteio = data.concurso
        
        const date = data.data

        const title = `Resultado da ${lottery} concurso ${sorteio} (${date})`

        concurso.innerHTML = title

        result = []

        result = data.dezenas

        result.forEach((item) => {   

            const list = document.getElementById("dezenas")

            const listItem = `<li class="dezena">${item}</li>`

            list.innerHTML += listItem

        })
    })
    
}