<div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
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

        <div>
            
        </div>
    </div> 
</div>