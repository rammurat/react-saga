import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestHomePage } from "../../actions/home";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestHomePage();
  }

  render() {
    return (
      <h1>
        {this.props.homePage}
      </h1>
    );
  }
}

const mapStateToProps = state => ({ homePage: state.homePage });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHomePage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);