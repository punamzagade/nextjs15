import { notFound, redirect } from "next/navigation";
// const getRandomNumber=()=>{
//     return Math.round(Math.random()*10);
// }
export default async function ReviewDetails({params}:{params:Promise<{id:string,reviewId:string}>}){
    const {id,reviewId}=await params; 
    if(Number(id)===100){
          notFound();
        redirect("/products")
       }
    //    console.log(getRandomNumber())
    //    if(getRandomNumber()===1){
    //    throw new Error("error in review Id");
    //    }
    return (
        <div>Review details {reviewId} of product {id}</div>
    )
}