export function TweetForm({ csrf_token }) {
    return (
        <form method="POST">
            <input type="hidden" name="_token" value={csrf_token} />
            <div className="sm:col-span-2">
                <label
                    htmlFor="message"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                    What's on your mind?
                </label>
                <textarea
                    name="content"
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
