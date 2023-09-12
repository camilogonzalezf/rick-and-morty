import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from '../Alert'

describe('Alert', () => {
    it('renders Alert when showAlert is true', () => {
        const exampleMessage = 'Example message'
        const component = render(<Alert text={exampleMessage} showAlert={true} />)
        expect(component.getByText(exampleMessage)).toBeTruthy()
    })
})