import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import { useState, useEffect } from 'react';
import getCharacter from '../services/query';
import Header from '../components/Header/Header';

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
  const { loading, error, data } = useQuery(getCharacter('Morty'));
  const [results, setResults] = useState<Character[]>([]);

  useEffect(() => {
    if (!loading && !error && data) {
      console.log(data.characters.results)
      setResults(data.characters.results);
    }
  }, [loading, error, data]);

  return (
    <div>
      <Header />
      {results.length ? (
        results.map(character => (
          <div key={character.id}>
            <Image
              src={character.image}
              alt="Descripción de la imagen"
              width={200}
              height={200}
            />
            <p>{character.name}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  )
}
