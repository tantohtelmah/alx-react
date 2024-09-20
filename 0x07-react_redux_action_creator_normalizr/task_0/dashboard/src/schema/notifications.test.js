
import { getAllNotificationsByUser } from './path-to-your-function';
import * as notifications from './notifications.json';

test('getAllNotificationsByUser returns correct notifications for user id 5debd764a7c57c7839d722e9', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedNotifications = notifications.default.filter(notification => notification.author.id === userId);
    const result = getAllNotificationsByUser(userId);
    expect(result).toEqual(expectedNotifications);
});
