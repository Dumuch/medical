<?php
use RainLab\Translate\Models\Message;

$obMessage = new Message;

$errorText = $obMessage->trans('Ошибка',[], $this->localePicker->getActiveLocale());
