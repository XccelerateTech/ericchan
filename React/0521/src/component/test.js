import React from 'react';

const Test = props =>{
    const testItems = props.testArray.map( I => (
        <h1>{I.item}</h1>
    ))

        return(
            <div>
                {testItems}
            </div>
        )

}

export default Test;