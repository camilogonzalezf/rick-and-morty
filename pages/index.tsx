import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect, useCallback } from 'react';
import getCharacter from '../services/query';
import Header from '../components/Header/Header';
import ContainerCards from '../components/ContainerCards/ContainerCards';
import Alert from '../components/Alert/Alert';
import Pagination from '../components/Pagination/Pagination';
import stylesIndex from './styles/index.module.css'
import Card from '../components/Card/Card';
import imageRickAndMorty from '../assets/Rick-And-Morty.png'
interface Character {
  id: string;
  name: string;
  species: string;
  image: string;
  status: string;
  origin: {
    name: string;
  };
}

export default function Home() {
  const [results, setResults] = useState<Character[]>([]) // Almacena el resultado completo de la búsqueda
  const [resultsShow, setResultsShow] = useState<Character[]>([]) // Almacena segementos de 6 personajes a partir de results
  const [numberPages, setNumberPages] = useState(0) // Almacena la cantidad de paginas
  const [selectedPage, setSelectedPage] = useState(1) // Almacena la página seleccionada actualmente
  const [searchName, setSearchName] = useState('') // Almacena el término de búsqueda
  const [showAlert, setShowAlert] = useState(false) // Dispara la alerta en el buscador
  const [alertMessage, setAlertMessage] = useState('') // La alerta se reutiliza, almacena el mensaje a mostrar
  const { loading, error, data } = useQuery(getCharacter(searchName)); // Obtiene la query GraphQL

  const ELEMENTS_PER_PAGE = 6 // Constante de paginación
  const handleShowAlert = () => { //Función que dispara la alerta
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  useEffect(() => { // El useEffect capta la lectura de la API
    if (!loading && !error && data && searchName) {
      if (!data.characters.results.length) { // Si no se encuentrean datos, se lanza la alerta
        setResults([])
        setAlertMessage('Oops, No se encontraron resultados')
        handleShowAlert()
      } else { // Si se encuentran datos, se renderiza el GRID con 6 elementos inicialmente los primeros 6
        setResults(data.characters.results)
        setResultsShow(data.characters.results.slice(0, 6))

        const quantityCharacters = data.characters.results.length // Obtiene la cantidad total de la búsqueda

        setNumberPages(Math.ceil(quantityCharacters / 6)) // Calcula la cantidad de páginas 
        setShowAlert(false)
        setSelectedPage(1)
      }
    }
  }, [loading, error, data, searchName]);

  const handleSearchName = useCallback( // La función lanza la alerta en caso de tener menos de 2 caracteres en el buscador
    (name: string) => {
      if (name.length > 1) {
        setSearchName(name)
      } else {
        setAlertMessage('Debe contener al menos 2 caracteres para buscar un personaje')
        handleShowAlert()
      }
    }
    , [])

  const handleSelectedPage = useCallback((numberPage: number) => { // Se Actualiza resultShow, para paginar dividido en grupos de 6
    setSelectedPage(numberPage)
    const upperLimit = numberPage * ELEMENTS_PER_PAGE
    const lowerLimit = upperLimit - ELEMENTS_PER_PAGE
    setResultsShow(results.slice(lowerLimit, upperLimit)) // Se obtiene la porción de caracteres a mostrar
  }, [resultsShow])


  return (
    <div>
      <Header handleSearchName={handleSearchName} />
      <Alert
        showAlert={showAlert}
        text={alertMessage}
      />
      <div className={stylesIndex.container}>
        <ContainerCards hasElementsToShow={resultsShow.length > 0}>
          {
            resultsShow.length ? (
              resultsShow.map(character => (
                <Card character={character} key={character.id} />
              ))
            )
              :
              <div className={stylesIndex.initContent}>
                <h2 className={stylesIndex.h2}>¡ Ahora busca tu personaje, no esperes más !</h2>
                <Image
                  className={stylesIndex.image}
                  src={imageRickAndMorty}
                  alt="Rick and morty"
                />
              </div>
          }
        </ContainerCards>
        {resultsShow.length
          ?
          <Pagination
            numberPages={numberPages}
            onSelectedPage={handleSelectedPage}
            selectedPage={selectedPage}
          />
          :
          <div></div>}
      </div>
    </div>
  )
}
