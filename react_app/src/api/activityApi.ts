import axios from "axios";

const PORT = 8080;
const HOSTNAME = "http://127.0.0.1";
const SERVER = `${HOSTNAME}:${PORT}`;

export const getActivities = async () => {
  // code down below
  const response = await axios.get(`${SERVER}/activities`);
  const body = response.data;
  return body;
};

export const createActivities = async (body) => {
  // code down below
  const response = await axios.post(`${SERVER}/activities`, body);
  alert(response.data);
};

export const deleteActivities = async (activityId) => {
  // code down below
  const response = await axios.delete(`${SERVER}/activities/${activityId}`);
  alert(response.data);
};

// export const editActivities = (activityId, body) => {
//   axios.patch(`/activity/${activityId}`, body);
//   alert('Updated activity already');
// };