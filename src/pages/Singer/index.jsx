import React, { useState } from 'react';
import { AlbumList } from '../../components';
import album1 from '../../images/2017-album.png';
import album2 from '../../images/2019-album.png';
import album3 from '../../images/2021-album.jpg';
import './style.css';

export const Singer = ({ songTitle }) => {
    const [albums] = useState([
        { id: 1, album: 'Up Next Session: Billie Eilish', releaseDate: '2017', songsArray: ['Ocean Eyes', 'Bellyache', 'Watch'], img: album1 },
        { id: 2, album: 'When We All Fall Asleep, Where Do We Go?', releaseDate: '2019', songsArray: ['Bad Guy', 'Bury a Friend', 'When the party\'s over', 'Goodbye'], img: album2 },
        { id: 3, album: 'Happier Than Ever', releaseDate: '2021', songsArray: ['My Future', 'Oxytocin', 'Lost Cause'], img: album3 },
    ])

    return (
        <div class="albumInfo">
            <h1>Albums</h1>
            <h3>List of her albums</h3>
            <section>
                <AlbumList albums={albums} />
            </section>
        </div>
    )
}