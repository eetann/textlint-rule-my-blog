# textlint-rule-my-blog
自分のブログ用。


## Install

Install with pnpm:

```sh
pnpm install textlint-rule-my-blog
```

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "my-blog": true
    }
}
```

Via CLI

```sh
textlint --rule my-blog README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

```sh
pnpm run build
```

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

```sh
pnpm test
```

## License

ISC © eetann
