import React, { ReactNode } from 'react'; // Importa React y ReactNode
import styles from './ContainerCards.module.css';

interface ContainerCardsProps {
    children: ReactNode,
    hasElementsToShow: boolean
}

const ContainerCards: React.FC<ContainerCardsProps> = ({ children, hasElementsToShow }) => {
    return (
        <div
            className={`${hasElementsToShow ? styles.containerWithElements : styles.containerWithOutElements}`}
            data-testid='ContainerCards'
        >
            {children}
        </div>
    );
};

export default ContainerCards;