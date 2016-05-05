## eslint-config-jw

My custom eslint configuration

```json
{
    "rules": {
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            1,
            "always"
        ],
        "no-extra-parens": 1,
        "accessor-pairs": 2,
        "default-case": 2,
        "no-fallthrough": 2,
        "no-array-constructor": 2,
        "prefer-spread": 1,
        "no-useless-call": 1,
        "no-this-before-super": 2,
	"no-var": 1,
	"prefer-reflect": 1,
	"prefer-template": 1,
        "prefer-const": 1,
	"no-extra-parens": [1, "functions"],
        "no-const-assign": 2,
        "no-unused-vars": 1,
	"no-invalid-regexp": 2,
	"use-isnan": 2,
	"valid-jsdoc": 1,
	"valid-typeof": 2,
        "require-yield": 2,
        "no-console": 0,
	"no-warning-comments": [1, { "terms": ["todo", "fixme"], "location": "start" }],
	"indent": [2, 2, { "SwitchCase": 1 }]
    },
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
	"ecmaFeatures": {
		"experimentalObjectRestSpread": true
	}
    },
    "extends": "eslint:recommended"
}
```
