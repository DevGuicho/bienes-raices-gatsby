import { graphql, useStaticQuery } from "gatsby"

const useInicio = () => {
  const resultado = useStaticQuery(graphql`
    {
      allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
        nodes {
          id
          contenido
          nombre
          imagen {
            childImageSharp {
              fluid(
                maxWidth: 1800
                duotone: {
                  highlight: "#222222"
                  shadow: "#192550"
                  opacity: 30
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const { nombre, imagen, contenido } = resultado.allStrapiPaginas.nodes[0]
  return { nombre, imagen, contenido }
}

export default useInicio
