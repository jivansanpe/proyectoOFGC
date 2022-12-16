<?php
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
  
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\BlogController;
use App\Http\Controllers\API\EventController;
use App\Http\Controllers\API\DirectorController;
use App\Http\Controllers\API\RegistroController;
use App\Http\Controllers\API\UserController;
  
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::resource('events', EventController::class);
Route::resource('directors', DirectorController::class);

Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);
     
Route::middleware('auth:sanctum')->group( function () {
    Route::resource('blogs', BlogController::class);
    Route::resource('registros', RegistroController::class);
    Route::resource('users', UserController::class);
});
