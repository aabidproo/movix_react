import React,{useState} from 'react'
import ContentWrapper from '../../../components/componentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
 

const Trending = () => {
    
    const [endpoint, SetEndpoint] = useState("day");

    const {data, loading} = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab) => {
        SetEndpoint(tab === "Day" ? "day" : "week")
    }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default Trending
