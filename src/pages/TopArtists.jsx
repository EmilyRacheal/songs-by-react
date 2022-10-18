import axios from "axios";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { ArtistCard, Loader, Error } from "../components";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Top Charts" />
  if (error) return <Error /> 

  return (
    <div className=" flex flex-col">
        <h2 className="font-bold text-left text-3xl text-white mt-4 mb-10"> Top Artists</h2>
        <div className="flex flex-wrap justify-center sm:justify-start gap-8">
            {data?.map((track)=>(
                <ArtistCard key={track.key} track={track}  />
        ))}
        </div>
  </div>);
};
export default TopArtists;


