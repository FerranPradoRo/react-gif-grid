const { render, screen } = require('@testing-library/react');
const { GifGrid } = require('../../src/components/GifGrid');
const { useFetchGifs } = require('../../src/hooks/useFetchGifs');

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests GifGrid', () => {
  const category = 'Batman';
  test('should show loading initialy', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('shoul show items when images load with useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Batman',
        url: 'https://',
      },
      {
        id: '123',
        title: 'Superman',
        url: 'https://',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
