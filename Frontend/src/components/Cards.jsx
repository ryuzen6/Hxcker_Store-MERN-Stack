import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 cursor-pointer dark:bg-slate-950 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-error">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-gray-950 hover:text-red-700 duration-200 cursor-pointer">buy_now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards;