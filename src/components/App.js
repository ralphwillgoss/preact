import { h } from 'preact';
import User from './User';

const users = [
    {
        image: 'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png',
        name: 'google 1'
    },
    {
        image: 'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png',
        name: 'google 2'
    }
]

export function App () {
    return (
        <div class="app">
            {users.map(user => <User {...user} key={user.name} />)}
        </div>
    );
}

export default App;