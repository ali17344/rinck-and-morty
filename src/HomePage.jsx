import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const HomePage = ({get_api, data}) => {
    useEffect(() => {
        get_api()
    },[])
    console.log(data);
    return (
        <div>
            <div className='flex'>
                {
                    data && (
                        data.map((element) => (
                            <Link key={element.id} to={`/detail/${element.id}`}>
                                <div className='info_card'>
                                    <div className="col-4">
                                        <img src={element.image} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <h1>{element.name}</h1>
                                        <h4>{element.status} - {element.species}</h4>
                                        <h4>Last known location:</h4>
                                        <h3>
                                            {element.location.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default HomePage;
