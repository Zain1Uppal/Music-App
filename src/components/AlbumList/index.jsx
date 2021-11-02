import React from "react";
import { LikesCount } from '../LikesCount';
import { Song } from "../Song";

export const AlbumList = ({ albums }) => {
    return (
        <ul>
            {
                albums.map(album => (
                    <li key={album.id}>
                        <strong role="heading" aria-label="headline">{album.album}</strong> {album.date} <LikesCount /> <Song songsArray={album.songsArray} />
                    </li>
                ))
            }
        </ul>
    )
}