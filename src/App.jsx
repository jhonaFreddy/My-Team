import Card from './components/Card'
import React from 'react';


function TeamPage() {
  const images = [
    { src: '/Photos/photo1.png', sideText: 'PRODUCT OWNER', personName: 'Bill Mahoney' },
    { src: '/Photos/photo2.png', sideText: 'ART DIRECTOR', personName: 'Saba Cabrera' },
    { src: '/Photos/photo3.png', sideText: 'TECH LEAD', personName: 'Shae Le' },
    { src: '/Photos/photo4.png', sideText: 'UX DESIGNER', personName: 'Skylah Lu' },
    { src: '/Photos/photo5.png', sideText: 'DEVELOPER', personName: 'Griff Richards' },
    { src: '/Photos/photo6.png', sideText: 'DEVELOPER', personName: 'Stan John' },
  ];

  return (
    <main className="w-full px-5 flex flex-col items-center py-2 sm:overflow-hidden h-screen">

      <div className="text-center mb-8 sm:flex w-full">
        <h1 className="text-2xl font-bold sm:w-2/4">The creative crew</h1>
        <div className='flex flex-col items-start md:px-10 lg:px-20  sm:w-2/4'>
        <h2 className='text-xs font-bold'>HO WE ARE</h2>
        <p className='md:w-full text-xs text-left'>We are a team of creatively diverse, driven innovative individual working in various locations around the world.</p>
        </div>
        
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 sm:mt-5 mt-10 md:h-3/4 md:w-2/4 lg:w-2/4 lg:mt-5  mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              relative p-0 w-full flex flex-col items-center justify-center h-2/4
              ${index % 2 === 1 ? 'mt-16' : 'mt-0'}   
              ${index === 1 || index === 4 ? 'sm:mt-12' : 'sm:mt-0'} 
            `}
          >
            <Card
              imageSrc={image.src}
              altText={`Imagen ${index + 1}`}
              sideText={image.sideText}
              personName={image.personName}
            />
          </div>
        ))}
      </div>
    </main>
  );
}



export default TeamPage;

