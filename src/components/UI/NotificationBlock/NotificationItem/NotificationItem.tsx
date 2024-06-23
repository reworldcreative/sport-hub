import { FC, memo } from "react";
import "./NotificationItem.scss";

export interface notificationType {
  name: string;
  title: string;
  type: string;
  reviewed: boolean;
}

interface NotificationItemProps {
  notification: notificationType;
  reviewed: (updatedNotification: notificationType) => void;
}

const NotificationItem: FC<NotificationItemProps> = memo(({ notification, reviewed }) => {
  const setReviewedHandle = () => {
    reviewed(notification);
  };

  return (
    <li className="notification-item" onClick={setReviewedHandle}>
      <p className="notification-item__name title">{notification.name}</p>
      <p className="notification-item__type text-label">{notification.type}</p>
      <p className="notification-item__text text">{notification.title}</p>
      {!notification.reviewed && <span className="notification-item__badge" />}
    </li>
  );
});

export default NotificationItem;
