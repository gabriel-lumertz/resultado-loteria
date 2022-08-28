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

            console.log(item)

        });
        
        });
    }

lotterys()

function megasena() {

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas")
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas");
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas");
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/quina/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas");
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/lotomania/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas");
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/timemania/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas");
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/dupla-sena/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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

function loteriafederal() {

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas");
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/loteria-federal/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas");
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/dia-de-sorte/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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

    function clearUl() {
        let ulDezenas = document.getElementById("dezenas");
        ulDezenas.innerText = ""
    }
    
    clearUl()

    const url = `https://loteriascaixa-api.herokuapp.com/api/super-sete/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {

        const concurso = document.getElementById('concurso')

        const lottery = data.nome
        
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