import * as notifications from './notifications.json';
import { schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
    return notifications.default.filter(notification => notification.author.id === userId);
}

// Define the user entity
const user = new schema.Entity('users');

// Define the message entity
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define the notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export { user, message, notification };
