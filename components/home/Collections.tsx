import React from 'react'

const Collections = () => {
    const collectionData = [
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/markers.jpg?v=1746685858&width=535",
            name:"Markers",
        },
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/pen.jpg?v=1746685687&width=535",
            name:"Pens & Pencil",
        },
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/IMG-20200305-WA0036.jpg?v=1652974308&width=535",
            name:"Notebooks",
        },
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/key_chain_cutter_saftey_knife_the_blingspot_studio_5_1024x1024_c6e80523-14ca-4031-b0e0-6fb213bfeef8.png?v=1746686124&width=535",
            name:"Cutters",
        },
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/photo-1609775436218-78e51e5e61dd.jpg?v=1618769039&width=535",
            name:"Desk Clocks",
        },
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/photo-1609775436218-78e51e5e61dd.jpg?v=1618769039&width=535",
            name:"Desk organizers",
        },
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/Premium_Quality_Laptop_and_Office_Bags_8.jpg?v=1746686232&width=535",
            name:"Laptop Bags",
        },
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/stapler.jpg?v=1746686643&width=535",
            name:"Stapler",
        },
        {
            image:"https://www.thepaperworm.com/cdn/shop/collections/celebration.jpg?v=1746687014&width=535",
            name:"Gift Bags",
        }
    ]
  return (
    <div className='flex flex-col items-center py-6 container' data-aos="fade-up">
        <p className='text-2xl font-bold heading'>Our Collections</p>
        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 mt-[20px]'>
            {collectionData.map((item:any, index:any)=>{
                return(
                    <div key={index} className='flex flex-col w-auto h-auto'>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Collections