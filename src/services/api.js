import axios from 'axios';

const BASE_URL = 'https://64ce448b0c01d81da3eea4dc.mockapi.io/api/contacts';

export const fetchContacts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const deleteContactsById = async id => {
  return await axios.delete(`${BASE_URL}/${id}`);
};

export const addContact = async data => {
  return await axios.post(BASE_URL, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
