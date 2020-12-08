import React from "react";

export default class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/moqpkjol"
        method="POST"
        id="message-form"
      >
        <div id="senders-email">
            <label id="email-label">Your Email:</label>
            <input id="email-input" type="email" name="email" />
        </div>
        <div id="message">
            <label id="message-label">Message:</label>
            <textarea id="message-input" type="text" name="message" cols="40" rows="10"></textarea>
        </div>
        {status === "SUCCESS" ? <p>Thanks! I will get back to you shortly.</p> : <button class="button">Send Message</button>}
        {status === "ERROR" && <p>Make sure you fill out both inputs!</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}