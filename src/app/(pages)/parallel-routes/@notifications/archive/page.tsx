import { Card } from "@/app/components/Card";
import Link from "next/link";

export default function Archive(){
    return (
        <Card>
            <div>Archived Notifications</div>
            <Link href={"/parallel-routes"}>Default Notifications</Link>

            </Card>
    )
}