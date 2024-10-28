import {userDataContext} from '../../utils/Context';
import { useContext } from 'react';
import {Navigate} from 'react-router-dom'

const WithLoggedIn = ({WrappedComponent}) => {
    const {userData, setUserData} = useContext(userDataContext);
    let expirationTime = 5 * 60 * 1000 // 5 min
    const events = [
        "load",
        "mousemove",
        "mousedown",
        "click",
        "scroll",
        "keypress",
    ];
    let timer = setLogoutTimer();
    
    
    // Logout function
    function logout() {
        events.forEach(event => {
            window.removeEventListener(event, resetLogoutTimer)
        })

        setUserData({isLoggedIn : false});
        sessionStorage.clear();
    }

    // Set the time of inactivity in milliseconds we wait before logging the user off
    // Then we return the timerId
    function setLogoutTimer() {
        events.forEach(event => {
            window.addEventListener(event, resetLogoutTimer)
        })

        return setTimeout(logout,expirationTime);
    }

    
    //reset our timer if activity is detect
    function resetLogoutTimer() {
        //clear the previous timer
        if(timer) clearTimeout(timer);

        //set the new timer
        timer = setTimeout(logout,expirationTime);
    }
    

    return userData.isLoggedIn ? <WrappedComponent/>: <Navigate to='/login' replace/>
}

export default WithLoggedIn;