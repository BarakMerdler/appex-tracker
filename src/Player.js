import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Stats from './Stats.js';
import './stats.css';
import './player.css';

function Player({platfrom , gamertag}) {

	useEffect(() => {
		
		if ((gamertag !== '') ){
			fetchData();

		}



	}, []);

	const [player, setPlayer]=useState({});

	

	const  fetchData =  () =>{ 
	  axios.get(`/api/v1/profile/${platfrom}/${gamertag}`)
      .then(res => {
        setPlayer(res.data);

      })
      .catch(err => {
      	setPlayer('player Request failed with status code 404');
      });

  }
  let status;
  if (!(Object.keys(player).length === 0) && !(player==='player Request failed with status code 404')) {
  	status=<Stats player={player }/>
  }else if (gamertag === '') {
  	status=<div>
              <h2>please insert name</h2>
              <Link to='/' className='go-back'>
                <h1>Go back</h1>
              </Link>
            </div>

  }else if (player === 'player Request failed with status code 404') {
  	status=<div className='profile-not-found--div'>
              <h2>profile not found</h2>
              <Link to='/' className='go-back-not-found'>
                  <h1>Go back</h1>
              </Link>
            </div>
  }else{
  	status=<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  }


  return (

  	
    <div className="continer-player">
    	{status}

    </div>
  );
}

export default Player;