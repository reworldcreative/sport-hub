import { FC, useState, useEffect, useRef, useCallback } from "react";
import "./NotificationBlock.scss";
import { ReactComponent as NotificationIcon } from "@icons/notification.svg";
import NotificationItem, { notificationType } from "./NotificationItem/NotificationItem";

const NotificationBlock: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const notificationsListRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const [side, setSide] = useState<"left" | "center">("center");
  const [notifications, setNotifications] = useState<notificationType[]>([
    {
      name: "Eleanor Pena",
      title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...",
      type: "add new video",
      reviewed: false,
    },
    {
      name: "Eleanor Pena",
      title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...",
      type: "add new video",
      reviewed: false,
    },
    {
      name: "Eleanor Pena",
      title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...",
      type: "add new video",
      reviewed: false,
    },
  ]);

  const toggleNotification = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const containerRect = notificationsListRef.current ? notificationsListRef.current.getBoundingClientRect() : null;

    containerRect && containerRect.right + 20 > screenWidth ? setSide("left") : setSide("center");
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const reviewItem = useCallback((updatedNotification: notificationType) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification === updatedNotification ? { ...notification, reviewed: true } : notification
      )
    );
  }, []);

  return (
    <div className={`notification`} ref={notificationsRef}>
      <div className="notification__container" onClick={toggleNotification}>
        <NotificationIcon className="notification__icon" width="24" height="24" />

        {notifications.filter((notification) => !notification.reviewed).length > 0 && (
          <div className="small-text notification__block">
            {notifications.filter((notification) => !notification.reviewed).length}
          </div>
        )}
      </div>

      {notifications.length > 0 && (
        <div className={`notification__wrapper ${side ?? ""} ${isOpen ? "active" : ""}`} ref={notificationsListRef}>
          <ul className={`notification__list`}>
            {notifications.map((notification, index) => (
              <NotificationItem key={index} notification={notification} reviewed={reviewItem} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationBlock;
