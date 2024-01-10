async function Getdata() {

    const res = await fetch ('https://jsonplaceholder.typicode.com/posts/1')
    
    return res.json ()
    
    }
    
    export default async function Page1() {
      const data = await Getdata()
      return (
         <div> {data.title}</div>
      )
    }