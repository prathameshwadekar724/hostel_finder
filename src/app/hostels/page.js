import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { getHostels, getImages } from '@/api/api';


export default async function page({searchParams}) {
    const location = await searchParams;;
    const hostels = await getHostels(location);
    console.log(location.location);
    console.log(hostels.local_results);
    const hostelWithImages = await Promise.all(hostels.local_results?.map(async(h)=>{
        const imageUrl = await getImages(h.photos_link);
        return {...h, firstImage: imageUrl};
    }));
  return (
    <main className='p-6 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>
            Hostel in <span className='text-blue-500'>{location.location}</span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {hostelWithImages.map((h)=>(
                <Link key={h.data_id} href={`/hostel/${h.data_id}?lat=${h.gps_coordinates.latitude}&lng=${h.gps_coordinates.longitude}`}
                className='group border bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300'>
                    <Image
                    src={h.firstImage}
                    alt='Image'
                    width={200}
                    height={200}
                    className='h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <div className='p-4'>
                        <h3 className='font-bold text-xl'>{h.title}</h3>
                        <p>{h.types}</p>
                        <p className='text-gray-600 mt-1'>{h.address}</p>
                        <div className='mt-3 flex justify-between items-center'>
                            <span className='text-yellow-500 font-semibold'>
                                ⭐ {h.rating}
                            </span>
                            <span className='text-sm text-gray-500'>
                                {h.reviews} Reviews
                            </span>
                        </div>
                        <p className='mt-2 text-blue-600 text-sm underline cursor-pointer'>
                            Viwew Details
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    </main>
  )
}
