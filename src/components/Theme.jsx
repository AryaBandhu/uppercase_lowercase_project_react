"use client";
import {themes} from "./data/Themes"

function Theme({colorScheme,setColorScheme}) {

  return (
    <div className='py-6 h-screen min-h-screen' data-theme={colorScheme}>
      <h1 className='text-center text-xl font-semibold mb-4' data-theme={colorScheme}>Select a theme</h1>
      <p className='capitalize text-center mb-10'>Current Theme - {colorScheme}</p>
      <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 px-6 gap-6'>
        {
          themes.map(theme => {
            return <button key={theme.label} className="btn btn-sm md:btn-md lg:btn-lg capitalize px-4 py-2" data-theme={theme.value} onClick={() => {
              setColorScheme(theme.value)
            }}>{theme.label}</button>
          })
        }
        <li></li>
      </ul>
    </div>
  )
}

export default Theme