<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Tweet;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    
    public function store(Tweet $tweet)
    {
        Like::create([
            "user_id" => auth()->user()->id,
            "tweet_id" => $tweet->id
        ]);

        return response($tweet->likes()->count(), 201);
    }

    public function destroy(Tweet $tweet)
    {
        Like::where([
            "user_id" => auth()->user()->id,
            "tweet_id" => $tweet->id
        ])->delete();

        return response($tweet->likes()->count(), 201);
    }

}
