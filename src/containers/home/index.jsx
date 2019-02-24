import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

// load all actions
import { requestHomePage } from "../../actions/home";

// load header and footer
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'

class Home extends React.Component {
  componentDidMount() {
    this.props.requestHomePage();
  }

  render() {
    const {HeaderData, HomePageData, FooterData} = this.props.homePage
    const {title, banner, uber_components} = HomePageData ? HomePageData : {}

    if(!title) {
      return ''
    }

    return (
      <div className="psp">
        <Header {...HeaderData}/>
        <h1>{title}</h1>
        <div className='banner'><Link to={banner.link}><img src={banner.image} alt='banner'/></Link></div>
        <ul className="flex-container wrap">
          {uber_components.data.map((row) => (
            <li className="flex-item">
              <h3>{row.title}</h3>
              <Link to={row.link}><img src={row.image} width="300" height="400" alt=''/></Link>
            </li>          
          ))}
        </ul>
        <Footer {...FooterData}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ homePage: state.homePage });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHomePage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);