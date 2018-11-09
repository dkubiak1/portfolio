import React from "react";
import { Tooltip } from "reactstrap"

//const Contact = () => (
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.state = {
      tooltip1Open: false,
      tooltip2Open: false,
      tooltip3Open: false,
    };
  }

  toggle1() {
    this.setState({
      tooltip1Open: !this.state.tooltip1Open,
      tooltip2Open: false,
      tooltip3Open: false
     
    });
  }

  toggle2() {
    this.setState({
     
      tooltip2Open: !this.state.tooltip2Open,
      tooltip1Open: false,
      tooltip3Open: false
    });
  }

  toggle3() {
    this.setState({
     
      tooltip3Open: !this.state.tooltip3Open,
      tooltip1Open: false,
      tooltip2Open: false
    });
  }

  render() {
    return (
      <div className="item contact" id="contact" >
        <p className="email">dan.kubiak@gmail.com</p>
      
        <div className="icons">
        <span id="Tooltip1">
        <Tooltip placement="right" isOpen={this.state.tooltip1Open} target="Tooltip1" toggle={this.toggle1}>
          Email
        </Tooltip>
        <div>
          <a href="mailto:dan.kubiak@gmail.com" className="contact-icons">
            <i className="far fa-envelope"></i>
          </a>
        </div>
        </span>
        <span id="Tooltip2">
        <Tooltip placement="right" isOpen={this.state.tooltip2Open} target="Tooltip2" toggle={this.toggle2}>
          Github
        </Tooltip>
        <div>
          <a href="https://www.github.com/dkubiak1" className="contact-icons">
            <i className="fab fa-github"></i>
          </a>  
        </div>
        </span>
        <span id="Tooltip3">
        <Tooltip placement="right" isOpen={this.state.tooltip3Open} target="Tooltip3" toggle={this.toggle3}>
          LinkedIn
        </Tooltip>
        <div>
          <a className="contact-icons"> 
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        </span>
        </div>
      </div>
    );
  }
}
export default Contact;
