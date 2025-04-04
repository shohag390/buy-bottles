import { use } from 'react';
import Bottle from './Bottle';

const Bottles = (props) => {

    const { bottlesPromise } = props;
    console.log(bottlesPromise);
    const bottles = use(bottlesPromise);

    return (
        <div>
            {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} />)}
        </div>
    );
};

export default Bottles;