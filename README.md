# rootify

Allow root-of-project (closest package.json) requires in browserify with `^`

## Usage

rootify is a browserify transform.

```
npm i --save-dev rootify
```

and in your package.json:

```
  "browserify": {
    "transform": [ "rootify" ]
  }
```

You can add a bare package.json file to your scripts folder to make rootify resolve to that location.