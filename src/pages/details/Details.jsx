import React from 'react'
import './Details.scss'

import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videoSection/VideosSection'
import Similar from './carousel/Similar'
// import Recommendation from './carousel/Recommendation'



const Details = () => {

    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);


    return (
        <div>
            <DetailsBanner video={data?.result?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id} />
            {/* <Recommendation mediaType={mediaType} id={id} /> */}
        </div>
    )
}

export default Details