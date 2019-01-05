import { combineReducers} from "redux";

const songsReducer = () => {
    return [
        { title: 'Smells Like Teen Spirit', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:23' },
        { title: 'I want it that way', duration: '3:13' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
