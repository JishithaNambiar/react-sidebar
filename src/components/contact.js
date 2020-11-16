import React, { Component } from "react";
import Header from "./header";
import * as emailjs from "emailjs-com";
import Button from "./button";

class Contact extends Component {
  state = {
    user: {
      username: "",
      email: "",
      message: ""
    },
    errors: {}
  };

  validateError = () => {
    const errors = {};

    if (this.state.user.username === "") {
      errors.username = "username is required";
    }

    if (this.state.user.email === "") {
      errors.email = "email is required";
    }

    return Object.keys(errors).length === 0 ? {} : console.errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    /*  const errors = this.validateError();
    this.setState({ errors });
    if (errors) return; */

    const templateParams = {
      from_name: this.state.user.username + "(" + this.state.user.email + ")",
      to_name: "Elayne",
      // feedback: this.state.user.message
      message: this.state.user.message
    };

    emailjs
      .send(
        "service_rdbdq3m",
        "contact_form",
        templateParams,
        "user_UQvx3hXHnYRBexqoqnuv5"
      )
      .then((response) => {
        console.log("Your message has successfully sent!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("Your message was not able to be sent", err);
      });

    this.setState({
      user: { username: "", email: "", message: "" }
    });
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    if (input.value === "") {
      console.log("input is required");
    }
    this.setState({ user });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h5 className="text-center" style={{ fontFamily: "Adamina" }}>
            CONTACT US
          </h5>
          <br />
          <h5 className="text-center" style={{ fontFamily: "Adamina" }}>
            Need more information? Leave us a message.
          </h5>
          <br />
          <form>
            <div className="form-group">
              <div className="form-group">
                <label
                  /* htmlFor="formGroupExampleInput" */ style={{
                    fontFamily: "Adamina"
                  }}
                >
                  Name
                </label>
                <br />
                <input
                  //role="textbox"
                  type="textarea"
                  value={this.state.user.username}
                  name="username"
                  onChange={this.handleChange}
                  placeholder="Your name"
                  required
                  error={this.state.errors.username}
                  style={{ width: 900 }}
                />
                {/* {this.state.errors && <div className='alert alert-danger'>error</div>} */}
              </div>

              <div className="form-group">
                <label
                  htmlFor="formGroupExampleInput2"
                  style={{ fontFamily: "Adamina" }}
                >
                  Email
                </label>
                <br />
                <input
                  type="textbox"
                  value={this.state.user.email}
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Your Email"
                  required
                  error={this.state.errors.email}
                  style={{ width: 900 }}
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="exampleFormControlTextarea1"
                style={{ fontFamily: "Adamina" }}
              >
                Message
              </label>
              <textarea
                className="form-control"
                //id="exampleFormControlTextarea1"
                value={this.state.user.message}
                name="message"
                onChange={this.handleChange}
                rows="3"
              ></textarea>
            </div>
            <br />

            <button
              type="button"
              className="btn btn-info"
              onClick={this.handleSubmit}
            >
              SEND
            </button>
            <br />
            <div className="centreAlign">
              <a
                style={{ alignContent: "center" }}
                href="https://www.gofundme.com/f/justice-for-dreasjon-sean-reed?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all"
                target="_blank"
              >
                {" "}
                &nbsp;Dreasjon Reed's GoFundMe page
              </a>
            </div>
          </form>
          <br />
          <div className="centralize">
        
          </div>
          {/*  </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Contact;