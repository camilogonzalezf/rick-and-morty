import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'

describe('Header', () => {
    it('renders Header correctly', () => {
        const mockfunction = jest.fn()
        const component = render(<Header handleSearchName={mockfunction} />)
        expect(component.getByText('RICK Y MORTY SEARCH')).toBeTruthy()
        const input = component.getAllByRole('textbox')
        expect(input.length).toEqual(1)
        expect(input[0].getAttribute('placeholder')).toEqual('Nombre del personaje')
        expect(component.getByText('Buscar')).toBeTruthy()
    })
})