import axios from "axios";

export const toggleTodo = (payload) => ({
     });
     
        export const newAction = () => ({
        type: "NEW_LIST"
        });

        export const setData = (actionType,responseData) =>({
            type:actionType,
            responseData:responseData
        })

        
        export const getDataExample = (url,action) =>{
           return(dispatch) => {
               axios.get(url)
               .then((response) => {
                   dispatch(setData(action,response.data))
               })  
         .catch((error) => {
            dispatch(setData(action,error))
         
        })
    
}

}
export const postDataExample =(url,action) => {
    return(dispatch) => {
        axios.post(url)
        .then((response) => {
            dispatch(setData(action,response.data))
        })
        .catch((error) => {
            dispatch(setData(action,error))
        })
    }
}