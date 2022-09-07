import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { WrapInBrowserRouter } from "_test_helpers/test_utils_ui";
import LoginScreen from './LoginScreen';

describe('Screens: LoginScreen', () =>{
    it('should match snapshot', () =>{
        const snapShotTree = render(<WrapInBrowserRouter><LoginScreen  /></WrapInBrowserRouter>);
        expect(snapShotTree).toMatchSnapshot();
    })

})