import songBar  from "./SongBar"

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-white text-3xl">
      Related Songs:
    </h1>
  </div>
);

export default RelatedSongs;
