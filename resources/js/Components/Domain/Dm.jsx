import { router } from "@inertiajs/react";
import { useForm } from "react-hook-form";

function DmParticipant({ name, avatar, username, status }) {
    return (
        <>
            <img className="object-cover w-10 h-10 rounded-full"
                src={avatar} alt={username} />
            <span className="block ml-2 font-bold text-gray-600">{name}</span>
            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
        </>
    )
}

/**
 *
 * @param {{search: React.JSX, user:{name: string, avatar: string}}} props
 * @returns
 */
export function DmHeader(props) {
    const { search, user } = props;

    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            {user ? <DmParticipant {...user} /> : search}
        </div>
    )
}

/**
 *
 * @param {'send' | 'recived'} type
 * @returns
 */
export function getDmMessageClass(type) {
    if (type === 'recived') {
        return {
            container: "flex justify-start",
            message: "text-gray-300 bg-gray-800",
        };
    } else {
        return {
            container: "flex justify-end",
            message: "text-gray-700 bg-gray-100",
        };
    }
}

/**
 *
 * @param {{type: 'send' | 'recived', content: string}} props
 * @returns
 */
export function DmMessage({ type = 'sent', content }) {
    const { container, message } = getDmMessageClass(type);

    return (
        <div className={container}>
            <div className={"relative max-w-xl px-4 py-2 rounded shadow ".concat(message)}>
                <span className="block">{content}</span>
            </div>
        </div>
    )
}

export function DmMessages() {
    return (
        <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
            <ul className="space-y-2">
                <DmMessage type="recived" content="Hi" />
                <DmMessage type="send" content="Hiii" />
                <DmMessage type="send" content="how are you?" />
                <DmMessage type="recived" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
            </ul>
        </div>
    )
}

/**
 *
 * @param {{onSubmit: (data: {message: string}) => void}} props
 * @returns
 */
export function DmForm({ onSubmit }) {
    const { register, handleSubmit, reset } = useForm();

    return (
        <form method="POST" className="flex items-center justify-between w-full p-3 border-t border-gray-300"
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset()
            })}>
            {/* <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
            </button> */}

            <textarea
                {...register("message")}
                cols="30" rows="3" placeholder="Message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-lg outline-none focus:text-gray-700"
                required></textarea>
            {/* <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            </button> */}
            <button type="submit">
                <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
            </button>
        </form>
    )
}


export default function DmContainer({ className = '', header = <DmHeader />, messages = <DmMessages />, form = <DmForm /> }) {
    return (
        <div className={"w-full ".concat(className)}>
            {header}
            {messages}
            {form}
        </div>
    )
}
