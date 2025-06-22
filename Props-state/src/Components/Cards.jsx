import React from 'react';

function Cards({ name, artist, image,added,handleClick,index}) {
  return (
    <div className="w-60 h-35 bg-zinc-100 p-4 rounded-md pb-16 relative overflow-visible">
      <div className="flex items-center">
        <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="ml-3">
          <h3 className="font-semibold leading-none text-xl">{name}</h3>
          <h6 className="text-sm">{artist}</h6>
        </div>
      </div>
      <button 
      onClick={() => handleClick(index)}
      className={`px-4 py-3 whitespace-nowrap ${added === false ? "bg-orange-600" : "bg-teal-700"} text-white absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 rounded-full shadow-lg`}>
        {added === false ? "Add to Favourites" : "Added"}
      </button>
    </div>
  );
}

export default Cards;
