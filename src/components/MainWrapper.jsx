import React from 'react'

const MainWrapper = (props) => {
  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {props.children}
        </div>
      </div>
    </main>
  )
}

export default MainWrapper