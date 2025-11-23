import React, { Component } from 'react'
import Helmet from 'react-helmet'
import favicon from '../../assets/img/favicon.ico'
import favicon32 from '../../assets/img/favicon32.png'
import favicon96 from '../../assets/img/favicon96.png'
import ogimage from '../../assets/img/og-image.jpg'
import '../../assets/sass/styles.sass'
import config from '../../../config'
import NavBar from '../NavBar'
import Footer from '../Footer'
import CookieConsent, { Cookies } from "react-cookie-consent";

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    return (
      <div id='layout-wrapper'>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
          <link rel='shortcut icon' href={favicon} />
          <link rel='shortcut icon' type='image/png' sizes='32x32' href={favicon32} />
          <link rel='shortcut icon' type='image/png' sizes='96x96' href={favicon96} />

          <meta property='og:title' content={config.siteTitle}/>
          <meta property='og:image' content={ogimage} />
          <meta property='og:description' content='Critical Friend Partnership is able to operate as both a Non-Exec to your business and as an exclusive consultancy service.'/>

        </Helmet>
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
        <div id='content-wrapper'>
          {this.props.children}
        </div>
        <Footer />

        <CookieConsent
          enableDeclineButton
          disableButtonStyles
          containerClasses='has-background-primary'
          buttonClasses='button is-small is-link mx-4'
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-tagmanager"

        >This website uses cookies to enhance your user experience.</CookieConsent>

      </div>
    )
  }
}

export default Layout
