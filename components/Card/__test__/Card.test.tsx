import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '../Card'

describe('Card', () => {
    it('renders Card correctly', () => {
        const mockCharacter = {
            id: '1',
            name: 'John Doe',
            species: 'Human',
            image: 'http://url-fake.com',
            status: 'Alive',
            origin: {
                name: 'Earth',
            }
        }
        const component = render(<Card character={mockCharacter} />)

        expect(component.getByText(mockCharacter.name)).toBeTruthy()
        expect(component.getByText(mockCharacter.species)).toBeTruthy()
        expect(component.getByText(mockCharacter.status)).toBeTruthy()
        expect(component.getByText(mockCharacter.origin.name)).toBeTruthy()
    })
})