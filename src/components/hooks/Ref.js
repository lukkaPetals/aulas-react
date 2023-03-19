import {useState, useEffect, useRef} from 'react'

function Ref() {
    const [count, setCount] = useState(0)
    const [numb, setNumb] = useState(0)
    const numbRef = useRef(0)

    const buttonRef = useRef()

    useEffect(() => {
        //setNumb((prevNumber) => prevNumber + 10)
        numbRef.current = Math.random()
    })

    useEffect(() => {
        console.log(buttonRef.current.click())
    }, [])
    return(
        <div>
            <h1>O número é: {numb}</h1>
            <h1>O número aleatório é {numbRef.current}</h1>
            <h1>O contador é: {count}</h1>
            <button ref={buttonRef} onClick={() => setCount((prevCount) => prevCount + 1)}>Adicionar</button>
        </div>
    )
}

export default Ref