<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
// use Validator;
use App\Models\User;

Use Illuminate\Support\Facades\Log;

class AuthController extends BaseController
{
    public function signin(Request $request)
    {
        // Log::info('Esto es terrible');
        // $this->info('Chachiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii-login');
        error_log('Chachoooooooooooooooooooooooooooooooooooooooooooo-login');
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $authUser = Auth::user();
            // $success['token'] =  $authUser->createToken('MyAuthApp')->plainTextToken;
            $success['name'] =  $authUser->name;

            return $this->sendResponse($success, 'User signed in');
        } else {
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
        }
    }
    public function signup(Request $request)
    {
        // Log::info('Esto es terrible signup');
        // $this->info('Chachiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii-register');
        error_log('Chachoooooooooooooooooooooooooooooooooooooooooooo-register-nuevo');
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Error validation', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyAuthApp')->plainTextToken;
        $success['name'] =  $user->name;

        return $this->sendResponse($success, 'User created successfully.');
    }
}
