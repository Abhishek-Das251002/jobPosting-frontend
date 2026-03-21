import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    function fetchData(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setLoading(false)
            setData(data)
        })
        .catch((err) => setError(err))
    }

    useEffect(() => {
        fetchData()
    },[url])

    return {data, loading, error, refetch: fetchData}
}

export default useFetch;