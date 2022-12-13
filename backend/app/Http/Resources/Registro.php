<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Registro extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'evento_id' => $this->evento_id,
            'usuario_id' => $this->usuario_id,
            'created_at' => $this->created_at->format('m/d/Y'),
            'updated_at' => $this->updated_at->format('m/d/Y')
        ];
    }
}