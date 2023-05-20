import React, { useEffect, useState } from "react";
import "../src/App.css";

import axios from "axios";

const ActivityCard = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const data = async () => {
      const body = await axios.get("http://127.0.0.1:8080/activities");
      body.data;
      setCard(body.data);
    };
    data();
  }, []);

  return (
    <div className="activities_card">
      <h1>Form</h1>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Image</label>
            <input type="text" className="form-control" id="image" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input type="text" className="form-control" id="duration" />
          </div>
          <div className="form-group">
            <label htmlFor="distance">Distance</label>
            <input type="number" className="form-control" id="distance" />
          </div>
          <button onClick={save}>Submit</button>
        </form>
      </div>
      {card.map((item) => (
        <div className="activity-card" key={item.id}>
          <div className="header">
            <h2 className="activity-name">{item.username}</h2>
            <span className="icon">
              <a href="/edit_card">
                <ion-icon
                  color="primary"
                  size="large"
                  name="create-outline"
                ></ion-icon>
              </a>
              <ion-icon
                color="danger"
                size="large"
                name="trash-outline"
              ></ion-icon>
            </span>
          </div>

          <div className="activity-card-detail">
            <p className="name">{item.activityName}</p>
            <hr />
            <br />
            <label className="description">{item.description}</label>

            <div className="activity-tab">
              <div className="activity-left-tab">
                <img className="activity-image" src={item.image} />
                <p className="activity-type">{item.activityType}</p>
              </div>
              <div className="activity-right-tab detail">
                <p>Date</p>
                <span>{item.date}</span>
              </div>
              <div className="activity-right-tab detail">
                <p>Duration</p>
                <span>{item.duration}</span>
              </div>
              <div className="activity-right-tab detail">
                <p>Distance</p>
                <span>{item.distance}</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityCard;
