import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestHomePage } from "../../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestHomePage();
  }

  render() {
    return (
      <h1>
        {this.props.helloWorld}
      </h1>
    );
  }
}

const mapStateToProps = state => ({ helloWorld: state.helloWorld });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHomePage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);