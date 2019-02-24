import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

// load actions
import { requestPSPPage } from "../../actions/psp";

// load header and footer
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'

class PSP extends React.Component {
  componentDidMount() {
    this.props.requestPSPPage();
  }

  render() {
    const {HeaderData, PSPPageData, FooterData} = this.props.pspPage
    const {title, categories} = PSPPageData ? PSPPageData : {}
    debugger

    if(!categories) {
      return ''
    }
    
    return (
      <div>
        <Header {...HeaderData}/>
        <h1>{title}</h1>
        <ul>
          {categories.men.clothing.map((row) => (
            <li>
              <Link to={row.link}><img src={row.image} alt=''/></Link>
              <h3>{row.text}</h3>
            </li>          
          ))}
        </ul>
        <Footer {...FooterData}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ pspPage: state.pspPage });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestPSPPage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PSP);