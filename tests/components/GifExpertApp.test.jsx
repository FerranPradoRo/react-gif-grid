import { render, screen } from '@testing-library/react';
import GifExpertApp from '../../src/GifExpertApp';

describe('Tests GifExpertApp.test', () => {
  test('should have a title', () => {
    console.log('siu');
    render(<GifExpertApp />);
    expect(screen.getByText('GifExpertApp')).toBeTruthy();
  });
});
