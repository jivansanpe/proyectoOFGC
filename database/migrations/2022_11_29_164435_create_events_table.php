<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id('id');
            $table->string('nombre');
            $table->string('tipo');
            $table->string('lugar');
            $table->string('fecha');
            $table->string('horario');
            $table->string('imagen');
            $table->string('director');
            $table->timestamps();
            $table->foreign('director')
              ->references('apodo')->on('directors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
};
