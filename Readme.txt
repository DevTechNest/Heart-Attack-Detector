THis file is created for the initialize the git commands# Initialize Git Commands

# Sending notification with the firebase platform
  1. ESP32 as the Sender: ESP32 module will act as the sender of the notification. It will need to connect to Firebase and send the notification message.
  2.Firebase Cloud Messaging (FCM): FCM is the intermediary. It receives the notification message from ESP32 and routes it to the appropriate devices.
  3.React Native App as the Receiver: React Native app will be subscribed to receive notifications from FCM. When a notification arrives, app will handle it and display it to the user.
