<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    protected $fillable = [
        "content",
        "user_id",
        "parent_id",
    ];

    use HasFactory;


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Tweet::class, "parent_id");
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
