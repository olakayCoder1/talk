import {chatRooms} from '../data/ChatRooms'
import { Link} from 'react-router-dom';


function Landing() {
    return (
        <div className='h-screen w-full bg-gray-900 text-gray-400'>
            <div className=' w-full text-center py-4 border-b border-gray-600'>
            <h1 className=' text-2xl font-bold text-gray-50 mx-auto'>talkTwoMe</h1>
            </div>
            <div className=' w-full  max-w-[450px] mx-auto flex flex-col gap-4'>
                <h2 className=' text-sm font-medium text-gray-500 p-4'>Choose a Chat Room</h2>
                <ul className="px-3 flex flex-col gap-3">
                    {chatRooms.map((room) => (
                        <li key={room.id} className=' text-base font-medium hover:text-blue-600'>
                            <Link to={`/room/${room.id}`}>{room.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { Landing };   