import { useEffect, useState } from "react"
import { getSiteMembersCount } from "../services/siteServices";

export default function withUserCount(Component){
    return function EnhancedComponent(props){
        const [userCount,setUserCount] = useState(0);

        useEffect(() => {
            const userList = async()=>{
                const response = await getSiteMembersCount();
                await setUserCount(response);
            }

            userList();
        },[userCount]);
        return <Component {...props} userCount={userCount} />;
    }
    
}