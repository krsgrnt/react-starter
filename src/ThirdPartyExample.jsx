import React from 'react';
import useAbortableFetch from 'use-abortable-fetch';

const ThirdPartyExample = () => {
    const urlToFetch =
        'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
    const { data, loading } = useAbortableFetch(urlToFetch);

    if (!data) {
        return null;
    }

    return (
        <div>
            <h2>Third Party Example</h2>
            <div>
                {data.map((dish, idx) => (
                    <article
                        key={idx}
                        className='dish-card dish-card--withImage'>
                        <h3>{dish.name}</h3>
                        <p>{dish.desc}</p>
                        <div className='ingredients'>
                            {dish.ingredients.map((ingredient, idx) => (
                                <span key={idx}>{ingredient}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default ThirdPartyExample;
