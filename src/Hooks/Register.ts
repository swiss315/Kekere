import {useUserAuthService} from "../Services/authservices";
import {useState} from "react";
import {useAuth} from "../Store/AuthContext";
import {useToast} from "../Store/NotificationContext";

interface Register {
    name: string;
    email: string;
    password: string;
    re_password: string;
    bvn: string;
    phone: string;
    first_name: string;
    last_name: string;
}

export const useRegister = () => {
    const {dispatchLogin} =useAuth()
    const {postRegister} = useUserAuthService()
    const { showToast } = useToast();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const register = async (payload: Register) => {
        if (isLoading) {
            return false;
        }

        let userResponse = null;
        setIsLoading(true)

        try {
            const response = await postRegister(payload);
            console.log(response);
            userResponse = response?.data?.data;
            if (userResponse) {
                const { token } = userResponse;
                dispatchLogin(token)
                showToast('Success', 'This is a success toast notification', 'success');
            }


        } catch (e: any) {
            console.log(e)
            setError(e)
            showToast('Error', 'This is a success toast notification', 'success');

        } finally {
            setIsLoading(false);
        }

        return userResponse;
    };

    return {
        register,
        isLoading,
        error
    }
}