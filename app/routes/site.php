<?php

use app\controllers\Cart;
use app\controllers\Home;
use app\controllers\Login;
use app\controllers\Checkout;
use app\controllers\StripeUrl;

$app->get('/', Home::class . ':index');
$app->get('/login', Login::class . ':index');
$app->post('/login', Login::class . ':store');
$app->get('/logout', Login::class . ':destroy');
$app->get('/cart', Cart::class . ':index');
$app->post('/checkout', Checkout::class . ':index');
$app->get('/success', StripeUrl::class . ':succes');
$app->get('/cancel', StripeUrl::class . ':cancel');
