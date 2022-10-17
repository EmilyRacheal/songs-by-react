import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetRelatedSongsQuery,
  useGetSongDetailsQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  // const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails }=
    useGetSongDetailsQuery({ songid });
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  }=useGetRelatedSongsQuery({ songid });

  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(PlayPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistsId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold"> Lyrics: </h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 my-1 text-base">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 my-1 text-base">
              Sorry no lyrics found!
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
