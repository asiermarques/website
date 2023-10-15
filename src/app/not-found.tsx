import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
        <h3>Content not found</h3>
        <p>Unfortunately, the content you are looking is not here anymore</p>
        <p>Go back <Link title={"Asier Marqués"} href={"/"}>to the home page</Link></p>
    </div>
  )
}
