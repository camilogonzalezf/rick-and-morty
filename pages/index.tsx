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
  const [results, setResults] = useState<Character[]>([])
  const [resultsShow, setResultsShow] = useState<Character[]>([])
  const [numberPages, setNumberPages] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  const [searchName, setSearchName] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const { loading, error, data } = useQuery(getCharacter(searchName));

  const ELEMENTS_PER_PAGE = 6
  const handleShowAlert = () => {
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  useEffect(() => {
    if (!loading && !error && data && searchName) {
      if (!data.characters.results.length) {
        setResults([])
        setAlertMessage('Oops, No se encontraron resultados')
        handleShowAlert()
      } else {
        setResults(data.characters.results)
        setResultsShow(data.characters.results.slice(0, 6))

        const quantityCharacters = data.characters.results.length

        setNumberPages(Math.ceil(quantityCharacters / 6))
        setShowAlert(false)
        setSelectedPage(1)
      }
    }
  }, [loading, error, data, searchName]);

  const handleSearchName = useCallback(
    (name: string) => {
      if (name.length > 1) {
        setSearchName(name)
      } else {
        setAlertMessage('Debe contener al menos 2 caracteres para buscar un personaje')
        handleShowAlert()
      }
    }
    , [])

  const handleSelectedPage = useCallback((numberPage: number) => {
    setSelectedPage(numberPage)
    const upperLimit = numberPage * ELEMENTS_PER_PAGE
    const lowerLimit = upperLimit - ELEMENTS_PER_PAGE
    setResultsShow(results.slice(lowerLimit, upperLimit))
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
                <h2 className={stylesIndex.h2}>You can search for your favorite character</h2>
                <Image
                  // className={styles.image}
                  src={imageRickAndMorty}
                  alt="Rick and morty"
                  width={250}
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
