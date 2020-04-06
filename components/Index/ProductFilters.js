import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { Button } from 'semantic-ui-react';

const ProductFilter = props => {
    return ( 
        <React.Fragment>
            <InputRange
                maxValue={50000}
                minValue={500}
                value={props.value}
                onChange={props.priceFilterChange}
            />
            <Button
                onClick={props.applyFilter}
                >Apply</Button>
        </React.Fragment>
    )
}
 
export default ProductFilter;