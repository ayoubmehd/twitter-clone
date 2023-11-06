<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">


    <script src="https://cdn.tailwindcss.com"></script>

    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
</head>

<body class="antialiased">
    <div class="relative min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        @if (Route::has('login'))
            <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                @auth
                    <a href="{{ url('/home') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Home</a>
                @else
                    <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

                    @if (Route::has('register'))
                        <a href="{{ route('register') }}"
                            class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                    @endif
                @endauth
            </div>
        @endif

        <x-container>
            <form hx-post="{{ route('tweets.store') }}" hx-target="#tweets" hx-swap="afterbegin">
                @csrf
                <div class="sm:col-span-2">
                    <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                        What's on your mind?
                    </label>
                    <textarea name="content" placeholder="Enter your message here"
                        class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                </div>

                <div class="flex items-center justify-between sm:col-span-2">
                    <button
                        class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                        Send
                    </button>
                </div>
            </form>
        </x-container>

        <main class="bg-white py-6 sm:py-8 lg:py-12">
            <x-container>

                <div class="grid gap-4 grid-cols-1 md:gap-6 xl:gap-8" id="tweets">
                    @foreach ($tweets as $tweet)
                    <!-- article - start -->
                    <x-tweet :tweet="$tweet" />
                    <!-- article - end -->
                    @endforeach
                </div>
            </x-container>
        </main>

    </div>
</body>

</html>
