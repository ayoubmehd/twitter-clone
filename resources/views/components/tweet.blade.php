<div class="overflow-hidden rounded-lg border">
    {{-- <a href="#"
        class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
        <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            loading="lazy" alt="Photo by Minh Pham"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    </a> --}}

    <div class="flex flex-col gap-2 p-4 lg:p-6">
        <span class="text-sm text-gray-400">

            {{ $tweet->created_at->diffForHumans() }}

        </span>

        <h2 class="text-xl font-bold text-gray-800">
            <a href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                {{ $tweet->user?->name ?? 'Anonymous' }}
            </a>
        </h2>

        <p class="text-gray-500">
            {{ $tweet->content }}
        </p>

        <div class="flex w-1/4">
            <button hx-get='{{ route('tweets.create', $tweet) }}' hx-target="#tweets-form-{{ $tweet->id }}" hx-swap="outerHTML" class="inline-flex w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Comment {{ $tweet->replies_count }}</title><path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7C5,5.89 5.9,5 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.9 12.75,23 12.5,23V23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z" /></svg>
                
            </button>
            <div class="w-6 flex justify-center">
                {{ $tweet->replies_count }}
            </div>
            <button hx-post="{{ route('tweets.like') }}" class="inline-flex w-6 h-6">
                {{-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart</title><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /></svg> --}}

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Like {{ $tweet->likes_count }}</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg>

            </button>
            <div class="w-6 flex justify-center">
                {{ $tweet->likes_count }}
            </div>
        </div>

        <div id="tweets-form-{{ $tweet->id }}"></div>

        <div id="replies-{{ $tweet->id }}"></div>
    </div> 
</div>