

export default async function GetAllPlayers(page) {

    return fetch(`https://free-nba.p.rapidapi.com/players?page=${page}&per_page=25`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "33cd485aadmsh62859b94204132dp1440e2jsn50866576c294",
            "x-rapidapi-host": "free-nba.p.rapidapi.com"
        }
    })
    .then(async (res) =>{

        return res.ok && res.json()

    })
}