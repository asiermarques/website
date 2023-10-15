import Link from "next/link";
import {articles} from "@/data";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Asier Marqués",
    description: "Software engineering direction and management"
}

export default function Home() {
  return <>
        <div className="container">
            <section className="professional">
                    <section className="introduction row ">
                        <div className="col-12">
                            <p>I&apos;m a results-oriented professional <strong>building and leading high-performance software engineering teams</strong>, including international, distributed, remote, and outsourced members.</p>
                            <p>My main passion is contributing to people&apos;s growth by <strong>coaching and mentoring engineers, leaders, and managers</strong>.</p>
                            <Link href={"https://linkedin.com/in/asier"} className="btn btn-lg btn-outline-secondary">More on Linkedin</Link>
                        </div>
                    </section>
                    <section className={"writings"}>
                        <h3>Writings</h3>
                        {articles.map(article => <article key={article.link}>
                            <Link href={article.link}>
                                <span>{article.date}</span>
                                <h4>{article.title}</h4>
                                <p><span className={"badge text-bg-secondary"}>{article.type}</span> published on {article.platform}</p>
                            </Link>
                        </article>)}
                    </section>
            </section>
        </div>
  </>
}
