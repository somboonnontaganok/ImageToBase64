import { useState, useEffect } from "react";

import { getActivities, createActivities, deleteActivities } from "./api/activityApi";

function App() {
  const [activities, setActivities] = useState([]);
  const [activity_name, setName] = useState();
  const [activity_date, setDate] = useState();
  const [description, setDescription] = useState();
  const [activity_start_time, setStartTime] = useState();
  const [activity_finish_time, setFinishTime] = useState();
  const [activity_type, setType] = useState();
  const [distance, setDistance] = useState();
  const [load, toggleReload] = useState(false);

  useEffect(() => {
    const getActivitieses = async () => {
      const activities = await getActivities();
      setActivities(activities);
    };

    getActivitieses();
  }, [load]);

  const save = async () => {
    const newActivity = {
      activity_name,
      activity_date,
      description,
      activity_start_time,
      activity_finish_time,
      activity_type,
      distance,
    };
    await createActivities(newActivity);
    toggleReload(!load);
  };

  const confirmDelete = (id) => {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
        deleteActivities(id);
        toggleReload(!load);
    } else {
        alert("You canceled!");
    } 
}

  return (
    <>
      <div>
      <h3>Create</h3>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Start Time"
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Finish Time"
          onChange={(e) => setFinishTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Distance"
          onChange={(e) => setDistance(e.target.value)}
        />
        <button onClick={save}>Save</button>
        
      </div>
      
      <h3>Render</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Start_Time</th>
            <th>Finish_Time</th>
            <th>Type</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => {
            return (
              <tr key={activity._id}>
                <td>{activity.activity_name}</td>
                <td>{activity.activity_date}</td>
                <td>{activity.description}</td>
                <td>{activity.activity_start_time}</td>
                <td>{activity.activity_finish_time}</td>
                <td>{activity.type}</td>
                <td>{activity.distance}</td>
                <td><button onClick={() => {confirmDelete(activity._id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;