import React from 'react';
import list from '../../../public/list.json'
import Card from '../Cards/index.jsx';

export default function Course(){
  
  
  return(
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you <span className="text-pink-500"> here! :)</span></h1>
        <p className="mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque pariatur amet, nam dicta officiis animi minima error iste quasi illum perspiciatis laborum dolor exercitationem sint natus blanditiis vitae numquam ullam quam rem a. Quod nemo et, in laboriosam sit illum, repellendus necessitatibus aut accusamus expedita itaque perferendis deleniti explicabo velit.</p>
        <a href="/"><button className="btn mt-6 text-white rounded-md py-1 px-5 btn-ghost bg-pink-500 hover:bg-pink-700 duration-300 ">Back</button></a>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
{
  list.map(items => <Card key={items.id} items={items} /> )
}
      </div>
    </div>
    </>
  )
}
