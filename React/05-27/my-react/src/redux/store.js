import {createStore} from 'redux';
import { rootReducer} from './reducers'

// const rootReducer = state => {
//     return {
//         links: [{
//             title: "Google", url : "https://www.google.com"
//         },
//     {title: "Google", url : "https://www.yahoo.com"}
// ]
//     }
// }

export const store = createStore(rootReducer);