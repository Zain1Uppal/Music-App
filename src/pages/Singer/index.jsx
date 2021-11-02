import React, { useState } from 'react';
import { LikesCount, Album, Song, AlbumList } from '../../components';

export const Singer = () => {
    const [albums] = useState([
        { id: 1, album: 'Up Next Session: Billie Eilish', releaseDate: '2017', songsArray: ['Ocean Eyes, ', 'Bellyache, ', 'Watch'], img: 'https://i.pinimg.com/originals/c0/bd/86/c0bd8624d1e643eac51842e94c3b751f.png' },
        { id: 2, album: 'When We All Fall Asleep, Where Do We Go?', releaseDate: '2019', songsArray: ['Bad Guy, ', 'Bury a Friend, ', 'When the party\'s over'], img: 'https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png' },
        { id: 3, album: 'Happier Than Ever', releaseDate: '2021', songsArray: ['Getting Older, ', 'I Didn\'t Change My Number, ', 'Billie Bossa Nova'], img: 'https://images.genius.com/473fa896be17a22cedd0f686d6d5a0dd.1000x1000x1.jpg' },
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