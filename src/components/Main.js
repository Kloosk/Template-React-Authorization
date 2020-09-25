import React from 'react';
import { useHistory } from "react-router-dom";
import auth from '../auth/Auth'

const Main = () => {
    const history = useHistory();
    const handleClick = () =>{
        auth.login(() => {
            history.push("/protected");
        });
    };
    return (
       <main>
           <h1>Main</h1>
           <button onClick={handleClick}>Go to protected</button>
       </main>
    );
};

export default Main;