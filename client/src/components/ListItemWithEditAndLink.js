import React, { Component } from "react";
import { Collapse, Button, Card, CardText, CardBody, CardLink } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="mb-1">
        <Card className="list-card">
          <CardBody className="list-header">
            <div className="row no-gutters">
              <div className="col">
                <Link to={this.props.link}>{this.props.data.title}</Link>
              </div>
              <div className="col-auto d-flex align-items-center ml-1">
                <Button className="show-info-btn" onClick={this.toggle}>
                  <FontAwesomeIcon onClick={this.toggle} icon="angle-down" size="md" />
                </Button>
              </div>
            </div>
            <Collapse isOpen={this.state.collapse}>
              <CardText className="list-description">{this.props.data.description}</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </Collapse>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ListItem;
