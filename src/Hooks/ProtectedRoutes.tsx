import { Navigate, Outlet } from 'react-router-dom'
import {useAuth} from "../Store/AuthContext";


export const ProtectedRoutes = () => {
    const { state } = useAuth();
    return (
        state.token ? <Outlet/> : <Navigate to='/login'/>
    )
}