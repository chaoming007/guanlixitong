const stateDefault={}

function reducerFun(state=stateDefault,action){
    let {type}=action;
    switch(type){
        case 'add':
            return Object.assign({},state);
            break;
        default:
            return state;
    }

}

export default reducerFun
