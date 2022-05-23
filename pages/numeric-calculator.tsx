import Head from 'next/head'
import React, { useState } from 'react';

export default function Home() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [result, setResult] = useState("0");

  function calculate(operator = "") {
    let list = []

    if (checked1) list.push(number1)
    if (checked2) list.push(number2)
    if (checked3) list.push(number3)

    if (list.length === 0) {
      setResult("Please select fields");
      return
    }

    if (list.length === 1) {
      setResult("At least need 2 fields selected");
      return
    }

    let total = list[0];
    for (let idx = 1; idx < list.length; idx++) {
      if (operator === "+") total += list[idx];
      if (operator === "-") total -= list[idx];
      if (operator === "*") total *= list[idx];
      if (operator === "/") total /= list[idx];
    }

    setResult(total)
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" />
      </Head>

      <main>
        <div className="App">

          <div className="container-form">
            <br /><br />
            <h2>Numeric calculator</h2>
            <br /><br />

            <div className="inline-form">
              <div>
                <input
                  type="number"
                  value={number1}
                  onChange={e => setNumber1(+e.target.value)}
                  placeholder="0"
                  className="form-control"
                />
              </div>
              <div className="form-control-lg custom-switch">
                <input
                  type="checkbox"
                  checked={checked1}
                  className="custom-control-input "
                  id="switch1"
                  onChange={e => { setChecked1(e.target.checked) }}
                />
                <label className="custom-control-label" htmlFor="switch1" />
              </div>
            </div>

            <div className="inline-form">
              <div>
                <input
                  type="number"
                  value={number2}
                  onChange={e => setNumber2(+e.target.value)}
                  placeholder="0"
                  className="form-control"
                />
              </div>
              <div className="form-control-lg custom-switch">
                <input
                  type="checkbox"
                  checked={checked2}
                  className="custom-control-input "
                  id="switch2"
                  onChange={e => { setChecked2(e.target.checked) }}
                />
                <label className="custom-control-label" htmlFor="switch2" />
              </div>
            </div>

            <div className="inline-form">
              <div>
                <input
                  type="number"
                  value={number3}
                  onChange={e => setNumber3(+e.target.value)}
                  placeholder="0"
                  className="form-control"
                />
              </div>
              <div className="form-control-lg custom-switch">
                <input
                  type="checkbox"
                  checked={checked3}
                  className="custom-control-input "
                  id="switch3"
                  onChange={e => { setChecked3(e.target.checked) }}
                />
                <label className="custom-control-label" htmlFor="switch3" />
              </div>
            </div>
            <br />
            <div className="inline-form">
              <button type="button" className="btn btn-primary" onClick={() => { calculate('+') }}> + </button>
              <button type="button" className="btn btn-primary" onClick={() => { calculate('-') }}> - </button>
              <button type="button" className="btn btn-primary" onClick={() => { calculate('*') }}> x </button>
              <button type="button" className="btn btn-primary" onClick={() => { calculate('/') }}> / </button>
            </div>
            <br />
          </div>
          <hr style={{ width: "50%", borderTop: "1px solid #b5b5b5" }} />
          <br />
          <h2>{result}</h2>
        </div>

      </main>

      <style jsx>{`
        .App {
          text-align: center;
        }
        
        .container-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .inline-form {
          display: flex;
          flex-direction: row;
        }
        
        .inline-form > div > label  {
          margin-left : 15px;
        }
        
        div.form-control-lg  {
          padding : .5rem 0;
          padding-left: 2.25rem;
        }
        
        .inline-form > button  {
          width: 50px;
          margin : 10px;
        }
        
        .inline-form > button:first-child  {
          margin-left : 0px;
        }
        
        label {
          cursor : pointer;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}