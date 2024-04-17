import React, { createContext, useState, useContext, FC } from 'react';
import Toast from "../Components/Notification/Notification";

interface ToastContextType {
    showToast: (title: string, message: string, type: 'success' | 'error' | 'pending') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider:FC<{children: any}> = ({ children }) => {
    const [toast, setToast] = useState<{ title: string; message: string; type: 'success' | 'error' | 'pending' } | null>(
        null
    );

    const showToast = (title: string, message: string, type: 'success' | 'error' | 'pending') => {
        setToast({ title, message, type });
        setTimeout(() => {
            setToast(null);
        }, 5000); // Hide toast after 5 seconds
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && <Toast title={toast.title} message={toast.message} type={toast.type} />}
        </ToastContext.Provider>
    );
};
