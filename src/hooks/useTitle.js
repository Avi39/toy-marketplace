import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `AnimalToys Stock || ${title}`;
    },[title])
}
export default useTitle;