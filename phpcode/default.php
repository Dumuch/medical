<?php
use RainLab\Translate\Models\Message;

$obMessage = new Message;
$obMessage->importMessages(['Главная', 'Каталог', 'Поиск', 'Ошибка', 'О компании', 'Партнеры']);


$arTopMenuItems = $this->headerMenu->menuItems();
foreach ($arTopMenuItems as $item) {
  if (  strpos($_SERVER['REQUEST_URI'], $item->url) !== false) {
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
