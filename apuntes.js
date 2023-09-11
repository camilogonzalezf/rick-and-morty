const GET_CHARACTERS = gql`
  query {
      characters(filter: { name: "Rick" }) {
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