import React from 'react';
import './SelecetPlayer.css';

const SelecetPlayer = ({handleChange , handleSubmit , platfrom , gamertag}) => {

  return (
    <div className='search'> 
      <form onSubmit={handleSubmit} >
        <label>
          <select value={platfrom} onChange={handleChange}>
            <option value="origin">PC</option>
            <option value="xbl">X-Box</option>
            <option value="psn">PS</option>
          </select>
        </label>
        <label>
           <h3>Please write your name tag</h3>
           <textarea value={gamertag} onChange={handleChange} />
        </label>
 	       <input type="submit" value="Let's see your stats!" className='btn' />
      </form>
      </div>
  );
}

export default SelecetPlayer;