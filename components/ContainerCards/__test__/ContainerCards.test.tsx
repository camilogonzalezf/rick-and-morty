import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContainerCards from '../ContainerCards'

describe('Container Cards', () => {
    it('renders Container Card when there are not elements', () => {
        const mockChildren = <div>Single Children</div>
        const mockHasElementsToShow = false
        const component = render(<ContainerCards children={mockChildren} hasElementsToShow={mockHasElementsToShow} />)
        expect(component.getByTestId('ContainerCards').getAttribute('class')).toEqual('containerWithOutElements')
    })

    it('renders Container Card when there are elements', () => {
        const mockChildren = <div>Multiple Children</div>
        const mockHasElementsToShow = true
        const component = render(<ContainerCards children={mockChildren} hasElementsToShow={mockHasElementsToShow} />)
        expect(component.getByTestId('ContainerCards').getAttribute('class')).toEqual('containerWithElements')
    })
})