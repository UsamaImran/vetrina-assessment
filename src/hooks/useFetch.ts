import { useEffect, useState } from 'react'
import useSWR from 'swr'

//only for fetch
export const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true)
    const { data, error } = useSWR(url, (...args) =>
        fetch(...args).then((res) => res.json())
    )

    useEffect(() => {
        if (!!data) setLoading(false)
    }, [data])

    return { data, error, loading }
}
