import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [
    // no problem
    "text",
    {
      text: `
<Image width="700" aspectRatio="2.41"
  src="@/ast-explorer-myself/this-is-ast-explorer.avif"
  alt="AST explorerの例"
/>
`,
    },
  ],
  invalid: [
    // single match
    {
      text: `
<Image width="700" aspectRatio="2.41"
  src="@:~/Downloads/ast-explorer-myself/this-is-ast-explorer.avif"
  alt="AST explorerの例"
/>
`,
      errors: [
        {
          message:
            "画像のパスがローカルです。Cloudflare R2のパスに書き換えてください。",
          range: [41, 48],
        },
      ],
    },
  ],
});
