'use client'

export default function Form() {
    async function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            const resp = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password')
                })
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <form onSubmit={submitHandler} className="border p-5 flex flex-col w-1/2 mx-auto">
            <input type="email" name="email" className="border p-3 my-3 " placeholder="Введите email" />
            <input type="password" name="password" className="border p-3 my-3 " placeholder="Введите пароль" />
            <button className="py-2 px-4 bg-green-300 w-fit mx-auto rounded-md">Sign up</button>
        </form>
    )
}
