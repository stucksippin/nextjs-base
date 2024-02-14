'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function Form() {
    const [error, setError] = useState('')
    const router = useRouter()

    async function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const resp = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (resp?.error) {
            setError(true)
        } else if (!resp?.error) {
            router.push('/')
            router.refresh()
        }
        console.log({ resp })
    }
    return (
        <form onSubmit={submitHandler} className="border p-5 flex flex-col w-1/2 mx-auto">
            <input name='email' type="email" className="border p-3 my-3 " placeholder="Введите email" />
            <input name='password' type="password" className="border p-3 my-3 " placeholder="Введите пароль" />
            <button className="py-2 px-4 bg-green-300 w-fit mx-auto rounded-md">Sign in</button>
            {
                error && <p className='font-bold text-red-500'>Неправильные данные!</p>
            }
        </form>
    )
}
