<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Tweet;

class LikeController extends Controller
{
    
    public function store(Tweet $tweet)
    {
        Like::create([
            "user_id" => auth()->user()->id,
            "tweet_id" => $tweet->id
        ]);

        return to_route('home');
    }

    public function destroy(Tweet $tweet)
    {
        Like::where([
            "user_id" => auth()->user()->id,
            "tweet_id" => $tweet->id
        ])->delete();

        return to_route('home');
    }

}
