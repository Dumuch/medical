<?php
$obSettings = $this->SiteSettings->getAllValue();
$arAdvantagesAboutSettings = $obSettings->advantages_about;
$arAchievementsAboutSettings = $obSettings->images_about;

$arHelpSettings = [
  "phone"=>$obSettings->phone_service,
  "viber"=>$obSettings->viber_service,
  "email"=>$obSettings->email_service,
];


use RainLab\Translate\Models\Message;

$obMessage = new Message;
$aboutText = $obMessage->trans('О компании',[], $this->localePicker->getActiveLocale());


$advantages_description_1 = $obSettings->advantages_description_1;

$advantages_description_2 = $obSettings->advantages_description_2;
