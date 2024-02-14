'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


import { useState } from "react"
import AddRoomForm from "../rooms/AddRoomForm"
import DeleteRoomButton from "../rooms/DeleteRoomButton"
import Link from "next/link"


export default function RoomsAdmin({ rooms }) {

    const [Rooms, setRooms] = useState(rooms)

    return (
        <>

            <div className="flex justify-end">
                <Dialog>
                    <DialogTrigger asChild className="mb-10">
                        <Button>Добавить комнату</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-center mb-5">Добавить комнату</DialogTitle>
                            <DialogDescription>
                                <AddRoomForm setRooms={setRooms} />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

            <Table>

                <TableHeader>

                    <TableRow >

                        <TableHead>ID</TableHead>
                        <TableHead>Комната</TableHead>
                        <TableHead>Max 👨</TableHead>
                        <TableHead>Цена</TableHead>
                        <TableHead>Адрес</TableHead>
                        <TableHead>Действия</TableHead>

                    </TableRow>

                </TableHeader>


                <TableBody>

                    {
                        Rooms.map((room) => (
                            <TableRow key={room.id}>
                                <TableCell>{room.id}</TableCell>
                                <TableCell>{room.name}</TableCell>
                                <TableCell>{room.peopleMax}</TableCell>
                                <TableCell>{room.price}</TableCell>
                                <TableCell>{room.address}</TableCell>
                                <TableCell className="flex justify-between">

                                    <DeleteRoomButton id={room.id} />
                                    <Link href={`/admin/rooms/${room.id}`} className="p-2 border">Изменить комнату</Link>

                                </TableCell>
                            </TableRow>
                        ))
                    }


                </TableBody>

            </Table>
        </>
    )
}