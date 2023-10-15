import react from "react";
import Link from "next/link";
import {findMyOn} from "@/data";

export default function FollowMe () {
    return <section className="follow-me">
        <div className="row justify-content-md-center">
            <p className={"col col-sm-10"}>You can also find me on <br className={"d-block d-sm-none"}/>
                {findMyOn.length > 1 && findMyOn.map((platform, index) =>
                    <><Link title={platform.name} key={platform.link} href={platform.link}>{platform.name}</Link>
                        {findMyOn.length > 1 && index === findMyOn.length-2 ? ", and" : ","} </>)}
                or book <Link title={"book a virtual meeting"} href={"https://calendly.com/asiermarques"}>a virtual coffee</Link>&nbsp;☕ in my calendar.</p>
            <div className="separation">
                * * *
            </div>
        </div>
    </section>;
}