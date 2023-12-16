import Tweet from "@/Components/Domain/Tweet";
import Container from "@/Components/core/Container";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function PublicProfile({ auth, user, canEdit, tweets, isFollowed }) {
    const [openReplyForm, setOpenForm] = useState(-1);

    const updateOpenForm = (id) => {
        if (openReplyForm === id) {
            setOpenForm(-1);
        } else {
            setOpenForm(id);
        }
    }

    const follow = () => {
        router.post(route('user.follow', user));
    }

    const unfollow = () => {
        router.delete(route('user.follow', user));
    }    

    return (
        <Authenticated user={auth.user}>
            <Container className="py-12">
                <div className="w-full rounded-xl p-12 shadow-2xl shadow-blue-200 dark:shadow-zinc-800 bg-white dark:bg-gray-800 dark:text-white">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        <div className="grid-cols-1 lg:col-span-3">
                            <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
                                <svg
                                    id="logo-39"
                                    width={50}
                                    height={40}
                                    viewBox="0 0 50 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
                                        fill="#A5B4FC"
                                        className="ccompli2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
                                        fill="#4F46E5"
                                        className="ccustom"
                                    />
                                    <path
                                        d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
                                        fill="#A5B4FC"
                                        className="ccompli2"
                                        fillOpacity="0.3"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-9">
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-100">{user.name}</h2>
                                <p className="mt-2 font-semibold text-zinc-700 dark:text-zinc-100">@{user.id}</p>
                                <p className="mt-4 text-zinc-500">
                                    I am a Front End Developer and UI/UX Designer
                                </p>
                            </div>
                            <div className="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
                                <div>
                                    <p className="font-bold text-zinc-700 dark:text-zinc-100">{user.tweets.length}</p>
                                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Tweets</p>
                                </div>
                                <div>
                                    <p className="font-bold text-zinc-700 dark:text-zinc-100">{user.followers.length}</p>
                                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Followers</p>
                                </div>
                                <div>
                                    <p className="font-bold text-zinc-700 dark:text-zinc-100">{user.following.length}</p>
                                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Following</p>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {
                                    canEdit ?
                                        <Link href={route('profile.edit')} className="w-full text-center rounded-xl border-2 border-blue-500 dark:border-blue-950 bg-white px-3 py-2 font-semibold text-blue-500 dark:text-blue-950 hover:bg-blue-500 hover:text-white">
                                            Edit
                                        </Link>
                                        :
                                        <button onClick={isFollowed ? unfollow : follow} className="w-full rounded-xl border-2 border-blue-500 dark:border-blue-950 bg-white px-3 py-2 font-semibold text-blue-500 dark:text-blue-950 hover:bg-blue-500 hover:text-white">
                                            { isFollowed ? 'Unfollow' : 'Follow' }
                                        </button>

                                }
                                <button className="w-full rounded-xl border-2 border-blue-500 dark:border-blue-950 bg-white px-3 py-2 font-semibold text-blue-500 dark:text-blue-950 hover:bg-blue-500 hover:text-white">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <Container className="pb-12">
                <div className="grid gap-4 grid-cols-1 md:gap-6 xl:gap-8">
                    {tweets.data.map((tweet) => (
                        <Tweet
                            tweet={tweet}
                            key={tweet.id}
                            replyForm={
                                openReplyForm === tweet.id && (
                                    <TweetForm parent_id={tweet.id} />
                                )
                            }
                            onReply={() => updateOpenForm(tweet.id)}
                        />
                    ))}
                </div>
            </Container>

        </Authenticated>
    );
}