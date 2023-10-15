import type { Metadata } from 'next'
import Introduction from "@/components/introduction";
import FollowMe from "@/components/followMe";
import Writings from "@/components/writings";

export const metadata: Metadata = {
    title: "Asier Marqués",
    description: "Software engineering direction and management"
}

export default function Home() {
  return <>
        <div className="container">
            <section className="professional">
                <Introduction/>
                <FollowMe/>
                <Writings/>
            </section>
        </div>
  </>
}
