import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import "./signup.css"

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
        fname:"",
        lname:"",
        email:"",
        password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("User created successfully");
          window.localStorage.setItem("token", data.data);
          localStorage.setItem("Username", fname);
            window.location.href = "/";
        }
      });
  }
  
    render() {
    return (
      <div>
      <Navbar/>
      <form className="login" onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={e=>this.setState({ fname: e.target.value})}
            required
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text"
           className="form-control"
           placeholder="Last name"
           onChange={e=>this.setState({ lname: e.target.value})}
           required
           />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e=>this.setState({ email: e.target.value})}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e=>this.setState({ password: e.target.value})}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
      <Footer />
      </div>
    )
  }
}