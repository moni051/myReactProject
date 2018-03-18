import React from 'react';
import Sparkline from 'react-sparkline-canvas';
import _ from 'lodash';

// Pass in an array of values.

function average(data) {
  return _.round(_.sum(data)/data.length);
}


export default (props) => {
  return (
    <div>
    <Sparkline
    data={props.data}
    width={180}
    height={120}
    type={'line'}
    lineWidth={2}
    strokeColor={props.color}
    />

    <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
