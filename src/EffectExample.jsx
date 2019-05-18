import React, { useState, useEffect } from 'react';

const EffectExample = () => {
    const urlToFetch =
        'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
    const [documentTitle, setDocumentTitle] = useInputAsDocumentTitle('');
    const [dishes, setDishes] = useState([]);

    const fetchDishes = async () => {
        console.log('fetching dishes');
        const res = await fetch(urlToFetch);
        const data = await res.json();
        setDishes(data);
    };

    useEffect(() => {
        fetchDishes();
    }, [documentTitle]); // [] empty array  makes useEffect behave like componentDidMount, otherwise supply variables which, when changed, will trigger the function passed to useEffect

    return (
        <div>
            <h2>Effect Example</h2>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor='documentTitle'>Document Title:</label>
                <input
                    type='text'
                    onChange={e => setDocumentTitle(e.target.value)}
                    value={documentTitle}
                    id='documentTitle'
                />
                <button onClick={() => setDocumentTitle('')}>reset</button>
            </form>
            {dishes.map((dish, idx) => (
                <article key={idx} className='dish-card dish-card--withImage'>
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
    );
};

function useInputAsDocumentTitle(initialValue) {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        console.log('useEffect is called after any render');
        document.title = value;
    });
    return [value, setValue];
}

export default EffectExample;
