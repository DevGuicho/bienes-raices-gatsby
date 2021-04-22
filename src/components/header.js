import React from "react"
import { Link } from "gatsby"
import Navegacion from "./navegacion"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <header
      css={css`
        background-color: #0d283b;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;
          @media (min-width: 768px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      >
        <Link to="/">
          <img src={logo.publicURL} alt="Logotipo bienes raices" />
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
