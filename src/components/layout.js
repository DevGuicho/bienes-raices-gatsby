import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            font-size: 1.6rem;
            line-height: 2;
            font-family: "Lato", Arial, Helvetica, sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            text-align: center;
            font-family: "Lato", Arial, Helvetica, sans-serif;
            font-weight: 300;
          }
          h3 {
            font-family: "Roboto", Arial, Helvetica, sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          img {
            max-width: 100%;
          }
          .contenedor {
            max-width: 120rem;
            margin: 0 auto;
            width: 95%;
          }
        `}
      />
      <Helmet>
        <title>Bienes Raices</title>
        <meta name="description" content="Encuentra la casa de tus sueños" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Helmet>
      <Header />
      {children}
      <footer>Este es el footer</footer>
    </>
  )
}

export default Layout
