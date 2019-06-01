import * as React from 'react';
import {connect} from 'react-redux';
import {ADD_LINK, CLEAR_LINKS, addLink, clearLink, spaceMan} from './actions'

const PureLinkList = (prpos, state) => {
    return (
        <div>
            <button onClick ={prpos.addLink}>
            New Link
            </button>
            <button onClick={prpos.clearLink}>
            Clear Link
            </button>
            <h2>Links:</h2>
            {prpos.links.map((l,i) =>(
                <div key = {i}>
                {l.title} - {l.url}
                 </div>
            ))}

                <div>
                    <button onClick={prpos.loadSpace}>Load SpacePeople</button>
                    {prpos.spacePeople.map((p,i)=>(
                        <div key={i}>
                        {p.name}
                        </div>
                    ))}
                </div>

        </div>
    )
};

const mapStateToProps = state => {
    return {
        links: state.links
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addLink: ()=>
        dispatch(
        //     {
        //     type: ADD_LINK,
        //     link: {
        //         title: "Xccelerate",
        //         url: "https://www.xccelerate.co"
        //     }
        // } or import function 
        addLink('Xccelerate', "http://xccelerate.co")
        ),
        clearLink: ()=> 
        dispatch({
            type: CLEAR_LINKS
        }),
        loadSpace: ()=>
        dispatch(spaceMan())
    }
}

// const mapDispatchToProps = dispatch => {
// export const LinksList = connect(mapStateToProps)(PureLinkList)

export const LinksList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList);