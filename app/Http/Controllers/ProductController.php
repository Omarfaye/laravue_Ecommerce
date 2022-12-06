<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(): Factory|View|Application
    {
        //Dans l'ordre aleatoire
        $products = Product::inRandomOrder()
            ->whereActive(true)
            ->take(16)
            ->get();

        return view('products.index', compact('products'));
    }
}
