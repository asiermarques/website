import react from "react";
import Link from "next/link";
import {articles} from "@/data";

export default function Writings () {
    return                     <section className={"writings"}>
        <h3>📝 Writings</h3>
        {articles.map(article => <article key={article.link}>
            <Link title={article.title} href={article.link}>
                <span>{article.date}</span>
                <h4>{article.title}</h4>
                <p>Published on {article.platform}</p>
            </Link>
        </article>)}
    </section>;
}