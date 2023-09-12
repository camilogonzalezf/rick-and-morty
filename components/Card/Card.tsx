import Image from "next/image";
import styles from './Card.module.css'
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

interface CardProps {
    character: Character
}

const Card = ({ character }: CardProps) => {
    return (
        <div
            className={styles.container}
        >
            <Image
                className={styles.image}
                src={character.image}
                alt="Descripción de la imagen"
                width={200}
                height={200}
            />
            <div className="">
                <p> <span className={styles.span}>Name :</span> {character.name}</p>
                <p><span className={styles.span}>Specie :</span>{character.species}</p>
                <p><span className={styles.span}>Status :</span>{character.status}</p>
                <p><span className={styles.span}>Origin :</span>{character.origin.name}</p>
            </div>
        </div>
    )
}

export default Card