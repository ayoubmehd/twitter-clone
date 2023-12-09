<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;

class TweetController extends Controller
{

    public function index()
    {
        return view("home", [
            "tweets" => Tweet::whereParentId(null)->withCount('likes')->withCount('replies')->latest()->get()
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
