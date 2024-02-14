'use client'
import React, { useState } from 'react'

export default function RoomForm({ searchParams }) {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")



    async function handleClick(e) {
        e.preventDefault()
        const response = await fetch('/api/test', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                phone: phone
            })
        })
        const result = await response.json()
        console.log(result)
    }

    return (

        <form className='w-2/3 mx-auto border borded-green-100'>
            <h2 className='text-center text-3xl font-bold mb-5 mt-5'>Форма обратной связи</h2>
            <div className='flex flex-col items-center justify-center gap-x-16'>
                <p className='font-medium text-lg'>Оставьте ваши данные</p>


            </div >
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='block mx-auto w-2/3 mb-5 porder p-3 border rounded-lg mt-5' type='text' placeholder='Ваше имя' />
            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='block mx-auto w-2/3 mb-5 porder p-3 border rounded-lg' type='tel' list="tel-list" placeholder='Ваш телефон' />

            <div className='text-center'>
                <button
                    type='submit'
                    onClick={handleClick}
                    className='px-10 py-3 border mb-3 rounded-lg'>Отправить
                </button>
            </div>

        </form>

    )
}
