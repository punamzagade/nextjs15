
const getRandomNumber=()=>{
  return Math.round(Math.random()*10);
}
export default function productDetailsLayout({children,}:{
    children : React.ReactNode;
}){
  if(getRandomNumber()===1){
    throw new Error("error in review Id");
    }
return (
  <div>
    {children}
    <h2>Featured products</h2>
    <div>this layout is represent the productId folder</div>
  </div>
)
}