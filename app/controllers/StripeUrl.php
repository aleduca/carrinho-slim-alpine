<?php

namespace app\controllers;

class StripeUrl extends Base
{
    public function succes($request, $response)
    {
        return $this->getTwig()->render($response, $this->setView('site/success'), [
            'title' => 'Success',
        ]);
    }

    public function cancel($request, $response)
    {
        return $this->getTwig()->render($response, $this->setView('site/cancel'), [
            'title' => 'Cancel',
        ]);
    }
}
