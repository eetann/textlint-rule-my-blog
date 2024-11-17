# textlint-rule-my-blog
自分のブログ用。


## Install

Install with pnpm:

```sh
pnpm add -D https://github.com/eetann/textlint-rule-my-blog.git
```

グローバルインストールの場合、pnpmでGitHubから取ってこようとするとうまくいかないため、次のいずれかの手段でインストールする。

- 方法1：textlint関係のインストールをpnpmではなくnpmで統一する
- 方法2：このパッケージを自分でビルドする(こっちの方がたぶんいい)

方法2の手順
```sh
git clone git@github.com:eetann/textlint-rule-my-blog.git
cd textlint-rule-my-blog
pnpm install
pnpm run build
pnpm link -g
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
