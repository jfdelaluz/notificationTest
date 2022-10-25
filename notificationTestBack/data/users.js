const usersList = () => {
  return [
    {
      id: '1',
      name: 'Jon Doe',
      email: 'jon@doe.com',
      phoneNumber: '1234567890',
      subscribed: [
        'sports',
        'movies',
      ],
      channels: [
        'sms'
      ],
    },
    {
      id: '2',
      name: 'Bruce Wayne',
      email: 'bruce@batcave.com',
      phoneNumber: '12345890234',
      subscribed: [
        'sports',
        'finance',
      ],
      channels: [
        'email',
        'push-notification',
      ],
    },
    {
      id: '3',
      name: 'Ned Falnders',
      email: 'hurricane@simpsons.com',
      phoneNumber: '1234509876',
      subscribed: [
        'finance',
        'movies'
      ],
      channels: [
        'email',
        'sms',
      ],
    },
    {
      id: '4',
      name: 'Walter White',
      email: 'breaking@bad.com',
      phoneNumber: '1234509789',
      subscribed: [
        'finance',
      ],
      channels: [
        'sms',
        'push-notification',
      ],
    },
  ];
};

module.exports = {
  usersList
};
