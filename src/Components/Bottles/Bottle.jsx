import React from 'react';

const Bottle = (props) => {
    const { bottle } = props;
    const { img } = bottle;

    console.log(bottle);

    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;