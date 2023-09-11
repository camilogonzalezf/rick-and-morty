import { gql } from '@apollo/client';

const getCharacter = (name: string) => {
    return gql`
  query {
      characters(filter: { name: "${name}" }) {
      results {
              id
              name
              species
              image
              status
              origin {
                name
              }
          }
      }
  }
`
}

export default getCharacter;