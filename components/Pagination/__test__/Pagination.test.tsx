import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from '../Pagination'

describe('Pagination', () => {
    it('renders Pagination correctly', () => {
        const mockOnSelectedPage = jest.fn()
        const mockNumberPages = 3
        const mockSelectedPage = 1
        const component = render(
            <Pagination
                numberPages={mockNumberPages}
                onSelectedPage={mockOnSelectedPage}
                selectedPage={mockSelectedPage}
            />)
        const buttons = component.getAllByTestId('button')
        expect(buttons.length).toEqual(mockNumberPages)
        expect(buttons[mockSelectedPage - 1].getAttribute('class')).toBe('buttonActive')
        expect(buttons[mockSelectedPage].getAttribute('class')).toBe('buttonInactive')
        expect(buttons[mockSelectedPage + 1].getAttribute('class')).toBe('buttonInactive')

        expect(component.getByText('1')).toBeTruthy()
        expect(component.getByText('2')).toBeTruthy()
        expect(component.getByText('3')).toBeTruthy()
    })
})