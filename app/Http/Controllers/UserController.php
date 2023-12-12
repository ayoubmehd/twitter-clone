<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return Inertia::render('User/PublicProfile', [
            'user' => $user->load('tweets', 'followers', 'following'),
            'canEdit' => auth()->check() && auth()->user()->id === $user->id,
            'tweets' => $user->tweets()->with('user')->latest()->paginate(10),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function follow(Request $request, User $user)
    {
        $user->following()->attach($request->user()->id);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function unfollow(Request $request, User $user)
    {
        $user->following()->detach($request->user()->id);

        return back();
    }
}
