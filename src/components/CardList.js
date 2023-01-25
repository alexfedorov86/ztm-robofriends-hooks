import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error ('hmmm...');
    // }
    return (
        <div>
            {
                robots.map(({ id, name, username, email}) => {
                    return (
                        <Card 
                            key={id} 
                            id={id} 
                            name={name} 
                            username={username} 
                            email={email} 
                        />
                    ); 
                })
            }
        </div>
    );
}

export default CardList;



// const CardList = ({ robots }) => {
//     const list = robots.map(({ id, name, username, email}) => {
//         return (<Card key={id} id={id} name={name} username={username} email={email} />);
//     });

//     return (
//         <div>{list}</div>
//     );
// }

// export default CardList;