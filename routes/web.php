<?php

use App\Http\Controllers\DmController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TweetController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use App\Models\Tweet;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
require __DIR__.'/auth.php';

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/', [TweetController::class, 'index'])->name('home');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/u/{user}', [UserController::class, 'show'])->name('user.public-profile');
    Route::post('/u/{user}/follow', [UserController::class, 'follow'])->name('user.follow');
    Route::delete('/u/{user}/follow', [UserController::class, 'unfollow'])->name('user.unfollow');

    Route::get('/tweets/{tweet}', function (Tweet $tweet) {
        return view('components.tweet-form', [
            'url' => route('tweets.store', $tweet),
            'swap' => 'afterbegin',
            'target' => '#replies-' . $tweet->id,
        ]);
    })->name('tweets.create');

    Route::post("/tweets/{tweet?}", [TweetController::class, "store"])->name("tweets.store");

    Route::prefix('dm')->group(function () {
        Route::get('/{thread?}', [DmController::class, 'index'])->name('dm.index');
        Route::post('/{user}', [DmController::class, 'store'])->name('dm.store');
        Route::patch('/{thread}', [DmController::class, 'index'])->name('dm.update');
        Route::get('/{user}', [DmController::class, 'show'])->name('dm.show');
    });

    Route::post('/tweets/{tweet}/like', [LikeController::class, 'store'])->name('tweets.like');
    Route::delete('/tweets/{tweet}/like', [LikeController::class, 'destroy'])->name('tweets.like');
});

