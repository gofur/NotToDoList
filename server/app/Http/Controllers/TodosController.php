<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(){
      return "Todos {GET}";
    }

    public function store(Request $request){
      return "Todos {POST}". $request->name;
    }

    public function update(Request $request, $id){
      return "Todos {PATCH:id} ".$id. $request->name;
    }

    public function view($id){
      return "Todos {GET:id}". $id;
    }

    public function delete($id){
      return "Todos {DELETE:id}";
    }

}
