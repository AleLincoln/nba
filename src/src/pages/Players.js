import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import GetAllPlayers from "../repositories/getPlayers"

function Players() {

    const [page, setPage] = useState(0)

    const [data, setData] = useState([])
    


    function voltarPagina() {
        page === 0 ? setPage(0) : setPage(page - 1)
    }

    function avancarPagina() {
        setPage(page + 1)
    }

    useEffect(() => {

        GetAllPlayers(page).then((res) => setData(
            res.data
        ))



    }, [page])




    return <div className='player-content-wrapper'>

        <table className='my-table'>
            <th>Player name</th>
            <th>Position</th>
            <th>Team</th>

            {data.map((player) =>            
                                    <tr>
                                        
                                        <td>{`${player.first_name} ${player.last_name}`}</td>
                                        <td>{player.position}</td>
                                        <td>{player.team.full_name}</td>
                                    
                                    </tr>
            )}
        </table>
        

        <div className='buttons'>
            <button onClick={voltarPagina}>Voltar página</button>
            <button onClick={avancarPagina}>Avançar página</button>

        </div>
    </div>

}

export default Players