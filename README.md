# blankgif

> For serving 1x1px transparent gif image with nodejs.

## Setup

Install the package.

```
$ npm install --save blankgif
```

## Usage

```js
var blankgif = require('blankgif');
var express = require('express');

// option 1
app.get('/track.gif', blankgif.sendBlankGif);

// option 2
app.use(blankgif.middleware())
app.get('/track.gif', function(req, res) {

  process.nextTick(function() { /* do tracking stuff */ });

  res.set('Cache-Control', 'public, max-age=0');
  res.status(200).sendBlankGif();
});
```
