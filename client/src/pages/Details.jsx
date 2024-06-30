import { useParams } from "react-router-dom";

import Information from "../components/details/Information";
import Seasons from "../components/details/Seasons";
import Sidebar from "../components/details/Sidebar";
import { useQuery } from '@tanstack/react-query';
import { retrieve } from "../utils/user";
import Featured from "../components/details/Featured";
import Error from './../components/helpers/Error';
import Loader from './../components/helpers/Loader';

export default function Details() {
  const { type, id } = useParams();
  const { data, isLoading,isFetched } = useQuery({
    queryKey: [`${type}/${id}`],
    queryFn: () => retrieve(`${type}/details/${id}`)
  });
  if(isLoading) return <Loader />
  
  if(!data.success) return <Error styles="h-[80vh] flex flex-col justify-center mt-20" />
  
  return <div className="padding-inline mt-24">
    {isFetched && <Featured creation={data.payload} />}

    {isFetched && <div className="lg:flex items-start gap-4 py-20">
      <div className="details-container grow">
        {type === "shows" && <Seasons creation={data.payload} totalSeasons={data.number_of_seasons} />}
        <Information data={data?.payload} />
      </div>
      <Sidebar creation={data?.payload} />
    </div>}
  </div>
}