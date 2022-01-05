<?php
use RainLab\Translate\Models\Message;

$obMessage = new Message;
if(isset($_GET["search"])){
  $searchText = $_GET["search"];
} else {
  $searchText = '';
}

$obCategoryList = $this->CategoryList->make()->active()->search($searchText);
$obProductList = $this->ProductList->make()->active()->search($searchText);

$iPage = $this->Pagination->getPageFromRequest();
$iCount = $obProductList->count() + $obCategoryList->count();

$arPaginationList = $this->Pagination->get($iPage, $iCount);

$arProductList = $obProductList->all();
$arCategoryList = $obCategoryList->all();

$arSearchList = array_merge($arProductList, $arCategoryList);

$searchText = $obMessage->trans('Поиск',[], $this->localePicker->getActiveLocale());
//Навигация
$arBreadcrumbs = [];
$arBreadcrumbs[] = [
  'name' => $obMessage->trans('Главная',[], $this->localePicker->getActiveLocale()),
  'url' => \Cms\Classes\Page::url('index'),
  'active' => false,
];
$arBreadcrumbs[] = [
  'name' => $searchText,
  'url' => \Cms\Classes\Page::url('search'),
  'active' => false,
];
