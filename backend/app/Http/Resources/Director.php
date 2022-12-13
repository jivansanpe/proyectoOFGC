<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Director extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'apodo' => $this->apodo,
            'imagen' => $this->imagen,
            'created_at' => $this->created_at->format('m/d/Y'),
            'updated_at' => $this->updated_at->format('m/d/Y')
        ];
    }
}