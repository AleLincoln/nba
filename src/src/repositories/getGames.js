

async function GetAllGames(){


    return fetch("https://free-nba.p.rapidapi.com/games", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "33cd485aadmsh62859b94204132dp1440e2jsn50866576c294",
            "x-rapidapi-host": "free-nba.p.rapidapi.com"
        }
    })
    .then( async (res) => res.ok && res.json())

}

export default GetAllGames