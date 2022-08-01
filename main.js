console.log('funcionou')

const consurso = document.getElementById('concurso')

console.log(consurso)

const pegar = () => {

    const url = `https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest`
    fetch(url)
    .then(response => response.json())
    .then(consurso => {
        console.log(consurso.dezenas)

        const dezena1 = document.getElementById('dezena1')
        const dezena2 = document.getElementById('dezena2')
        const dezena3 = document.getElementById('dezena3')
        const dezena4 = document.getElementById('dezena4')
        const dezena5 = document.getElementById('dezena5')
        const dezena6 = document.getElementById('dezena6')
        
        dezena1.innerText = consurso.dezenas[0]
        dezena2.innerText = consurso.dezenas[1]
        dezena3.innerText = consurso.dezenas[2]
        dezena4.innerText = consurso.dezenas[3]
        dezena5.innerText = consurso.dezenas[4]
        dezena6.innerText = consurso.dezenas[5]

    })
}

pegar()

    