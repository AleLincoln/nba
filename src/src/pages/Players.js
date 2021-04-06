import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import GetAllPlayers from "../repositories/getPlayers"

function Players() {

    const [page, setPage] = useState(0)

    const [data, setData] = useState([])

    const [isPopupCalled, setIsPopupCalled] = useState(false)
    


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


    function PlayerPopup(){

        const routedPlayer = useLocation().search.replace('?player=', '')

        const selectedPlayer = data.length > 0 && data.find((item) => item.id === Number(routedPlayer))
        
        console.log(selectedPlayer)

        return <div className='player-popup'>
            <h3>{`${selectedPlayer.first_name} ${selectedPlayer.last_name}`}</h3>
            <p>{`Team: ${selectedPlayer.team.full_name}`}</p>
            {selectedPlayer.position.length > 0 && <h4>{`Position: ${selectedPlayer.position}`}</h4>}
            <Link to='/players' onClick={() => setIsPopupCalled(false)}>
                fechar
            </Link>
        </div>
    }





    return <div className='player-content-wrapper'>

        {isPopupCalled && <PlayerPopup />}

        {data.map((item) => <div className='player-div'>
            <Link to={`?player=${item.id}`} onClick={() => setIsPopupCalled(true)}>{`${item.first_name} ${item.last_name}`}</Link>
        </div>)}

        <div className='buttons'>
            <button onClick={voltarPagina}>Voltar página</button>
            <button onClick={avancarPagina}>Avançar página</button>

        </div>
    </div>

}

export default Players