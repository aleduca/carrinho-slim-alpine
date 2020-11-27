<?php

namespace app\controllers;

use Stripe\Stripe;
use Stripe\Checkout\Session;

class Checkout
{
    public function index($request, $response)
    {
        $data = json_decode(file_get_contents('php://input'), true);

        Stripe::setApiKey($data['secret']);

        $items = [];

        foreach ($data['products'] as $product) {
            array_push($items, [
                'price_data' => [
                    'currency' => 'brl',
                    'unit_amount' => $product['price'] * 100,
                    'product_data' => [
                        'name' => $product['name'],
                    ],
                ],
                'quantity' => $product['qty']
            ]);
        }

        $checkout_session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => $items,
            'mode' => 'payment',
            'success_url' => 'http://localhost:5000/success',
            'cancel_url' => 'http://localhost:5000/cancel',
        ]);

        echo json_encode(['id' => $checkout_session->id]);
        return $response;
    }
}
