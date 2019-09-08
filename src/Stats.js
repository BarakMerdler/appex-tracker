import React from 'react';
import './stats.css';
import {Link} from 'react-router-dom';

function Player({player}) {

	const activePlayerSegmant = player.data.segments.find(function (element){
		return element.metadata.name === player.data.metadata.activeLegendName
	});
	console.log(activePlayerSegmant);
	const activePlayerSegmantmantStats=Object.values(activePlayerSegmant.stats);
	let publishStats=[];
	activePlayerSegmantmantStats.map((element,i)=>{
				if (element.percentile!== null) {
					let classname=`stats${i} stats`;
					 publishStats.push(<div className={classname} key={i}>					
					<div className='info'>{element.displayName}</div>
					<div className='value'>{element.displayValue}<p className='percentile'>({element.percentile}%)</p></div>
				</div>)}
				
			 return activePlayerSegmantmantStats;
	})

function publish(publishStats){
	let publish=[]
	for (var i = 0 ; i < publishStats.length ; i++) {
		if (i<4) {
		publish.push(publishStats[i]); 
		if (i===publishStats.length) {
			return publish;
		}
	}else{
		return publish
		break;
	}
	}
}
console.log(publishStats);
function handle(){
	document.body.style.background = " #953036 url('/static/media/octane.0806c58d.png') no-repeat top center";
}


  return (
    <div className="big-continer-stats">
      <div className='top-continer'>
      	<img src={player.data.platformInfo.avatarUrl} alt='famer avatar'/>
      	<h2 className='capitalize'>{player.data.platformInfo.platformUserId}</h2>
      </div>
      <div className='bottom-continer'>
      	<div className='left-bottom-continer'>
      		<img src={activePlayerSegmant.metadata.tallImageUrl} alt='legend' />
      	</div>
      	<div className='right-bottom-continer'>
      		{publish(publishStats)}
      	</div>
      </div>
      <Link to='/' className='go-back-stats' onClick={handle}>
    	  <h3>Go back</h3>
      </Link>
    </div>
  );
}

export default Player;