import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import * as heroCSS from "../css/hero.module.css"
import Encuentra from "../components/encuentra"
import ListadoPropiedades from "../components/listadoPropiedades"

const Home = () => {
  const { nombre, contenido, imagen } = useInicio()

  const Background = styled(BackgroundImage)`
    height: 600px;
  `
  return (
    <Layout>
      <Background
        Tag="section"
        fluid={imagen.childImageSharp.fluid}
        fadeIn="soft"
      >
        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>
            Venta de casas y departamentos exlusivos
          </h1>
        </div>
      </Background>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>

          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
      <Encuentra />
      <ListadoPropiedades />
    </Layout>
  )
}

export default Home
