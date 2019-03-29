import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'


const NOTIFICATION_KEY = 'Flashcard:notifications'

export const clearStorage = () => (
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
)

export const createNotification = {
  title: 'Hey!!!',
  body: "I'm missing you... let's play!!!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
}

export const getTomorrowDay = (day) => {
  try {
    const tomorrow = day
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(20)
    tomorrow.setMinutes(0)

    return tomorrow
  } catch (error) {
    console.log(error)
  }

  return false
}

export function setLocalNotification(tomorrow) {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (!data) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {

              const day = {
                time: tomorrow,
                repeat: 'day',
              }

              Notifications.cancelAllScheduledNotificationsAsync()

              Notifications.scheduleLocalNotificationAsync(
                createNotification, day,
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
