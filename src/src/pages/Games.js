import { useEffect, useState } from "react"
import GetAllGames from "../repositories/getGames"



function Games(){

    const [data, setData] = useState([])

    useEffect(() => {


        GetAllGames().then((res) => setData(res.data))

    }, [])

    console.log(data)

    return <div>
        Alguma coisa
    </div>

}


export default Games