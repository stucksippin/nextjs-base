'use client'



export default function UserInfo({ username, name, email, phone, website }) {

  return (
    <div>
      <p>{username}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{website}</p>
      <p>{phone}</p>
    </div>
  )
}