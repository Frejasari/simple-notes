import React, { Component } from "react";
import api from "../api";
import Paragraph from "./Paragraph";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
  }
  createNewParagraph(i) {
    api
      .createParagraph(this.state.page._id, { text: " ", position: i + 1 })
      .then(res => {
        this.setState({ page: res.page });
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    api
      .getPage(this.props.match.params.pageId)
      .then(page => {
        this.setState({
          page: page
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const page = this.state.page;
    if (!page) return <div>loading....</div>;
    return (
      <div className="Notebooks">
        <h2>{page.title}</h2>
        <p>{page.description}</p>
        {page._paragraphs.map((p, i) => (
          <div key={p._id}>
            <Paragraph paragraph={p} index={i} createNewParagraph={_ => this.createNewParagraph(i)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Page;
