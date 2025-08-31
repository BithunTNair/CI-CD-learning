import { describe, expect, it } from 'vitest'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'

describe('App',()=>{
    it('Checking if H1 tag exists',()=>{
        render(<App/>);
        expect(screen.getByRole('heading')).toHaveTextContent('Hello');
    })
})