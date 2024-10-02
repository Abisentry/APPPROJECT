import React from 'react'

const MyLearning = () => {
  return (
    <section className='met  text-white'>
     <h1 className="mt-20 ml-10"> Your Learning </h1>
      <h5 className='mt-3  mt-20 ml-10'> 
        <p>Here is a list of all the projects on which you have been working</p>
      </h5>

      <div className="container">
        <div className="semi-rectangle">
          Overview
        </div>
        <div className="semi-rectangle">
          In Progress
        </div>
        <div className="semi-rectangle">
          Completed
        </div>
        <div className="semi-rectangle">
          PDF
        </div>
        <div className="semi-rectangle">
          Dispute
        </div>
      </div>

    </section>
  )
}

export default MyLearning
