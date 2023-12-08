import md5 from "md5";

export default function generateHash(string) {
    try {
        if (string) {
            let hash = md5(string)
            return hash;
        }
        throw new Error("Please specify a string to hash!!");
    } catch (error) {
        console.error('Error generating hash:', error);
        return "Error generating hash";
    }
}
