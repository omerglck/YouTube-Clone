import { useEffect, useState } from "react";
import SideNav from "../componenets/SideNav";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers";
import VideoCard from "../componenets/VideoCard";
import Loading from "./../componenets/Loading";

const SearchResults = () => {
  const [params, setParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState(null);
  const query = params?.get("search_query");
  useEffect(() => {
    getData(`https://youtube138.p.rapidapi.com/search/?q=${query}`).then(
      (results) => setSearchResult(results.contents)
    );
  }, [query]);
  console.log(searchResult);
  return (
    <div className="min-h-[100vh] bg-[#0F0F0F] text-white flex">
      <SideNav />

      {!searchResult ? (
        <Loading />
      ) : (
        searchResult?.contents?.map((item, i) => {
          console.log("item", item);
          return <VideoCard key={i} video={item.video} />;
        })
      )}
    </div>
  );
};

export default SearchResults;
