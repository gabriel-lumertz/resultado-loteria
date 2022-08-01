const searchData = () => {

    const url = `https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.dezenas)
        console.log(data.nome)

        const concurso = document.getElementById('concurso')

        const loteria = data.nome
        
        const sorteio = data.concurso

        const title = `Resultado do concurso ${sorteio} da ${loteria}`

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

    