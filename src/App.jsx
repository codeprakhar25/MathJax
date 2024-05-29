/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const data = "When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
  const [tex, setTex] = useState('');

  useEffect(()=>{
    if( typeof window?.MathJax !== "undefined"){
      window.MathJax.typesetClear()
      window.MathJax.typeset()
    }
  },[tex])
 
  return (
    <div>
      <h2>Integrating MathJax v3 in React</h2>
      <p>{data}</p>
      <span>Input Latex Here </span>
      <input onChange={(e)=> {
        setTex(e.target.value) }}/>
      <h4>Rendered Latex : </h4>
      <p>{tex}</p>
      <p>$x^2+2x+6=0$ and using this propertu</p>
      <div>
        <table className="table-style-a2">
          <thead>
            <tr>
              <th>Radical in the integral</th>
              <th>Trigonometric substitution</th>
              <th>Hyperbolic substitution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span dangerouslySetInnerHTML={{ __html: '$\\sqrt{a^2-x^2}$' }} /></td>
              <td><span dangerouslySetInnerHTML={{ __html: '$x = a \\sin (\\theta)$' }} /></td>
              <td><span dangerouslySetInnerHTML={{ __html: '$x = a \\tanh (\\phi)$' }} /></td>
            </tr>
            <tr>
              <td><span dangerouslySetInnerHTML={{ __html: '$\\sqrt{a^2+x^2}$' }} /></td>
              <td><span dangerouslySetInnerHTML={{ __html: '$x = a \\tan (\\theta)$' }} /></td>
              <td><span dangerouslySetInnerHTML={{ __html: '$x = a \\sinh (\\phi)$' }} /></td>
            </tr>
            <tr>
              <td><span dangerouslySetInnerHTML={{ __html: '$\\sqrt{x^2-a^2}$' }} /></td>
              <td><span dangerouslySetInnerHTML={{ __html: '$x = a \\sec (\\theta)$' }} /></td>
              <td><span dangerouslySetInnerHTML={{ __html: '$x = a \\cosh (\\phi)$' }} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
