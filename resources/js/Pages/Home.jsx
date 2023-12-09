import Tweet from "@/Components/Domain/Tweet";
import { TweetForm } from "@/Components/Domain/TweetForm";
import Container from "@/Components/core/Container";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Home({ auth, tweets, csrf_token }) {
    const [openReplyForm, setOpenForm] = useState(-1);

    const updateOpenForm = (id) => {
        if (openReplyForm === id) {
            setOpenForm(-1);
        } else {
            setOpenForm(id);
        }
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />

            <Container className="py-12">
                <TweetForm />
            </Container>
            <Container>
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
        </AuthenticatedLayout>
    );
}
