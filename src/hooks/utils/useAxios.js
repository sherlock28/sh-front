import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        setLoading(true);

        let config = {
            method: method,
            url: url,
            headers: JSON.parse(headers),
            data: JSON.parse(body)
        }

        axios(config)
            .then((res) => {
                setResponse(res?.data);;
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};
