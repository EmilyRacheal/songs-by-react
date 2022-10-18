import axios from "axios";
import { useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Error, Loader, SongCard } from "../components";

const TopCharts = () => {

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Top Charts" />
  if (error) return <Error /> 

  return (
    <div className=" flex flex-col">
        <h2 className="font-bold text-left text-3xl text-white mt-4 mb-10">Discover Top charts </h2>
        <div className="flex flex-wrap justify-center sm:justify-start gap-8">
            {data?.map((song, i)=>(
                <SongCard
                key={song.key}
                song={song}  
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
            />
        ))}
        </div>
  </div>);
};
export default TopCharts;

