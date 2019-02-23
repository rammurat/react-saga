import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestPSPPage } from "../../actions/psp";

class PSP extends React.Component {
  componentDidMount() {
    this.props.requestPSPPage();
  }

  render() {
    return (
      <h1>
        {this.props.pspPage}
      </h1>
    );
  }
}

const mapStateToProps = state => ({ pspPage: state.pspPage });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestPSPPage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PSP);