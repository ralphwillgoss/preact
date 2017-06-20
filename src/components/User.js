import { h } from 'preact';

export function User(props) {
    return (
        <div>
            <img src={props.image}/>
            <p>{props.name}</p>
        </div>
    );
}

export default User;