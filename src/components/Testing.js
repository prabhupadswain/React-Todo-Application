import React from 'react';

const Testing = () => {
  function demo1Handler() {
    console.log('Superman-Demo 1');
  }

  //   function demo2Handler(fullName) {
  //     console.log(fullName);
  //   }

  function demo3Handler(fullName) {
    console.log(fullName + '-Demo 3');
  }

  function demo4Handler(event, superHero) {
    console.log(`${superHero}-${event.target.innerText}`);
  }

  return (
    <div className='card'>
      <h2>Testing Click Events !!!</h2>
      <div className='actions'>
        <button className='btn' onClick={demo1Handler}>
          Demo 1
        </button>
        <button
          className='btn'
          onClick={function () {
            console.log('Black Panther-Demo 2');
          }}
        >
          Demo 2
        </button>
        <button className='btn' onClick={() => demo3Handler('Aquaman')}>
          Demo 3
        </button>
        <button
          className='btn'
          onClick={(event) => {
            const mySuperHero = 'Batman';
            demo4Handler(event, mySuperHero);
          }}
        >
          Demo 4
        </button>
      </div>
    </div>
  );
};

export default Testing;
