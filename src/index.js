import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [{
    id: 0,
    name: "Alex Nghiem",
    email: "anghiem@hmc.edu",
    phone: "(206) 669-7663"
},{
    id: 1,
    name: "Stephanie Lee",
    email: "sjlee@fhcrc.org",
    phone: "(206) 658-7976"
}];

const dataElems = data.map(d =>
    <div key={d.id}>
        <span><b>{d.name}</b></span>
        <span className="monospace">{d.email}</span>
        <span>{d.phone}</span>
    </div>
);

ReactDOM.render(
  <React.StrictMode>
      <span><b>People</b></span>
      <br/>
      {dataElems}
    {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
