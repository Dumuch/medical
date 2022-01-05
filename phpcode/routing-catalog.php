<?php
use RainLab\Translate\Models\Message;

$obMessage = new Message;
$obProductItem = $this->ProductPage->get();
$obCategoryItem = $this->CategoryPage->get();
$obMainCategoryItem = $this->MainCategoryPage->get();

if (!empty($this->param('slug')) && empty($obProductItem) && empty($obCategoryItem)) {
  return $this->ProductPage->getErrorResponse();
}

$obActiveCategoryItem = !empty($obCategoryItem) ? $obCategoryItem : $obMainCategoryItem;
$obProductList = $this->ProductList->make()->category($obActiveCategoryItem->id, true);


$arBreadcrumbs = [];
if (!empty($obProductItem)) {
  $arBreadcrumbs[] = [
    'name' => $obProductItem->name,
    'url' => $obProductItem->getPageUrl('routing-catalog'),
    'active' => true,
  ];
}

$obMainCategory = null;

if (!empty($obActiveCategoryItem)) {
  $obCurrentCategory = $obActiveCategoryItem;

  while ($obCurrentCategory->isNotEmpty()) {

    $arBreadcrumbs[] = [
      'name' => $obCurrentCategory->name,
      'url' => $obCurrentCategory->getPageUrl('routing-catalog'),
      'active' => !$obProductItem && $obCurrentCategory->id == $obActiveCategoryItem->id,
    ];

    if ($obCurrentCategory->parent->isEmpty()) {
      $obMainCategory = $obCurrentCategory;
    }
    $obCurrentCategory = $obCurrentCategory->parent;

  }
}
$arBreadcrumbs[] = [
  'name' => $obMessage->trans('Каталог',[], $this->localePicker->getActiveLocale()),
  'url' => \Cms\Classes\Page::url('catalog'),
  'active' => false,
];
$arBreadcrumbs[] = [
  'name' => $obMessage->trans('Главная',[], $this->localePicker->getActiveLocale()),
  'url' => "/",
  'active' => false,
];

$arBreadcrumbs = array_reverse($arBreadcrumbs);
const countOtherProducts = 9;

$arOtherProducts = $this->ProductList->make()->category($obMainCategory->id, true)->random(countOtherProducts);
if($obProductItem) {
  foreach ($arOtherProducts as $key => $value) {
    if ($value->id == $obProductItem->id) {
      unset($arOtherProducts[$key]);
      break;
    }
  }
}


if (count($arOtherProducts) == countOtherProducts) {
  array_pop($arOtherProducts);
}

$obCategoryList = $this->CategoryList->make()->tree();
