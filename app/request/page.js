import React from 'react'
import RoomForm from '../components/rooms/RoomForm'

export default function RequestPage({ searchParams }) {
    return (
        <div>

            <RoomForm searchParams={searchParams} />

        </div>
    )
}
