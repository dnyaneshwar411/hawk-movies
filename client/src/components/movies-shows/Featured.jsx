import { useQuery } from '@tanstack/react-query';
import FeaturedInfo from './FeaturedInfo';
import { retrieve } from '../../utils/user';
import Loader from './../helpers/Loader';
import Error from '../helpers/Error';
import { useState } from 'react';

export default function Featured() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(prev => prev === 0 ? 7 : prev - 1);
  const next = () => setCurrent(prev => prev === 7 ? 0 : prev + 1);

  const {data, error, isLoading, refetch} = useQuery({
    queryKey: ["banner-movies/shows"],
    queryFn: () => retrieve("movies/banner-movies")
  });

  if(isLoading) return <div className="w-full bg-gradient-to-t from-[#141414] to-transparent h-[85vh] flex items-center justify-center rounded-lg animate-skeleton">
    <Loader />
  </div>

  if(error || !data.success) return <div className="w-full h-[85vh] bg-[#212121] flex flex-col items-center justify-center rounded-lg border-2 border-[#222]">
    <Error />
    <button className="btn-red" onClick={refetch}>Load Again</button>
  </div>

  return <div className="w-full bg-center bg-gradient-to-t from-[#141414] to-transparent h-[85vh] flex flex-col rounded-lg overflow-hidden262626 bg-cover relative">
    <img
      src={`https://image.tmdb.org/t/p/w1280${data.payload.results[current].backdrop_path || 'ga4OLm4qLxPqKLMzjJlqHxVjst3.jpg'}`}
      className="w-full h-full absolute z-[-1] object-cover rounded-xl"
      style={{ backgroundImage: `linear-gradient(to top, #141414, 95%,transparent)` }}
    />
    <FeaturedInfo
      title={data.payload.results[current].original_title}
      prev={prev}
      next={next}
    />
  </div>
}
