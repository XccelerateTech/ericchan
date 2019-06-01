import axios  from "axios";

export const ADD_LINK = "ADD_LINK";

export const CLEAR_LINKS = "CLEAR_LINKS";

export const SPACE_MAN = "SPACE_MAN"

// Exercise B
export const DELETE_LINK = "DELETE_LINK"

export function addLink(title, url) {
    return {
      type: ADD_LINK,
      link: {
        title: title,
        url: url
      }
    }
  }
  
  export function clearLink() {
    return {
      type: CLEAR_LINKS
    }
  }

  export function spaceMan (array){
      return {
          type: SPACE_MAN,
          spaceArray : array
      }
  }

  //Exercise B
  export function deleteLink(i) {
    return {
      type: DELETE_LINK,
      index: i
    }
  }

//declaration for actions
  export const LOAD_LINK_SUCCESS = 'LOAD_LINK_SUCCESS';


export const LOAD_LINK_FAILURE = 'LOAD_LINK_FAILURE';



export function loadLinkSuccess(links) {
  return {
    type: LOAD_LINK_SUCCESS,
    links: links
  }
}

//take no input only returns type
export function loadLinkFailure() {
  return {
    type: LOAD_LINK_FAILURE
  }
}


//a function that export another fucntion, now we can do some action
export function loadLink() {
  return (dispatch) => {

    // usually we hv to define get request, but not here
    return axios('https://www.reddit.com/r/programming.json').then((res) => {
      let threads = res.data;
      let links = threads.data.children.map((t) => ({
        title: t.data.title,
        url: t.data.url
      }));
      dispatch(loadLinkSuccess(links));
    }).catch((err) => {
      console.log('Failed', err);
      dispatch(loadLinkFailure());
    });
  };
}

loadlinks = () => {
  axios.get('https://www.reddit.com/r/programming.json').then ((response) => {
      console.log(response)
  })
}
