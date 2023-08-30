const validCode=(code)=>{
    if(code>=400 && code<=500){
        return true;
    }

    return false;
}

module.exports={validCode}