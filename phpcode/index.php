<?php
$obSettings = $this->SiteSettings->getAllValue();

$arBannerSettings = [
  "title"=>$obSettings->banner_main_title,
  "link"=>$obSettings->banner_advantages_button_link,
  "videoPath"=>$obSettings->banner_video->path ?? null
];

$arAboutSettings = [
  "description_left"=>$obSettings->about_company_left,
  "description_right"=>$obSettings->about_company_right,
  "link"=>$obSettings->about_company_link,
  "advantages"=>$obSettings->advantages
];

$arServiceSettings = [
  "description"=>$obSettings->service_description,
  "service_advantages"=>$obSettings->service_advantages,
  "link"=>$obSettings->service_link
];

$arMapSettings = $obSettings->map_place;


$obCategoryList = $this->CategoryList->make()->tree();

$arHelpSettings = [
  "phone"=>$obSettings->phone_service,
  "viber"=>$obSettings->viber_service,
  "email"=>$obSettings->email_service,
];

$obBrandList = $this->BrandList->make()->active()->sort();
