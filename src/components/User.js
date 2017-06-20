import { h } from 'preact';

export function User(props) {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    );
}

export default User;
