<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Http\Resources\User as UserResource;
   
class UserController extends BaseController
{
    public function index()
    {
        $users = User::all();
        return $this->sendResponse(UserResource::collection($users), 'Posts fetched.');
    }
    
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $user = User::create($input);
        return $this->sendResponse(new UserResource($user), 'Post created.');
    }
   
    public function show($id)
    {
        $user = User::find($id);
        if (is_null($user)) {
            return $this->sendError('Post does not exist.');
        }
        return $this->sendResponse(new UserResource($user), 'Post fetched.');
    }
    
    public function update(Request $request, User $user)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);
        if($validator->fails()){
            return $this->sendError($validator->errors());       
        }
        $user->name = $input['name'];
        $user->email = $input['email'];
        $user->password = $input['password'];
        $user->save();
        
        return $this->sendResponse(new UserResource($user), 'Post updated.');
    }
   
    public function destroy(User $user)
    {
        $user->delete();
        return $this->sendResponse([], 'Post deleted.');
    }
}