import React, { useState } from 'react';
import { LikesCount, Album, Song, AlbumList } from '../../components';
import album1 from '../../images/2017-album.png';
import album2 from '../../images/2019-album.png';
import album3 from '../../images/2021-album.jpg';

export const Singer = () => {
    const [albums] = useState([
        { id: 1, album: 'Up Next Session: Billie Eilish', releaseDate: '2017', songsArray: ['Ocean Eyes, ', 'Bellyache, ', 'Watch'], img: album1 },
        { id: 2, album: 'When We All Fall Asleep, Where Do We Go?', releaseDate: '2019', songsArray: ['Bad Guy, ', 'Bury a Friend, ', 'When the party\'s over'], img: album2 },
        { id: 3, album: 'Happier Than Ever', releaseDate: '2021', songsArray: ['Getting Older, ', 'I Didn\'t Change My Number, ', 'Billie Bossa Nova'], img: album3 },
    ])

    return (
        <div class="singer-info">
            <h1>Billie Eilish</h1>
            <section>
                <AlbumList albums={albums} />
                <Album albums={albums} />
            </section>
        </div>
    )
}