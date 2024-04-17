import { unauthorized } from './axios'
import {LOGIN, REGISTER} from './service-routes'
import {baseURL} from "../Helper/Action";

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

interface Login {
    email: string;
    password: string;
}

export const useUserAuthService = () => {
    const postLogin = (payload: Login) => {
        return unauthorized.post(LOGIN, payload, {
            baseURL,
        })
    }

    const postRegister = (payload: Register) => {
        return unauthorized.post(REGISTER, payload, {
            baseURL,
        })
    }
    return {postLogin, postRegister}
}