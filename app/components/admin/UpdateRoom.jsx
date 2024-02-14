'use client'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'







export default function UpdateRoom({ id, name, peopleMax, price, address, description }) {

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/admin/rooms/update', {
            method: 'PATCH',
            body: formData
        })

        const result = await resp.json()

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container flex flex-col gap-y-5">
                <input type="text" name='id' defaultValue={id} hidden />
                <Input name="name" required type="text" placeholder="Название комнаты" defaultValue={name} />
                <Input name="maxPeople" required type="number" placeholder="Максимальное количество гостей" defaultValue={peopleMax} />
                <Input name="address" required type="text" placeholder="Адрес" defaultValue={address} />
                <Input name="price" required type="number" placeholder="Цена" defaultValue={price} />
                <Textarea name="description" required placeholder="Введите описание команты" defaultValue={description} />
                <div className="text-center">
                    <Button>Обновить комнату</Button>
                </div>
            </form>
        </div>
    )
}

