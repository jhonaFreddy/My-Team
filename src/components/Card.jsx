function Card({ imageSrc, altText, sideText, personName }) {
    return (
        <div className="flex items-center p-0 rounded-lg ">
          <div>
          <img src={imageSrc} alt={altText} className="w-32 h-52 object-cover mb-0 " />
          <h3 className=" font-bold">{personName}</h3>
          </div>
          <div className=' h-full'>
          <p className="text-gray-500 [writing-mode:vertical-rl] text-xs
          
          ">{sideText}</p>
  
          </div>
      </div> 
  
      
  )} export default Card;