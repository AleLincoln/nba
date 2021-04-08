import { useEffect, useState } from "react"
import GetAllTeams from "../repositories/getTeams"

function Teams() {

    const [data, setData] = useState([])

    useEffect(() => {

        GetAllTeams().then((res) => setData(res.data))
    }, [])

    console.log(data.length)


    return <div className='player-content-wrapper'>

    <table className='my-table'>
        <th>Abbreviation</th>
        <th>Team Name</th>
        <th>Conference</th>
        <th>Division</th>

        {data.map((team) =>
            <tr>

                <td>{team.abbreviation}</td>
                <td>{team.full_name}</td>
                <td>{team.conference}</td>
                <td>{team.division}</td>

            </tr>
        )}
    </table>

    </div>
    
    



}

export default Teams