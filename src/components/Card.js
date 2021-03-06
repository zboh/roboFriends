import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=220x200`} alt='Robot friend' />
            <div className='tc'>
                <h3>
                    {name}
                </h3>
                <p>
                    {email}
                </p>
            </div>
        </div>
    );
}

export default Card;