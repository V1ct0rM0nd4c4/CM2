function consultar(){
    fetch("https://digimon-api.vercel.app/api/digimon").then((resp) =>{
        return resp.json()
    }).then((data)=>{
        console.log(data)
    })
}



$(document).ready(function(){
    consultar();
})