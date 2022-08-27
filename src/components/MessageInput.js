import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { sendMessage } from '../Firebase';



function MessageInput({ roomId }) {
    const { user } = useAuth();
    
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(roomId, user, value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="fixed bottom-2 w-full max-w-[700px] flex px-4">
            <input
                type="text"
                placeholder="Enter a message"
                value={value}
                onChange={handleChange}
                className="grow border border-gray-400 outline-none px-3 py-1 mr-3 focus:shadow-lg"
                required
                minLength={1}
            />
            <button type="submit" disabled={value < 1} className="cursor-pointer px-4 py-2 bg-green-700 text-gray-50 rounded-md ">
                Send
            </button>
        </form>
    );
}
export { MessageInput };