import Button from "./evento/Button"

function Evento() {

    function meuEvento() {
        console.log(`Opa! fui ativado`)
    }

    function segundoEvento() {
        console.log('Segundo evento')
    }

    return (
        <div>
            <p>Clique para disparar os eventos</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento