import React,{useState} from 'react'
import ContentWrapper from '../../../components/componentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
 

const Popular = () => {
    
    const [endpoint, SetEndpoint] = useState("movie");

    const {data, loading} = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        SetEndpoint(tab === "Movies" ? "movie" : "tv")
    }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default Popular
