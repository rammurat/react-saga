import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// load all actions
import { requestHomePage } from "../../actions/home";

// load header and footer
import Header from '../header'
import Footer from '../footer'

class Home extends React.Component {
  componentDidMount() {
    this.props.requestHomePage();
  }

  render() {
    return (
      <div>
        <Header {...this.props.header}/>
        <h1>
          {this.props.homePage}
        </h1>
        <Footer {...this.props.footer}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ homePage: state.homePage });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHomePage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);