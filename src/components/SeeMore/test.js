import { screen } from '@testing-library/react';
import { SeeMore } from '.';

describe('SeeMore', () => {
    let testAlbums;
    let testImg;
    beforeEach(() => {
        testImg = 'https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg'
        testAlbums = [{ id: 1, album: 'test_name', releaseDate: '2017', songsArray: ['test song 1', 'test song 2', 'test song 3'], img:testImg}]
        render(<SeeMore album={testAlbums} songsArray={testAlbums[0].songsArray}/>)
    })

    test('', () => {   
        const seeMoreBtn = screen.getByRole('switch')
        userEvent.click(seeMoreBtn)
        const seeMoreContent = screen.getByRole('seeMore').textContent
        expect(seeMoreContent).toContain(testAlbums[0].songsArray[1])
    })
})