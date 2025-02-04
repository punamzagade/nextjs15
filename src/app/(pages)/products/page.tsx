import Link from "next/link"

export default function Products(){
    
    return (
        <>
        <div>All products </div>
        <div className="flex flex-col text-[24px] font-bold">
        <Link href={`/products/1`}> product1</Link>
        <Link href={`/products/2`}> product2</Link>

        <Link href={`/products/3`} replace> product3</Link>
        <Link href={`/products/4`}> product4</Link>
        </div>
        </>
    )
}