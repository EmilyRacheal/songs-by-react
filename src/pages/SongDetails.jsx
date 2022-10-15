import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongSs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { setActiveSong, isPlaying } = useSelector((state) => state.player);
  console.log(songid);
  return (
    <div className="flex flex-col">
      {/* <DetailsHeader artistsId={artistsId} songData={songData}/> */}

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
      </div>
    </div>
  );
};

export default SongDetails;
