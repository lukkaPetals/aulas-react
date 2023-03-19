import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ford" ano={2020}/> 
                <Item/>
            </ul>
        </>
    )
}

export default List