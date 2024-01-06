<?php

namespace App\Http\Controllers;

use App\Models\User;
use Cmgmyr\Messenger\Models\Message;
use Cmgmyr\Messenger\Models\Participant;
use Cmgmyr\Messenger\Models\Thread;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DmController extends Controller
{

    public function index(int $threadId = null)
    {
        $threads = Thread::forUser(auth()->id())->with('users')->latest('updated_at')->cursorPaginate(10);

        $thread = match ($threadId) {
            null => null,
            default => Thread::find($threadId),
        };

        return Inertia::render('Dm/Index', [
            'threads' => $threads,
            'thread' => $thread,
        ]);
    }

    public function store(Request $request, User $user)
    {

        $thread = Thread::create();

        Message::create([
            'thread_id' => $thread->id,
            'user_id' => auth()->id(),
            'body' => $request->message,
        ]);

        Participant::create([
            'thread_id' => $thread->id,
            'user_id' => auth()->id(),
            'last_read' => now(),
        ]);

        $thread->addParticipant($user->id);
        // $thread->addParticipant(auth()->id());

        return redirect()->route('dm.show', $thread);
    }


    public function update(Request $request, Thread $thread)
    {

        Message::create([
            'thread_id' => $thread->id,
            'user_id' => auth()->id(),
            'body' => $request->message,
        ]);

        Participant::firstOrCreate([
            'thread_id' => $thread->id,
            'user_id' => auth()->id(),
            'last_read' => now(),
        ]);

        return to_route('dm.show', $thread);
    }
}
