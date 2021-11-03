import { screen } from '@testing-library/react';
import { AlbumList } from '.';

describe('AlbumList', () => {
    let testAlbums;
    beforeEach(() => {
        testAlbums = [{ id: 1, album: 'test_name', releaseDate: '2017', songsArray: ['test song 1', 'test song 2', 'test song 3']}]
        render(<AlbumList albums={testAlbums}/>)
    })

    test('', () => {
        const album = screen.getByRole('heading')
        expect(album.textContent).toContain(testAlbums[0].album)
    })
})