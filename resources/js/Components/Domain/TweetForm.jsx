import { router } from "@inertiajs/react";
import { useForm } from "react-hook-form";

export function TweetForm({ csrf_token }) {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        router.post(route("tweets.store"), data);
        reset();
    };

    return (
        <form method="POST" className="pt-12" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="_token" value={csrf_token} />
            <div className="sm:col-span-2">
                <label
                    htmlFor="message"
                    className="mb-2 inline-block text-sm text-gray-800 dark:text-white sm:text-base"
                >
                    What's on your mind?
                </label>
                <textarea
                    {...register("content")}
                    placeholder="Enter your message here"
                    className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                ></textarea>
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
                <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Send
                </button>
            </div>
        </form>
    );
}
