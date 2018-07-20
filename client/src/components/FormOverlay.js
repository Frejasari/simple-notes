/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../api";
import EditButton from "./EditButtonLarge";
import EditAndCreateForm from "./EditAndCreateForm";
import SaveButton from "./SaveButtonLarge";

class FormOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, title: this.props.title, description: this.props.description };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleSaveClick() {
    this.props.handleSaveClick(this.state.title, this.state.description);
    this.toggle();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <EditButton handleClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.headline}</ModalHeader>
          <ModalBody>
            <EditAndCreateForm
              title={this.state.title}
              description={this.state.description}
              handleTitleChange={this.handleTitleChange}
              handleDescriptionChange={this.handleDescriptionChange}
            />
          </ModalBody>
          <ModalFooter>
            <SaveButton handleClick={this.handleSaveClick} />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FormOverlay;