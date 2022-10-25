export const categoriesRequest = async () => {
  const categoriesResp = await fetch('http://localhost:4000/api/categories');
  const categoriesJSON = await categoriesResp.json();

  return categoriesJSON.categories;
}

export const notificationsRequest = async () => {
  const notificationsResp = await fetch('http://localhost:4000/api/notifications');
  const notificationsJSON = await notificationsResp.json();

  return notificationsJSON.notifications;
}

export const createNotificationRequest = async ( data ) => {
  const createNotificationResp = await fetch(
    'http://localhost:4000/api/notifications',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( data ),
    }
  );
  const createNotificationJSON = await createNotificationResp.json();

  return createNotificationJSON;
}
