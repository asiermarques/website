import Link from "next/link";
import {articles, findMyOn} from "@/data";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Asier Marqués",
    description: "Software engineering direction and management"
}

export default function Home() {
  return <>
        <div className="container">
            <section className="professional">
                    <section className="introduction">
                        <div>
                            <p>I&apos;m a results-oriented professional <strong>building and leading high-performance software engineering teams</strong><span className={"d-none d-sm-inline"}>, including international, distributed, remote, and outsourced members</span>.</p>
                            <p>My ultimate goal is to contribute to people&apos;s growth by <strong>coaching and mentoring engineers, leaders, and managers</strong>.</p>
                            <Link href={"https://linkedin.com/in/asier"} className="btn btn-lg btn-outline-primary">Find me on Linked<span className="badge linkedin">in</span></Link>
                        </div>
                    </section>
                    <section className="follow-me">
                        <div className="row justify-content-md-center">
                            <p className={"col col-sm-10"}>You can also find me on <br className={"d-block d-sm-none"}/>
                                {findMyOn.map((platform, index) =>
                                <><Link title={platform.name} key={platform.link} href={platform.link}>{platform.name}</Link>{findMyOn.length > 1 && index === findMyOn.length-2 ? ", and" : ","} </>) }
                                or book <Link title={"book a virtual meeting"} href={"https://calendly.com/asiermarques"}>a virtual coffee</Link>&nbsp;☕ in my calendar.</p>
                            <div className="separation">
                                * * *
                            </div>
                        </div>
                    </section>
                    <section className={"writings"}>
                        <h3>📝 Writings</h3>
                        {articles.map(article => <article key={article.link}>
                            <Link title={article.title} href={article.link}>
                                <span>{article.date}</span>
                                <h4>{article.title}</h4>
                                <p>Published on {article.platform}</p>
                            </Link>
                        </article>)}
                    </section>
            </section>
        </div>
  </>
}
