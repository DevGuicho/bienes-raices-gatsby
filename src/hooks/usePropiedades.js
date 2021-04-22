import { useStaticQuery, graphql } from "gatsby"

const usePropiedades = () => {
  const res = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          categoria {
            nombre
          }
          estacionamiento
          habitaciones
          agentes {
            email
            nombre
            telefono
          }
          imagen {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return res.allStrapiPropiedades.nodes
}

export default usePropiedades
