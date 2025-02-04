export default async function blogPage(){
   await new Promise ((resolve)=>{setTimeout(()=>{
        resolve("intentional delay")
    },2000)})
    return (
        <div>
        <h1>my blog page</h1>
    </div>
    )
}