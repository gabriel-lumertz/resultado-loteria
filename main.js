// https://github.com/guto-alves/loterias-api

const lotterys = () => {
    const url = 'https://loteriascaixa-api.herokuapp.com/api'

    fetch(url)
    .then(response => response.json())
    .then((data) => {

        loterias = []

        loterias.push(data)

        loterias.forEach(loteria => {
            
            const loterias = document.getElementById('loterias')
            
            let newLi = document.createElement('li')
            
            let addLottery = document.createTextNode(loteria)
            
            newLi.appendChild(addLottery)
            
            document.body.insertBefore(newLi, loterias)
        });
    })
}

lotterys()

const searchData = () => {

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

        const dezena1 = document.getElementById('dezena1')
        const dezena2 = document.getElementById('dezena2')
        const dezena3 = document.getElementById('dezena3')
        const dezena4 = document.getElementById('dezena4')
        const dezena5 = document.getElementById('dezena5')
        const dezena6 = document.getElementById('dezena6')
        
        dezena1.innerText = data.dezenas[0]
        dezena2.innerText = data.dezenas[1]
        dezena3.innerText = data.dezenas[2]
        dezena4.innerText = data.dezenas[3]
        dezena5.innerText = data.dezenas[4]
        dezena6.innerText = data.dezenas[5]

    })
}

searchData()

    