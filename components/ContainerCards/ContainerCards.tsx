import React, { ReactNode } from 'react'; // Importa React y ReactNode

import styles from './ContainerCards.module.css';

const ContainerCards: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ContainerCards;