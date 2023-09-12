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


: (
  <div className={stylesIndex.initContent}>
    Puedes buscar
    <Image
      // className={styles.image}
      src={imageRickAndMorty}
      alt="Rick and morty"
      width={300}
    />
  </div>
)}