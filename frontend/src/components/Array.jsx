import React, { useState } from 'react';

const Array = () => {
  const [objectUser, setObjectUser] = useState({
    id: 4,
    firstName: 'Atabek',
    lastName: 'Bakhramov',
  });
  const objectExchangeFirstLast = () => {
    setObjectUser({
      ...objectUser, // try removing this line - id disappears
      firstName: objectUser.lastName,
      lastName: objectUser.firstName,
    });
  };

  const [arrayOfUsers, setArrayOfUsers] = useState([
    {
      id: 1,
      firstName: 'Aleks',
      lastName: 'Shenshin',
    },
    {
      id: 2,
      firstName: 'Луна',
      lastName: 'Кошка',
    },
    {
      id: 3,
      firstName: 'Ilon',
      lastName: 'Musk',
    },
  ]);
  const arrayExchangeFirstLast = () => {
    const randomIndex = Math.floor(Math.random() * arrayOfUsers.length);

    // create a copy of an array in the state
    const modifiedArray = [...arrayOfUsers];

    // exchange first and last names of a random person
    [modifiedArray[randomIndex].firstName,
      modifiedArray[randomIndex].lastName] = [modifiedArray[randomIndex].lastName,
      modifiedArray[randomIndex].firstName];

    // set new state array
    setArrayOfUsers(modifiedArray);
  };
  return (
    <>
      <ol>
        {arrayOfUsers.map((currUser) => (
          <li key={currUser.id}>
            {`${currUser.firstName} ${currUser.lastName}`}
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={arrayExchangeFirstLast}
        style={{ cursor: 'pointer', marginBottom: '1rem' }}
      >
        Exchange names
      </button>
      <ul>
        <li>
          {`${objectUser.firstName} ${objectUser.lastName}`}
        </li>
      </ul>
      <button
        type="button"
        onClick={objectExchangeFirstLast}
        style={{ cursor: 'pointer', marginBottom: '1rem' }}
      >
        Exchange names
      </button>
    </>
  );
};

export default Array;
