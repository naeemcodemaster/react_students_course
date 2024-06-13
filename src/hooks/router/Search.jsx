import React from 'react'
import {useLocation, useNavigate, useSearchParams } from 'react-router-dom'
function Search() {

    // to get search query params
    const [searchParams, setSearchParams] = useSearchParams();
    const username = searchParams.get('username');
    const address = searchParams.get('address');

    // for redirection
    const navigate = useNavigate();

    const myfun = () => {
        if(1 == 1){
            navigate('/about');
        }else{
            navigate('/contact')
        }
    }




    // use Location hook
    const location = useLocation();
    console.log("Use Location hook ",location);

    return (
        <>
            <div>Search Result for : {username} {address} </div>

            <button onClick={() => setSearchParams({ username: 'ubaid', address: 'karachi' })}>Get Search Data</button>

            <input type='text' placeholder='Search...' onChange={(e)=>setSearchParams({username:e.target.value,address:'Islambad'})}/>

            <button onClick={() => navigate('/contact')}>Go to Contact Page</button>

            <button onClick={()=>myfun()}>Login</button>
        </>
    )
}


export default Search