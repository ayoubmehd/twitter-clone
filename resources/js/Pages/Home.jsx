import Tweet from "@/Components/Domain/Tweet";
import { TweetForm } from "@/Components/Domain/TweetForm";
import Container from "@/Components/core/Container";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Home({ auth, tweets, csrf_token }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Home" />

            <Container>
                <TweetForm csrf_token={csrf_token} />
            </Container>

            <main className="bg-white py-6 sm:py-8 lg:py-12">
                <Container>
                    <div
                        className="grid gap-4 grid-cols-1 md:gap-6 xl:gap-8"
                        id="tweets"
                    >
                        {tweets.data.map((tweet) => (
                            <Tweet tweet={tweet} />
                        ))}
                    </div>
                </Container>
            </main>
        </AuthenticatedLayout>
    );
}
