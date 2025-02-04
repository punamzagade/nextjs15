import { Metadata } from "next";
import { notFound } from "next/navigation";
type Props={
    params:Promise<{id:string}>;
};

export const generateMetadata=async({params}:Props): Promise<Metadata> => {
const id=(await params).id;
const title=await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`iPhone ${id}`)
    })
})
return{
    title:`Product ${title}`,
}
}

export default async function Products({params}:Props){
    const {id}=await params;
    if(Number(id) ===100){
       notFound();
    }
    
    return (
        <div>products list page {id}</div>
    )
}