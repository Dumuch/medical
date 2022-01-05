<?php
use RainLab\Translate\Models\Message;

$obMessage = new Message;


$obBrand = $this->BrandPage->get();
$obProductList = $this->ProductList->make()->brand($obBrand->id);


$brandsText = $obBrand->name;
//Навигация
$arBreadcrumbs = [];
$arBreadcrumbs[] = [
  'name' => $obMessage->trans('Главная',[], $this->localePicker->getActiveLocale()),
  'url' => \Cms\Classes\Page::url('index'),
  'active' => false,
];
$arBreadcrumbs[] = [
  'name' => $brandsText,
  'url' => \Cms\Classes\Page::url('brands'),
  'active' => false,
];
