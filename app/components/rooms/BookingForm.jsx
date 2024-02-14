"use client"


import { Input } from "@/components/ui/input"
import Counter from "../Counter"
import { useState } from "react"
import * as React from "react"
import { addDays, format } from "date-fns"

import { DateRange } from "react-day-picker"
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function BookingForm({ maxGuests, roomId, price }) {
    const [guests, setGuests] = useState(1)
    const [date, setDate] = useState({
        from: new Date,
        to: new Date,
    })

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append('guests', guests)
        formData.append('range', date)

        const resp = await fetch('/api/booking', {
            method: 'POST',
            body: formData
        })
    }

    return (
        <form onSubmit={handleSubmit} className="container mb-[200px]">
            <div>
                <span>Выберите дату</span>
                <div className={("grid gap-2")}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[300px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="mr-5">количество гостей:</p>
                <Counter maxGuests={maxGuests} guests={guests} setGuests={setGuests} />
            </div>
            <div className="flex gap-y-4 flex-col">
                <input hidden name="roomId" value={roomId} type="text" />
                <Input name="fio" type="text" placeholder="Ваше ФИО" />
                <Input name="phone" type="text" placeholder="Ваш телефон" />
                <Input name="email" type="text" placeholder="Ваш Email" />
                <Input name="passport" type="text" placeholder="Серия и номер паспорта" />
            </div>
            <Button className="mt-20 ">Оставить бронирование</Button>

        </form>
    )
}
