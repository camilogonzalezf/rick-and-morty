import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputSearch from '../InputSearch'

describe('InputSearch', () => {
    it('renders InputSearch correctly', () => {
        const mockfunction = jest.fn()
        const component = render(<InputSearch onSearch={mockfunction} />)
        const input = component.getAllByRole('textbox')
        expect(input.length).toEqual(1)
        expect(input[0].getAttribute('placeholder')).toEqual('Nombre del personaje')
        expect(component.getByText('Buscar')).toBeTruthy()
    })
})