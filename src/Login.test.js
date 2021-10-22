import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login/Login';

it ("Renders correctly", () => {
    const {queryByTestId, queryByPlaceholderText} = render(<Router><Login /></Router>)
    expect(queryByTestId("btn-submit")).toBeTruthy()
    expect(queryByPlaceholderText('Password', 'name@work-email.com')).toBeTruthy()
})