<?php

use App\Http\Controllers\LikeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TweetController;
use App\Models\Tweet;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/tweets/{tweet}', function (Tweet $tweet) {
        return view('components.tweet-form', [
            'url' => route('tweets.store', $tweet),
            'swap' => 'afterbegin',
            'target' => '#replies-' . $tweet->id,
        ]);
    })->name('tweets.create');

    Route::post("/tweets/{tweet?}", [TweetController::class, "store"])->name("tweets.store");

    Route::get('/', [TweetController::class, 'index']);


    Route::post('/tweets/{tweet}/like', [LikeController::class, 'store'])->name('tweets.like');
    Route::delete('/tweets/{tweet}/like', [LikeController::class, 'destroy'])->name('tweets.unlike');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
