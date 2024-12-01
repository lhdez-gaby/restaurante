import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const { results } = await res.json()

        if (!res.ok) {
          throw new Error(results)
        }

        setData(results)
        setLoading(false)

      } catch (error) {
        setLoading(false)
        setError(error.message)

      }
    }
    fetchData()
  }, [url])

  return {data, loading, error}

}

export default useFetchData