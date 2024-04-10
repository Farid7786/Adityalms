import {useSelector} from 'react-redux';
import {Outlet,Navigate} from 'react-router-dom';
function PrivateRoutes() {
  const {newUser} = ((state)=>state.user);
  return newUser ? <Outlet/> : <Navigate to='/signintype'/>
}

export default PrivateRoutes
