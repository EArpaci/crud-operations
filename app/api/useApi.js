import apiClient from './client';

const catchAlert = (err) => {
  return alert(err.response.data.message || '500: Internal Server Error');
};

/*export const login = async (email, password) => {
  try {
    let { data } = await apiClient.post('/login', { email, password });
    return data.token;
  } catch (err) {
    return catchAlert(err);
  }
};*/

export const studentsList = async () => {
  try {
    let { data } = await apiClient.get('/users');
    return data;
  } catch (err) {
    return catchAlert(err);
  }
};

export const deleteStudent = async (user_key) => {
  try {
    let { data } = await apiClient.delete(`/users/${user_key}`);
    return data;
  } catch (err) {
    return catchAlert(err);
  }
};

export const addStudent = async (name, age, hometown) => {
  try {
    let { data } = await apiClient.post('/users', { name, age, hometown });
    return data;
  } catch (err) {
    return catchAlert(err);
  }
};

export const updateStudent = async (user_key, name, age, hometown) => {
  try {
    let { data } = await apiClient.patch(`/users/${user_key}`, {
      name,
      age,
      hometown,
    });
    return data;
  } catch (err) {
    return catchAlert(err);
  }
};
