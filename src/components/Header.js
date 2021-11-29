import React from 'react'
import {useMoralis} from "react-moralis";
function Header() {
    const{enableWeb3, authenticate, isAuthenticated, isWeb3Enabled,logout}=useMoralis()
    const enableAndAuthenticate = async () => {
        await enableWeb3()
        await authenticate()
    }
    return (
        <div>
            <button onClick={() => {
                if(!isWeb3Enabled || isAuthenticated ){
                    enableAndAuthenticate()
                }else{
                    logout()
                }
            }}>Enable</button>
        </div>
    )
}

export default Header
