import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
        <h1>Content not found</h1>
        <p>You can go to the <Link title={"Asier Marqués"} href={"/"}>Home</Link></p>
    </div>
  )
}
