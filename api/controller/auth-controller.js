export const signup=async(req,res)=>{

    try {
        res.send("Signup Controller");
        
    } catch (error) {
        console.log("Error in auth-controller signup", error.message);
    }
}