<?php

namespace App\Http\Controllers;

use App\Http\Resources\TweetResource;
use App\Models\Tweet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TweetController extends Controller
{

    public function index()
    {
        $tweetQuery = Tweet::whereNull('parent_id')->with([
            'user', 'likes', 'replies' => fn ($query) => $query->with('user')->withCount('likes')
        ])->withCount('likes', 'replies');

        return Inertia::render('Home', [
            'tweets' => TweetResource::collection(
                $tweetQuery->latest()->paginate(10)
            ),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            "content" => "required|max:255",
            "parent_id" => "nullable|exists:tweets,id"
        ]);

        Tweet::create([
            "content" => $validated["content"],
            "user_id" => auth()->user()->id,
            "parent_id" => $validated['parent_id'] ?? null
        ]);

        return to_route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
}
