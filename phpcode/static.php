<?php
use RainLab\Translate\Models\Message;

$obMessage = new Message;

$arBreadcrumbs[] = [
  'name' => $obMessage->trans('Главная',[], $this->localePicker->getActiveLocale()),
  'url' => "/",
  'active' => false,
];

$arBreadcrumbs[] = [
  'name' => $this->page->title,
  'url' => $this->page->slug,
  'active' => true,
];


$arTopMenuItems = $this->headerMenu->menuItems();
foreach ($arTopMenuItems as $item) {
  if (strpos($item->url, $this->page->url) !== false) {
    $item->active = true;
  }
}


$obSettings = $this->SiteSettings->getAllValue();

$default_phone = $obSettings->phone;
$link_default_phone = $this->SiteSettings->getPhoneValue($default_phone);
$default_address = $obSettings->address;
$default_email = $obSettings->email;
$default_police = $obSettings->police;
$default_fb = $obSettings->facebook;
$default_vk = $obSettings->vkontakte;
