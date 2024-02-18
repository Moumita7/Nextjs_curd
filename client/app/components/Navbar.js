import Link from "next/link"


const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"20px"}}>
    {/* <Link href="/">Home</Link> */}
    <Link href="/read">Read</Link>
    <Link href="/create">Create</Link>
   </div>
  )
}

export default Navbar