import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/App.tsx';

describe('test dom', () => {
    it('app', () => {
        const { container } = render(<App />, {});
        expect(container.querySelector('.test-text')).toBeInTheDocument();
    });
});
