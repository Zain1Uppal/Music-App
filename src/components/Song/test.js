import { render, screen } from '@testing-library/react';
import { Song } from '.';

import axios from 'axios';
jest.mock('axios');

// describe('Song component', () => {
//     beforeEach(() => {
//         render(<Song />)
//     })

//     test('', () => {

//     })
// })

describe('Song lyric API', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    const stubSongsArray = ['Test song 1', 'Test song 2', 'Test song 3', 'Test song 4']

    const stubHandleSelect = jest.fn();

    // test('When component mounts, calls the Lyrics API', () => {

    // })

    test('Only renders lyrics from the Lyrics API if lyrics are available', async () => {
        axios.get.mockResolvedValue({ data: { lyrics: "Some test lyrics", status: 200 } });
        render(<Song songsArray={stubSongsArray} handleSelect={stubHandleSelect} songTitle={stubSongsArray[1]} />);
        expect(axios.get).toHaveBeenCalled();
        const lyrics = await screen.findByText("Some test lyrics");
        expect(lyrics).toBeInTheDocument();
    })

    test('Renders error message if lyrics are not available', async () => {
        axios.get.mockRejectedValue(new Error("ERROR"));
        render(<Song />);
        const error = await screen.findByRole("alert");
        expect(error.textContent).toContain("No lyrics available");
    })
})