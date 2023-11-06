<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;

class TweetController extends Controller
{

    public function index()
    {
        return view("home", [
            "tweets" => Tweet::latest()->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            "content" => "required|max:255"
        ]);

        $tweet = Tweet::create([
            "content" => $validated["content"],
            "user_id" => 1
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
