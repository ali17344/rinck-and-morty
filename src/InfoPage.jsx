import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const InfoPage = () => {
    const [data,setData] = useState()
    const {id} = useParams()    
    console.log(id);
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({data}) => setData(data))
    },[id])
    return (
        <div>
            {
                data && (
                    <>
                        <div className='info_card'>
                                    <div className="col-4">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h1>{data.name}</h1>
                                        <h4>{data.status} - {data.species}</h4>
                                        <h4>Last known location:</h4>
                                        <h3>
                                            {data.location.name}
                                        </h3>
                                    </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default InfoPage;
