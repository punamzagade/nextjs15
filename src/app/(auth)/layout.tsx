'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"



const navLinks=[
  {name:"Register",href:"/register"},
  {name:"Login",href:"/login"},
  {name:"Forgot Password",href:"/forgot-password"},

]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname=usePathname();
 
  return (
   <div>
    {navLinks.map((itm)=>{
          const isActive=pathname===itm.href || (pathname.startsWith(itm.href) && itm.href !=="/");
      return(
    
        <Link href={itm.href} key={itm.href} className={`mr-5 ${isActive ? 'font-bold' : 'text-blue-500' }`}>{itm.name}</Link>
        
      )
    })}
{children}
   </div>
  )
}
