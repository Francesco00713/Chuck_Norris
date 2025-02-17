let btn = document.querySelector("#hitMe")
let url = "https://api.chucknorris.io/jokes/random"
let risorsa

let categoria = document.querySelector("#menu")
categoria.addEventListener("change", function() {
    switch(categoria.value){
        case "nessuna": 
            url = "https://api.chucknorris.io/jokes/random"
            break;
        case "animal":
            url = "https://api.chucknorris.io/jokes/random?category=animal";
            break;
        case "carrer":
            url = "https://api.chucknorris.io/jokes/random?category=career";;
            break;
        case "celebrity":
            url = "https://api.chucknorris.io/jokes/random?category=celebrity";;
            break;
        case "dev":
            url = "https://api.chucknorris.io/jokes/random?category=dev";;
            break;
        case "explicit":
            url = "https://api.chucknorris.io/jokes/random?category=explicit";;
            break;
        case "fashion":
            url = "https://api.chucknorris.io/jokes/random?category=fashion";;
            break;
        case "food":
            url = "https://api.chucknorris.io/jokes/random?category=food";;
            break;
        case "history":
            url = "https://api.chucknorris.io/jokes/random?category=history";;
            break;
        case "money":
            url = "https://api.chucknorris.io/jokes/random?category=money";;
            break;
        case "movie":
            url = "https://api.chucknorris.io/jokes/random?category=movie";;
            break;
        case "music":
            url = "https://api.chucknorris.io/jokes/random?category=music";;
            break;
        case "political":
            url = "https://api.chucknorris.io/jokes/random?category=political";;
            break;
        case "religion":
            url = "https://api.chucknorris.io/jokes/random?category=religion";;
            break;
        case "science":
            url = "https://api.chucknorris.io/jokes/random?category=science";;
            break;
        case "sport":
            url = "https://api.chucknorris.io/jokes/random?category=sport";;
            break;
        case "travel":
            url = "https://api.chucknorris.io/jokes/random?category=travel";;
            break;
    }
})
    
btn.addEventListener("click", function (e) {
    e.preventDefault()
    risorsa = fetch(url).then(
        function (resp) {
            console.log(risorsa)
            console.log(resp)
            return resp.json()
        }
    ).then(
        function (data) {
            footer = document.querySelector("#footer").innerHTML = data.value;
        }
    ).catch(
        function (err) {
            console.log(err)
        }
    )
    console.log(risorsa)
})