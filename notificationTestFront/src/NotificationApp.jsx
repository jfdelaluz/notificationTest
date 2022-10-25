import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { categoriesRequest, createNotificationRequest, notificationsRequest } from './services/HttpRequests';

const categories = await categoriesRequest();
const log = await notificationsRequest();

export const NotificationApp = () => {

  const [ formState, setFormState ] = useState({
    category: 'sports',
    notificationContent: '',
  });

  const [ notificationsLog, setNotificationsLog ] = useState( log );

  const onCategoryChanged = ({ target }) => {
    const { value } = target;
    setFormState({
      ...formState,
      category: value,
    });
  };

  const onNotificationContentChanged = ({ target }) => {
    const { value } = target;
    setFormState({
      ...formState,
      notificationContent: value,
    });
  };

  const onSubmit = async ( e ) => {
    e.preventDefault();
    if ( formState.notificationContent.trim().length <= 0 ) return;
    await createNotificationRequest( formState );
    setNotificationsLog( await notificationsRequest() );
    setFormState({
      ...formState,
      notificationContent: ''
    });
  };

  return (
    <>
      <h1>Notifications</h1>
      <hr />

      <form onSubmit={ (e) => onSubmit(e) }>
        <FormControl fullWidth className="mb-3">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            id="category-select"
            label="Category"
            name="category"
            value={ formState.category }
            onChange={ onCategoryChanged }
          >
            {
              categories.map( ({ id, label }) => {
                return <MenuItem key={ id } value={ id }>{ label }</MenuItem>
              })
            }
          </Select>
        </FormControl>

        <FormControl fullWidth className="mb-3">
          <InputLabel id="notification-content-label">Notification Content</InputLabel>
          <Input
            id="notification-content"
            label="Notification Content"
            name="notificationContent"
            value={ formState.notificationContent }
            onChange={ (e) => onNotificationContentChanged(e) }
          />
        </FormControl>

        <Button
          onClick={ (e) => onSubmit(e) }
          variant="contained"
        >
          Send Notification
        </Button>
      </form>

      <Grid className="mt-5">
        <h3>Latest Logs</h3>
        <hr />
        {
          notificationsLog.map( item => {
            const itemJSON = JSON.parse( item );
            const logDate = new Date( itemJSON.date );
            return (
              <div
                key={ `${ logDate.getTime() }-${ itemJSON.channel }-${ itemJSON.category }-${ itemJSON.user.id }` }
                style={{ marginBottom: 12 }}
              >
                <p style={{ fontSize: 12, margin: 0 }}>{ logDate.toDateString() }</p>
                <code
                  style={{ fontSize: 10, color: 'black', padding: 10, backgroundColor: 'gray' }}
                >
                  { JSON.stringify( itemJSON ) }
                </code>
              </div>
            )
          })
        }
      </Grid>
    </>
  )
}
