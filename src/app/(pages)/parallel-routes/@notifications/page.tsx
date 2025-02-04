import { Card } from "@/app/components/Card";
import Link from "next/link";

export default function Notifications(){
    return (
        <Card>
            <div>Notifications</div>
            <Link href={"/parallel-routes/archive"}>Archive</Link>

            </Card>
    )
}