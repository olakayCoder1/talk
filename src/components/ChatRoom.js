import { Link, useParams , useNavigate} from 'react-router-dom';
import { chatRooms } from '../data/ChatRooms'
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';
import { BsChevronLeft} from 'react-icons/bs'


function ChatRoom() {
    const {id} = useParams();
    const navigate = useNavigate()

    const room = chatRooms.find((x) => x.id === id);
    if (!room) {
        // TODO: 404
        navigate('/')
    }
    return (
        <div className=' w-full  border h-screen'>
            <div className='w-full max-w-[700px] mx-auto'>
                <div className=' w-full h-16 bg-gray-900 flex justify-between items-center text-gray-400 px-4'>
                    <div className=' flex items-center gap-6'>
                        <p onClick={()=>navigate(-1)} className='p-2 rounded-full bg-gray-300 cursor-pointer'><BsChevronLeft className='text-gray-700 text-base font-bold'/></p>
                        <h2 className=' text-cente text-xl font-bold text-gray-400'>{room.title}</h2>
                    </div>
                    <h3 className='text-base font-bold'>Olanrewaju</h3>
                </div>
                <div className="messages-container">
                    <MessageList roomId={room.id} />
                    <MessageInput roomId={room.id} />
                </div>
            </div>
            
        </div>
    );
}

export default ChatRoom
