// ###### SERVER COMPONENT


// import Link from "next/link";


// export default async function ArticleDetails({params,searchParams}: {
//     params :Promise<{articleId : string}>;
//     searchParams : Promise<{lang?:"en" | "es" | "fr"}>;
// }){
//     const {articleId}=await params;
//     const {lang}=await searchParams;

//     return(
//         <>
//         <div className="my-5">articleDetails page {articleId}</div>
// <p className="mb-5 text-[24px] font-bold capitalize">Reading in {lang}</p>
//         <Link href={`/articles/${articleId}?lang=en`} >English</Link>
//         <Link href={`/articles/${articleId}?lang=fr`} >French</Link>
//         <Link href={`/articles/${articleId}?lang=es`} >Spanish</Link>


//         </>
//     )
// }




// Client component
'use client'
import Link from "next/link";
import { use } from "react";


export default function ArticleDetails({params,searchParams}: {
    params :Promise<{articleId : string}>;
    searchParams : Promise<{lang?:"en" | "es" | "fr"}>;
}){
    const {articleId}= use(params);
    const {lang}=use(searchParams);

    return(
        <>
        <div className="my-5">articleDetails page {articleId}</div>
<p className="mb-5 text-[24px] font-bold capitalize">Reading in {lang}</p>
        <Link href={`/articles/${articleId}?lang=en`} >English</Link>
        <Link href={`/articles/${articleId}?lang=fr`} >French</Link>
        <Link href={`/articles/${articleId}?lang=es`} >Spanish</Link>


        </>
    )
}