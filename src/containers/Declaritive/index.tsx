import React from 'react';

const Declaritive = () => {
    const numbers = [6,42,4,81,56,33];
    const totalNumbers = numbers.reduce((acc, nums) => acc + nums, 0);
    const maxNumber = numbers.reduce((max, num) => (max || 0) > num ? max : num, 0);
    const filteredList = numbers.filter(nums => nums % 2 === 0);
    const findNum = numbers.find(num => num === 33);
    return (
      <>
        <div>Array = [6,42,4,81,56,33]</div>
        <h1>Map</h1>
        <div>
            {numbers.map((val, i) => 
                <div key={i}>{i}-{val}</div>
            )}
        </div>
        <h1>Reduce</h1>
        <div>Highest number with reduce: {maxNumber}</div>
        <div>Total all numbers with reduce: {totalNumbers}</div>

        <h1>Filter</h1>
        <div>Filter anything divisble by 2:
            {filteredList.map((val, i) => 
                <div key={i}>{i}::{val}</div>
            )}
        </div>
        <h1>Find</h1>
        <div>Find number 33 with find: {findNum}</div>
        <br/>
        <div>This is a line to test the width and copy responsive design from other sites on the width of the application.  This is pretty much the first step in defining the responsive nature of the site.  Thank you and have a great day!!! :)</div>
      </>
    );
  }
  
  export default Declaritive;