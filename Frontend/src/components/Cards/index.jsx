export default function Card({items}){
    // console.log(items.name)
    return (
        <div className="my-3 p-3">
            <div className="card bg-base-100 w-92 shadow-xl mt-4 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-300 ">
  <figure>
    <img
      src={items.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {items.name}
      <div className="badge badge-secondary">{items.category}</div>
    </h2>
    <p>{items.title}</p>
    <div className="card-actions justify-between">
      <div className="mt-2 px-3 py-3 badge badge-outline">{ "$" +  items.price}</div>
      <div className=" px-3 py-4 cursor-pointer badge badge-outline hover:bg-pink-500 hover:text-white  duration-200 p-2">Buy Now</div>
    </div>
  </div>
</div>
        </div>
    )
}