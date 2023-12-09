<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TweetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'content' => $this->content,
            'likes_count' => $this->likes_count,
            'replies_count' => $this->replies_count,
            'created_at' => $this->created_at->diffForHumans(),
            'user' => $this->user,
            'replies' => self::collection($this->replies),
            'liked' => $this->likes->contains('user_id', auth()->user()->id),
        ];
    }
}
