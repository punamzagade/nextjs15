import Link from "next/link";

export default function App(){
    return (
    <div>
        <h1>Homepage</h1>
        <div className="flex gap-2">
           <Link href="/blog">Blog</Link>
           <Link href="/products">Product</Link>
           <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
           <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>

        </div>
    </div>
    )
}