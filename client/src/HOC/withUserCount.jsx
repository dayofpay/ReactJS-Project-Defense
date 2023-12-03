import { useEffect, useState } from "react";
import { getSiteMembersCount } from "../services/siteServices";

export default function withUserCount(Component) {
  return function EnhancedComponent(props) {
    const [userCount, setUserCount] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchUserCount = async () => {
        try {
          const response = await getSiteMembersCount();
          setUserCount(response);
        } catch (error) {
          setError(error);
        }
      };

      fetchUserCount();
    }, []);
    
    useEffect(() => {
      if (error) {
        console.error("Error fetching user count:", error);
        throw error;
      }
    }, [error]);

    return <Component {...props} userCount={userCount} />;
  };
}
