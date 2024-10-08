import React from 'react'
import homestyle from '@/app/style/homepage.module.css'

export const HomePage = () => {
  return (
    <div>HomePage

        <h1 className={`${homestyle.title}`}>
            This is homepage.
        </h1>
        <div className={`${homestyle.container}`}>
            Inside container
        </div>
    </div>
  )
}
