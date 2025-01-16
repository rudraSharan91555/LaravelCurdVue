<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::resource('todos',TodoController::class);

Route::post('register','AuthController@register');
Route::post('login','AuthController@login');

Route::group(['middleware'=>'jwt.verify'],function(){
    Route::get('user','AuthController@getUser');
    Route::resource('todos','TodoController');
});


