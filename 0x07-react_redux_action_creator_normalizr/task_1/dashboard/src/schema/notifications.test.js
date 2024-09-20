
import { getAllNotificationsByUser } from './path-to-your-function';
import * as notifications from './notifications.json';
import { normalize } from 'normalizr';
import { notification } from './notifications';

test('getAllNotificationsByUser returns correct notifications for user id 5debd764a7c57c7839d722e9', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedNotifications = notifications.default.filter(notification => notification.author.id === userId);
    const result = getAllNotificationsByUser(userId);
    expect(result).toEqual(expectedNotifications);
});
test('normalized data has correct result array', () => {
    const normalizedData = normalize(notificationsData, [notification]);
    const expectedResult = notificationsData.map(notification => notification.id);
    expect(normalizedData.result).toEqual(expect.arrayContaining(expectedResult));
  });
