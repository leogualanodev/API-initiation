let button=document.querySelector(`.button1`)

// fetch fais la requete et renvoie une reponse => then on transform la reponse en json 

function verif(){
    let number=document.querySelector(`#cp`).value
    fetch(`https://geo.api.gouv.fr/communes?codePostal=${number}`)
    .then(response => response.json())
    .then(function(response){
        
        let p=document.querySelector(`.p`)
        p.innerHTML = ''
        for(let i=0;i<response.length;i++){
            p.innerHTML +=`commune n°${i} :${response[i].nom} <br>`
        }
        console.log(response)
        let resultats=document.querySelector(`.resultats`)
        resultats.innerHTML=`<div class="result" ><p> nom: ${response[0].nom} </p> <p> population: ${response[0].population} </p> <P> numéro siren: ${response[0].siren} </p></div> `
    })
    .catch(err => console.log(err))
}
button.addEventListener(`click`,verif);

let button1=document.querySelector(`.button2`)

function verif1(){
    let number1=document.querySelector(`#departement`).value
    fetch(`https://geo.api.gouv.fr/communes?codeDepartement=${number1}`)
    .then(response=>response.json())
    .then(function(response){
        console.log(response)
        let somme=0
        for(let i=0;i<response.length;i++){
            
            somme=somme+ response[i].population
        }
        let resultats1=document.querySelector(`.resultats1`)
        resultats1.innerHTML=`<div class="result"> <p> codeInsee : ${number1} </p> <p> Nombre de communes: ${response.length}</p> <p> Populations: ${somme}</p> <p> code de la region:${response[0].codeRegion} `

    })
    .catch(err=> console.log(err))
}
button1.addEventListener(`click`,verif1)


