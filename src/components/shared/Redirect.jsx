import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ to, ssr }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (ssr) {
            window.location.pathname = to;
        } else {
            navigate(to);
        }
    }, [navigate, to, ssr]);

    return null;
}

export default Redirect;