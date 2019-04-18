import React, { Component } from "react";
import EditCampusForm from "./EditCampusForm";

class ToggleEditCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }
  render() {
    const { isHidden } = this.state;
    const { edit, dataId } = this.props;
    return (
      <div>
        <i
          className="far fa-edit"
          onClick={() => this.setState({ isHidden: !isHidden })}
        />
        {isHidden === false ? (
          <EditCampusForm edit={edit} dataId={dataId} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ToggleEditCampus;
