import React from 'react';

const Card = ({ name, email, id }) => {
    // const { name, email } = props;
    return (
        <div className='tc bg-light-yellow dib pa3 br4 ma2 grow shadow-2'>
            <img alt='robophoto' src={`https://robohash.org/${id}`} width={200} height={200} /*sizing like url?200x200 was not working*//> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;