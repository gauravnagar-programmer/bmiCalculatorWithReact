import { useMemo, useState } from 'react'

import './App.css'

function App() {

  let [weight, setWeight] = useState(0)
  let [height, setHeight] = useState(0)
  let [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('')
  const [pointerPosition, setPointerPosition] = useState('0%')

  const getBmi = (e) => {

    e.preventDefault()

    if (weight === 0 || height === 0) alert('please enter a valid weight and height value')


    else {
      const bmiValue = (weight / (height * height))
      setBmi(bmiValue.toFixed(1))

      if (bmiValue < 18.5) {
        setMessage("you are underweight")
        setColor('text-yellow-500')
        setPointerPosition('20%')

      }



      else if (bmiValue > 18.5 && bmiValue < 24.9) {
        setMessage('you are nomal ')
        setColor('text-green-500')
        setPointerPosition('50%')
      }

      else if (bmiValue > 24.9) {
        setMessage('you are overweight')
        setColor('text-red-500')
        setPointerPosition('80%')

      }
    }
  }



  return (
    <>
      <div className='app'>
        <div className='flex flex-col space-y-7 bg-gray-800 border-gray-500 border-2 p-5 rounded-lg'>
          <h1>BMI Calculator</h1>
          <form onSubmit={getBmi} className='flex flex-col space-y-5  ' >
            <div className='flex flex-col space-y-3 text-start '>
              <label htmlFor="weight">Weight (kg)</label>
              <input name='weight'
                className='px-3 py-2 bg-gray-700 rounded-sm'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                id='weight'
                type="text"
                placeholder='Enter your weight value' />
            </div>

            <div className='flex flex-col space-y-3 text-start '>
              <label htmlFor="height">Height (mtr)</label>

              <input name='height'
                className='px-3 py-2 bg-gray-700 rounded-sm '
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                type="text"
                id='height'
                placeholder='Enter your height value' />
            </div>

            <div className='btn'>
              <button type='submit' className='bg-blue-500 font-bold px-3 py-2 rounded-md '>Submit</button>

            </div>

          </form>
          <div className='center'>
            {bmi && (

              <>

                <h3>Your bmi is : {bmi} </h3>
                <div className="w-full h-4 rounded-full bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 mt-4 relative">

                  <div
                    className="absolute top-[-6px] w-4 h-4 bg-gray-300 rounded-full transition-all duration-300"
                    style={{ left: pointerPosition }}
                  ></div>

                </div>


              </>

            )}
            <p className={color}>{message}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
