<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Validator;
use App\Models\Director;
use App\Http\Resources\Director as DirectorResource;
   
class DirectorController extends BaseController
{
    public function index()
    {
        $directors = Director::all();
        return $this->sendResponse(DirectorResource::collection($directors), 'Posts fetched.');
    }
    
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'apodo' => 'required',
            'imagen' => 'nullable'
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $director = Director::create($input);
        return $this->sendResponse(new DirectorResource($director), 'Post created.');
    }
   
    public function show($id)
    {
        $director = Director::find($id);
        if (is_null($director)) {
            return $this->sendError('Post does not exist.');
        }
        return $this->sendResponse(new DirectorResource($director), 'Post fetched.');
    }
    
    public function update(Request $request, Director $director)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'apodo' => 'required',
            'imagen' => 'nullable'
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $director->apodo = $input['apodo'];
        $director->imagen = $input['imagen'];
        $director->save();
        
        return $this->sendResponse(new DirectorResource($director), 'Post updated.');
    }
   
    public function destroy(Director $director)
    {
        $director->delete();
        return $this->sendResponse([], 'Post deleted.');
    }
}