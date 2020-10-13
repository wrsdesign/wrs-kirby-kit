<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1">

  <title><?= h($page->meta_title()->or($site->meta_title())) ?></title>
  <meta name="description" content="<?= h(
    $page->meta_desc()->or($site->meta_desc())
  ) ?>">

  <meta name="robots" content="index,follow">
  <meta name="format-detection" content="telephone=no">

  <meta property="og:type" content="website">
  <meta property="og:title" content="<?= h(
    $page->og_title()->or($site->og_title())
  ) ?>">
  <meta property="og:description" content="<?= h(
    $page->og_desc()->or($site->og_desc())
  ) ?>">
  <meta property="og:url" content="<?= $page->url() ?>">
  <meta property="og:site_name" content="<?= h(
    $page->og_site()->or($site->og_site())
  ) ?>">

  <?php if (
    $img =
      $page
        ->files()
        ->template('share')
        ->first() ??
      $site
        ->files()
        ->template('share')
        ->first()
  ): ?>
    <meta property="og:image" content="<?= $img->url() ?>">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
  <?php endif; ?>

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= h(
    $page->og_title()->or($site->og_title())
  ) ?>">
  <meta name="twitter:description" content="<?= h(
    $page->og_desc()->or($site->og_desc())
  ) ?>">

  <?php if (
    $img =
      $page
        ->files()
        ->template('share')
        ->first() ??
      $site
        ->files()
        ->template('share')
        ->first()
  ): ?>
    <meta name="twitter:image" content="<?= $img->url() ?>">
  <?php endif; ?>

  <link rel="apple-touch-icon" sizes="192x192" href="<?= url(
    '/assets/static/icons/192.png'
  ) ?>">
  <link rel="icon" type="image/png" href="<?= url(
    '/assets/static/icons/32.png'
  ) ?>">

  <?= mix('/index.css') ?>

  <script>
    // Set global App object for Alpine component, utils methods and vendors
    // https://github.com/alpinejs/alpine
    window.App = {}
  </script>

  <?= mix('/manifest.js', ['defer' => true]) ?>
  <?= mix('/vendor.js', ['defer' => true]) ?>
  <?= mix('/index.js', ['defer' => true]) ?>
</head>

<body>
<div x-data="App.hi()" x-init="init()"></div>
