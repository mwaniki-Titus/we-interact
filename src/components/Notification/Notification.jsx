import React, { useState } from 'react';
import xicon from '../../assets/close.close.png';
import './Notification.scss';
import { useGetNotificationQuery } from '../../features/notifications/notificationApi';
import NotificationItem from './NotificationItem';

const Notification = ({ onClick }) => {
  const loggedInUserNotification = JSON.parse(localStorage.getItem('loggedInUser'));
  const UserID = loggedInUserNotification.user.UserID;
  const { data: Notifications } = useGetNotificationQuery(UserID);
  const notifications = Notifications || [];
  const [closeNotifications, setCloseNotifications] = useState(false);

  const handleNotificationsClick = () => {
    console.log('Close button clicked'); // Debugging
    setCloseNotifications(true);
  };

  console.log('Close notifications:', closeNotifications); // Debugging

  return (
    <div className={`bigmain ${closeNotifications ? 'hide' : ''}`}>
      <div className="notification">
        <div className="topNotification">
          <h4>Notification</h4>
          <button onClick={handleNotificationsClick}>
            <img src={xicon} alt="Close Icon" />
          </button>
        </div>
        <div className="allnote">
          <button type="button">All Notification</button>
          <button type="button">Unread</button>
        </div>
        <div className="day">
          <h4>Today</h4>
        </div>
        <div className='TodayNotification'>
          <div className="people">
            {notifications.map((notification, index) => (
              <NotificationItem key={index} notification={notification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;



