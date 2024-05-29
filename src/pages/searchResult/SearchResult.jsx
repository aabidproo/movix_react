import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import InfiniteScroll from 'react-infinite-scroll-component'

import './style.scss'
import { fetchDataFromApi } from '../../utils/api'
import ContentWrapper from '../../components/componentWrapper/ContentWrapper'

import noResults from '../../assets/no-results.png'
import Spinner from '../../components/spinner/Spinner'




const SearchResult = () => {

  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const {query} = useParams();

  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFromApi(`/serach/multi?query=${query}&page=${pageNum}`)
    .then((res) => {
      setData(res)
      setPageNum((prev) => prev + 1)
      setLoading(false)
    })
  };

  useEffect(() => {
    fetchDataFromApi(); 
  }, [query]);

  const fetchNextPageData = () => {
    fetchDataFromApi(`/serach/multi?query=${query}&page=${pageNum}`)
    .then((res) => {
      if(data?.results) {
        setData({
          ...data, results: [...data?.results, ...res.results]
        })
      } else {
        setData(res)
      }
      setPageNum((prev) => prev + 1)
    })
  }

  return (
   <div className="searchResultsPage">
    {loading && <Spinner initial={true} />}
   </div>
  )
}

export default SearchResult
