import React from "react"
import styled from "styled-components"

const SiteFooter = styled.footer`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Footer = () => (
  <SiteFooter>
    <p>
      © {new Date().getFullYear()}, Built with by{" "}
      <a href="https://www.twitter.com/emma_adesile">Emmanuel</a>. Powered by{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
  </SiteFooter>
)

export default Footer
