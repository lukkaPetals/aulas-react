function Effect() {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState()
    //1- toda vez que for renderizado
    useEffect(() => {
      console.log('Roda a cada renderização')
    })
    //toda vez que o count mudar
    useEffect(() => {
      console.log("Só quando incrementar o valor")
    }, [count])
    //executa apenas uma vez
    useEffect(() => {
      console.log('Só executa uma vez')
    }, [])
    //limpa memória

    useEffect(() => {
      const timer = setTimeout(() => {
        console.log(`O incrmentador foi alterado ${count} vezes`)
      }, 2000)

      return () => {
        clearTimeout(timer)
      }
    }, [count])

    //fetch com useEffect
    useEffect(() => {
      fetch("https://api.github.com/users/matheusbattisti ")
        .then((res) => res.json())
        .then((json) => setUser(json))
    }, [])
}