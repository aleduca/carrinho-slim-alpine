<?php

namespace app\controllers;

class Cart extends Base
{
    public function index($request, $response)
    {
        return $this->getTwig()->render($response, $this->setView('site/cart'), [
            'title' => 'Cart',
        ]);
    }
}
