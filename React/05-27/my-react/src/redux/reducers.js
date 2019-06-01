import {ADD_LINK, CLEAR_LINKS, spaceMan} from './actions'

const initalState = {
        links: [{
            title: "Google", url : "https://www.google.com"
        },
    {title: "Google", url : "https://www.yahoo.com"}
],
spacePeople: []
    }

export function rootReducer(state = initalState, action){
    switch(action.type){
        case ADD_LINK:
            return {
                links:
                state.links.concat([action.link])
            };
            case CLEAR_LINKS:
            return {
                links: []
            };
            case SPACE_MAN:
                return{
                    spacePeople:
                    state.spacePeople.concat([action.spaceArray])
                }
            default: return state;
    }
}