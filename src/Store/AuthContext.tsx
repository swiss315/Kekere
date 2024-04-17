import React, { createContext, useContext, useEffect, useReducer } from 'react';

interface AuthState {
    token: string | null;
    user: string | null;
}
type Action = { type: 'LOGIN'; payload: string } | { type: 'LOGOUT' };

const initialState: AuthState = {
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || null
};

const authReducer = (state: AuthState, action: Action): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('token', action.payload);
            return { ...state, token: action.payload };
        case 'LOGOUT':
            localStorage.removeItem('token');
            return { ...state, token: null };
        default:
            return state;
    }
};

const AuthContext = createContext<{ state: AuthState; dispatchLogin: (token: string) => void; logout: () => void }>({
    state: initialState,
    dispatchLogin: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<{children: any}> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch({ type: 'LOGIN', payload: token });
        }
    }, []);

    const dispatchlogin = (token: string) => {
        dispatch({ type: 'LOGIN', payload: token });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ state, dispatchLogin: dispatchlogin, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
