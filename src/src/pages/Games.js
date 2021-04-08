import { useEffect, useState } from "react"
import GetAllGames from "../repositories/getGames"



function Games() {

    const [data, setData] = useState([])
    const [page, setPage] = useState(0)

    function voltarPagina() {
        page === 0 ? setPage(0) : setPage(page - 1)
    }

    function avancarPagina() {
        setPage(page + 1)
    }

    useEffect(() => {


        GetAllGames(page).then((res) => setData(res.data))

    }, [page])

    console.log(data)

    return <div className='player-content-wrapper'>

        <table className='my-table'>
            <th>Date</th>
            <th>Game</th>
            <th>Score</th>

            {data.map((game) =>{
                const myDate = game.date.split('T')[0]

                return <tr>

                <td>{myDate}</td>
                <td>{`${game.home_team.full_name} x ${game.visitor_team.full_name}`}</td>
                <td>{`${game.home_team_score} x ${game.visitor_team_score}`}</td>

                </tr>
            }
                
            )}
        </table>
        <div className='buttons'>
            <button onClick={voltarPagina}>Voltar página</button>
            <button onClick={avancarPagina}>Avançar página</button>

        </div>
    </div>

}


export default Games