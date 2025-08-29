import { describe, expect, it } from 'vitest'
import { add } from './helper'

describe('Testing', () => {
    it('return sum', () => {
        expect(add(1, 1)).toBe(2)
    })
});