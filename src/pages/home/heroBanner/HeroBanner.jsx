import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import useFetch from '../../../hooks/useFetch';
import './style.scss';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/componentWrapper/ContentWrapper';


const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch('/movie/now_playing');

  useEffect(() => {
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && setQuery.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      {!loading &&
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      }

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBanner_Content">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of Movies, TV Shows and people to discover.Explore Now</span>
          <div className="searchInput">
            <input
              type="text"
              placeholder='Search for a movies or tv shows...'
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner
