import { auth, currentUser } from "@clerk/nextjs/server"

export default async function Dashboard(){
    const authObj=auth();
    const userObj=currentUser();
    console.log({authObj,userObj});
    return (
        <div>dashboard</div>
    )
}