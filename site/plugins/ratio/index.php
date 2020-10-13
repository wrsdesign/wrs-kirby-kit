<?php

if (!function_exists('ratio')) {
  function ratio($img)
  {
    static $padding;

    if (!$img) {
      throw new Exception('Set image object');
    }

    $padding = $img->height() / $img->width() * 100;

    return str_replace(',', '.', $padding) . '%';
  }
}
