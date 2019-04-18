import React, { Component } from "react";
import EditDataForm from "./EditDataForm";

class ToggleEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }
  render() {
    const { isHidden } = this.state;
    const { edit, dataId, location } = this.props;
    return (
      <span>
        <i
          className="far fa-edit"
          onClick={() => this.setState({ isHidden: !isHidden })}
        />
        {isHidden === false ? (
          <EditDataForm edit={edit} dataId={dataId} location={location} />
        ) : (
          ""
        )}
      </span>
    );
  }
}

export default ToggleEditForm;
