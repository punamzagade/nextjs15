export default async function AllDocs({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } =  await params; // Await params here
    console.log("Params:", slug);
let dynamicText;

if(slug?.length===2){
    dynamicText=<h1>viewing docs for {slug[0]} and concept {slug[1]}</h1>
}else if(slug?.length===1){
    dynamicText=<h1>Viewing docs for {slug[0]}</h1>
}else{
    dynamicText=<h1>docs for homepage</h1>
}
    return (
        <div>{dynamicText}</div>
    );
}
