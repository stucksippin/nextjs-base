

import Link from 'next/link'
import React from 'react'




export default function RoomCard({ id, name, peopleMax, price, description, address }) {


    return (
        <div className='border rounded-xl w-80 h-[350px] p-5 bg-slate-100 relative'>

            <p className='font-bold flex justify-end mb-5'>{name}</p>
            <p>Максимальное кол-во гостей: {peopleMax}</p>

            <p>Адрес: {address}</p>
            <p>Описание: {description}</p>
            <p className='font-bold mb-5'>Цена: {price}$</p>
            <div className='p-2 border flex absolute bottom-5 right-5 hover:bg-blue-300 rounded-l'>
                <Link href={`/hotel/${id}`}>Подробнее</Link>
            </div>
        </div>
    )
}

