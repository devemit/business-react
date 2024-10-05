import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
    const [state, setState] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/api/users').then((data) => setState(data as any));
    }, []);
    console.log(state, 'mitko');
    return <div></div>;
};

export default App;
