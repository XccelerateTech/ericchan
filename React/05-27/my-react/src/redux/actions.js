export const ADD_LINK = "ADD_LINK";

import axios from 'axios'

export const CLEAR_LINKS = "CLEAR_LINKS";

export const SPACE_MAN ="SPACE_MAN"

export function addLink(title, url){
    return{
    type:ADD_LINK,
    link: {
        title: title,
        url: url
    }
}
loqdLinks = ()=>{
    axios.get('https://www.reddit.com/r/programming.json').then((response)=>{
        console.log(response)
    })
}
}

export function clearLink (){
    return{
        type: CLEAR_LINKS
    }
}

export function spaceMan(array){
    return {
        type: SPACE_MAN,
        spaceArray : array
    }
}

export const LOAD_LINK_SUCCESS = "LOAD_LINK_SUCCESS";

export const LOAD_LINK_FAILURE = "LOAD_LINK_FAILURE"

export function loadLinkSuccess(link){
    return{
        type: LOAD_LINK_SUCCESS,
        links: links
    }
}

export function loadLinkFailure(){
    return{
        type: LOAD_LINK_FAILURE,
    }
}

export function loadLinkThunk(){
    return dispatch => {
        return axios('https://www.reddit.com/r/programming.json')
            .then(response =>{
                let links = res.data.data.children.map((link=>{
                    title: link.data.title,
                    url: link.data.url
                }))
                dispatch(loadLinkSuccess(links))
            })
            

    }
}