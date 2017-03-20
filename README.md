# eslint-plugin-no-unneeded-logical-operators [![Build Status](https://travis-ci.org/jelly/eslint-plugin-no-unneeded-logical-operators.svg?branch=master)](https://travis-ci.org/jelly/eslint-plugin-no-unneeded-logical-operators)

Detect no-unneeded-logical-operators

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-unneeded-logical-operators`:

```
$ npm install eslint-plugin-no-unneeded-logical-operators --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-unneeded-logical-operators` globally.

## Usage

Add `eslint-plugin-no-unneeded-logical-operators` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-unneeded-logical-operators"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-unneeded-logical-operators": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





