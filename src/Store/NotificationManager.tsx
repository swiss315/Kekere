import React, {useState} from 'react';

function NotificationManager() {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (notification: Notification) => {
        setNotifications(notifications.concat(notification));
    };



    return {
        notifications,
        addNotification,
    };
}

