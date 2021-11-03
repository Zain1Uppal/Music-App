import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Song = ({ songsArray, songTitle }) => {
    const [lyrics, setLyrics] = useState();
    const [statusMessage, setStatusMessage] = useState('Loading');

    useEffect(() => {
        const fetchLyrics = async () => {
            setStatusMessage('Loading lyrics');
            try {
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/Billie Eilish/${songTitle}`);
                setLyrics(data.lyrics);
                setStatusMessage('');
            } catch (err) {
                console.warn(err);
                setStatusMessage(`Error: ${err.message}`);
            };
        };
        fetchLyrics();
    }, [songTitle]);

    return (
        <>
            <ul>
                {
                    songsArray.map(song => (
                        <li key={song} onClick={() => handleSelect(song)}>
                            <strong role="heading" aria-label="headline">{song}</strong>
                            <p>{statusMessage ? statusMessage : lyrics}</p>
                        </li>
                    ))
                }
            </ul>
            {/* {!lyrics && <span role="alert">No lyrics available</span>} */}
        </>
    )
}