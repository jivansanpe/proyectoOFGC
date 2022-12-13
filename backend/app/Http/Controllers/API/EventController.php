<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Validator;
use App\Models\Event;
use App\Http\Resources\Event as EventResource;
   
class EventController extends BaseController
{
    public function index()
    {
        $events = Event::all();
        return $this->sendResponse(EventResource::collection($events), 'Posts fetched.');
    }
    
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'nombre' => 'required',
            'tipo' => 'required',
            'lugar' => 'required',
            'fecha' => 'required',
            'horario' => 'required',
            'imagen' => 'nullable',
            'director_id' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $event = Event::create($input);
        return $this->sendResponse(new EventResource($event), 'Post created.');
    }
   
    public function show($id)
    {
        $event = Event::find($id);
        if (is_null($event)) {
            return $this->sendError('Post does not exist.');
        }
        return $this->sendResponse(new EventResource($event), 'Post fetched.');
    }
    
    public function update(Request $request, Event $event)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'nombre' => 'required',
            'tipo' => 'required',
            'lugar' => 'required',
            'fecha' => 'required',
            'horario' => 'required',
            'imagen' => 'nullable',
            'director_id' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $event->nombre = $input['nombre'];
        $event->tipo = $input['tipo'];
        $event->lugar = $input['lugar'];
        $event->fecha = $input['fecha'];
        $event->horario = $input['horario'];
        $event->imagen = $input['imagen'];
        $event->director_id = $input['director_id'];
        $event->save();
        
        return $this->sendResponse(new EventResource($event), 'Post updated.');
    }
   
    public function destroy(Event $event)
    {
        $event->delete();
        return $this->sendResponse([], 'Post deleted.');
    }
}