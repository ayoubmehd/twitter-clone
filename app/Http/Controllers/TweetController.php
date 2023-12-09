<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TweetController extends Controller
{

    public function index()
    {
        return Inertia::render('Home', [
            'tweets' => Tweet::with(['user', 'likes'])->latest()->paginate(50),
            'csrf_token' => csrf_token(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Tweet $tweet)
    {
        $validated = $request->validate([
            "content" => "required|max:255"
        ]);

        $tweet = Tweet::create([
            "content" => $validated["content"],
            "user_id" => auth()->user()->id,
            "parent_id" => $tweet?->id ?? null
        ]);

        return view("partails.tweets.show", [
            "tweet" => $tweet
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
}
