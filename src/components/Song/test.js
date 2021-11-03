import { render, screen } from '@testing-library/react';
import { Song } from '.';

import axios from 'axios';
jest.mock('axios');


describe('Song lyric API', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

const album= [{ id: 1, album: 'test Album', releaseDate: '2017', songsArray: ['test song 1', 'test song 2', 'test song 3'] }]


    test('Only renders lyrics from the Lyrics API if lyrics are available', async () => {
        axios.get.mockResolvedValue({ data: { lyrics: "Some test lyrics", status: 200 } });

        render(<Song songsArray={album[0].songsArray} songTitle={album[0].songsArray[1]} />);
        
        expect(axios.get).toHaveBeenCalled();

        const lyrics = await screen.findAllByText("Some test lyrics");

        expect(lyrics[1]).toBeInTheDocument();
    })

})