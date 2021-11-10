const reducer= (state = [], action) => {

    switch (action.type) {
    
    case "TOGGLE_TODO": 
    console.log("reducer", action.payload)
    return {
    testingredux: action.payload
    }
     case "NEW_LIST":
    return {
    test1: "testhgjhsdg"
    }

    case "Example1":
        return{
            responseData:action.responseData
        }
    
        case "Example2":
            return{
                response2:action.responseData
            }
            case "Example3":
                return{
                response3:action.responseData
        }
    default:
    return state;
}
    };
    
    export default reducer