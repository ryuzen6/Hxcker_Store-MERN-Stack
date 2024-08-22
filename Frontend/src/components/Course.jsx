import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>
                Welcome_to_Hxcker<span className='text-red-700'>_LearnZ$#@%</span>
            </h1>
            <p className='mt-12'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum laboriosam, ducimus cum provident expedita voluptatibus possimus accusantium, inventore illo voluptatem fugit sint aliquam, adipisci modi error blanditiis consequuntur? Provident a nesciunt, eveniet atque dolore debitis vero, maxime optio ab voluptas excepturi temporibus tempora corrupti cupiditate eaque impedit, expedita sint.
            </p>
            <Link to='/'>
                <button className="btn btn-error mt-6">_back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-10'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
