//Higher Order Componen HOC - A component HOC that renders another component
//Reuse code
//Render hijacking
//Props manipulaton
//Abstract state


import React from 'react'
import ReactDOM from 'react-dom'


const info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponnent) =>{
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponnent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponnent) =>{
    return (props) =>(
        <div>
            {props.isAuthenticated?<WrappedComponnent {...props}/>: <p>Please, Authenticate</p>}
        </div>
    )
}
const AdminInfo = withAdminWarning(info)
const AuthInfo = requireAuthentication(info)
//ReactDOM.render(<AdminInfo isAdmin = {true} info = 'This is the info'/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated = {false} info = 'This is the info'/>, document.getElementById('app'))