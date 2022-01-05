<?php
use RainLab\Translate\Models\Message;

$obMessage = new Message;
$catalogText = $obMessage->trans('Каталог',[], $this->localePicker->getActiveLocale());
//Навигация
$arBreadcrumbs = [];
$arBreadcrumbs[] = [
  'name' => $obMessage->trans('Главная',[], $this->localePicker->getActiveLocale()),
  'url' => \Cms\Classes\Page::url('index'),
  'active' => false,
];
$arBreadcrumbs[] = [
  'name' => $catalogText,
  'url' => \Cms\Classes\Page::url('catalog'),
  'active' => false,
];

$obCategoryList = $this->CategoryList->make()->tree();
