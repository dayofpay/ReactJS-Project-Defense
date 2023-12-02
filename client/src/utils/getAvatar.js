
import generateHash from "./hash.js";
export default function getAvatar(email){
    if(email){
        let toLower = String(email).toLowerCase();
        let getHash = generateHash(toLower);
        return getHash;
    }

    return "Please specify email address !!";
}