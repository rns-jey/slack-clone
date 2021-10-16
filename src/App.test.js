import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from
  'react-router-dom';
import FormSignUp from './Components/CreateUser/FormSignUp';
import App from './App';

test('Registration Form renders', () => {
  render(<Router><FormSignUp /></Router>);
  const emailInput = screen.queryByPlaceholderText('name@work-email.com');
  const pwInput1 = screen.queryByPlaceholderText('Enter your password');
  const pwInput2 = screen.queryByPlaceholderText('Re-type your password');
  const continuebtn = screen.queryByRole("button", { name: 'Continue' })
  expect(emailInput).toBeInTheDocument();
  expect(pwInput1).toBeInTheDocument();
  expect(pwInput2).toBeInTheDocument();
  expect(continuebtn).toBeInTheDocument();
});

// describe('Registration Errors', () => {

test('Email required', () => {
  render(<Router><FormSignUp /></Router>);
  const continuebtn = screen.queryByRole("button", { name: 'Continue' });
  fireEvent.click(continuebtn);
  const errormsg = screen.getByText('Email required');
  expect(errormsg).toBeInTheDocument()
})

test('Email invalid', () => {
  render(<Router><FormSignUp /></Router>);
  const emailInput = screen.queryByPlaceholderText('name@work-email.com');
  const continuebtn = screen.queryByRole("button", { name: 'Continue' })
  fireEvent.change(emailInput, { target: { value: 'as' } })
  fireEvent.click(continuebtn);
  const errormsg = screen.getByText('Email address is invalid');
  expect(errormsg).toBeInTheDocument()
});

test('Password is required', () => {
  render(<Router><FormSignUp /></Router>);
  const emailInput = screen.queryByPlaceholderText('name@work-email.com');
  const continuebtn = screen.queryByRole("button", { name: 'Continue' })
  fireEvent.change(emailInput, { target: { value: 'rifam@pavir.com' } })
  fireEvent.click(continuebtn);
  const errormsg = screen.getByText('Password is required');
  expect(errormsg).toBeInTheDocument()
})

//   test('Passwords needs to be 6+ chars ', () => {
//     render(<Router><FormSignUp /></Router>);
//     const emailInput = screen.queryByPlaceholderText('name@work-email.com');
//     fireEvent.change(emailInput, { target: { value: 'rifam@pavir.com' } })
//     const continuebtn = screen.queryByRole("button", { name: 'Continue' })
//     const pwInput1 = screen.queryByPlaceholderText('Enter your password');
//     fireEvent.change(pwInput1, { target: { value: '123' } })
//     fireEvent.click(continuebtn);
//     const errormsg = screen.getByText('Passwords needs to be 6 characters or more');
//     expect(errormsg).toBeInTheDocument()
//   })

//   test('Re-Password required ', () => {
//     render(<Router><FormSignUp /></Router>);
//     const emailInput = screen.queryByPlaceholderText('name@work-email.com');
//     fireEvent.change(emailInput, { target: { value: 'rifam@pavir.com' } })
//     const continuebtn = screen.queryByRole("button", { name: 'Continue' })
//     const pwInput1 = screen.queryByPlaceholderText('Enter your password');
//     fireEvent.change(pwInput1, { target: { value: '12345678' } })
//     fireEvent.click(continuebtn);
//     const errormsg = screen.getByText('Password is required');
//     expect(errormsg).toBeInTheDocument()
//   })

//   test('Psswords do not match', () => {
//     render(<Router><FormSignUp /></Router>);
//     const emailInput = screen.queryByPlaceholderText('name@work-email.com');
//     fireEvent.change(emailInput, { target: { value: 'rifam@pavir.com' } })
//     const continuebtn = screen.queryByRole("button", { name: 'Continue' })
//     const pwInput1 = screen.queryByPlaceholderText('Enter your password');
//     fireEvent.change(pwInput1, { target: { value: '12345678' } })
//     const pwInput2 = screen.queryByPlaceholderText('Re-type your password');
//     fireEvent.change(pwInput2, { target: { value: '123abc' } })
//     fireEvent.click(continuebtn);
//     const errormsg = screen.getByText('Passwords do not match');
//     expect(errormsg).toBeInTheDocument()
//   })

  // test('Email already has an account', async () => {
  //   render(<Router><FormSignUp /></Router>);
  //   const continuebtn = screen.queryByRole("button", { name: 'Continue' })
  //   const emailInput = screen.queryByPlaceholderText('name@work-email.com');
  //   fireEvent.change(emailInput, { target: { value: 'rifam@pavir.com' } })
  //   const pwInput1 = screen.queryByPlaceholderText('Enter your password');
  //   fireEvent.change(pwInput1, { target: { value: '12345678' } })
  //   const pwInput2 = screen.queryByPlaceholderText('Re-type your password');
  //   fireEvent.change(pwInput2, { target: { value: '12345678' } })
  //   fireEvent.click(continuebtn);
  //   const errormsg = await screen.getByText('This email already has an account')
  //   expect(errormsg).toBeInTheDocument()
  // })

});