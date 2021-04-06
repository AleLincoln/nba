import { useEffect, useState } from "react"
import GetAllTeams from "../repositories/getTeams"

function Teams(){

    const [data, setData] = useState([])

    useEffect(() => {

       GetAllTeams().then((res) => setData(res.data))
    }, [])

    console.log(data.length)
    

    return <div>

            {
                data.map((team) => <div>
                    <h3>{team.full_name}</h3>
                </div>)
            }
        
    </div>



}

export default Teams