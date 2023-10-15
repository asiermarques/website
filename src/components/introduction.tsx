import react from "react";
import Link from "next/link";

export default function Introduction () {
    return <section className="introduction">
        <div>
            <p>I&apos;m a results-oriented professional
                <strong>building and leading high-performance software engineering teams</strong>
                <span className={"d-none d-sm-inline"}>, including international, distributed, remote, and outsourced members</span>.
            </p>
            <p>My ultimate goal is to contribute to people&apos;s growth by <strong>coaching and mentoring engineers, leaders, and managers</strong>.</p>
            <Link href={"https://linkedin.com/in/asier"} className="btn btn-lg btn-outline-primary">Find me on Linked<span className="badge linkedin">in</span></Link>
        </div>
    </section>;
}