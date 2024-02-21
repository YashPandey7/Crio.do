// import "./styles.css";
import React, { Component } from "react";
import axios from "axios";

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  fetchData = async (id) => {
    try {
      console.log(id);
      const response = await axios.get(`http://reqres.in/api/users/${id}`);
      const userData = response.data.data; // Directly use response.data
      console.log(userData);
      this.setState({ userData });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  render() {
    const { userData } = this.state;

    return (
      <div>
        <h1>User Dashboard</h1>
        <div>
          <button onClick={() => this.fetchData(1)}>1</button>
          <button onClick={() => this.fetchData(2)}>2</button>
          <button onClick={() => this.fetchData(3)}>3</button>
          <button onClick={() => this.fetchData(100)}>100</button>
        </div>
        {userData && (
          <div>
            <h2>Email: {userData.email}</h2>
            <h2>Name: {`${userData.first_name} ${userData.last_name}`}</h2>
            <img src={userData.avatar} alt="User Avatar" />
          </div>
        )}
      </div>
    );
  }
}

export default Sample;