import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../assets/logo.svg"

const Header = () => (
  <header
    style={{
      margin: `1rem 0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `1rem 1.0875rem`,
      }}
    >
      <Link to="/">
        <Logo />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
