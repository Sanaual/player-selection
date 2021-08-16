import React from 'react';

const Selection = (props) => {
    console.log(props);
    let sum = 0;
    for (let i = 0; i < props.select.length; i++) {
        sum = sum + props.select[i].price;
    }

    return (
        <div>
            <h1>Total Cost : {sum}</h1>
        </div>
    );
};

export default Selection;