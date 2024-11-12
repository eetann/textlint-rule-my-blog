import type { TextlintRuleModule } from "@textlint/types";

export interface Options {}
const report: TextlintRuleModule<Options> = (context) => {
  const { Syntax, RuleError, report, getSource, locator } = context;
  return {
    [Syntax.Html](node) {
      const text = getSource(node);
      const matches = text.matchAll(/src=("|')@:/g);
      for (const match of matches) {
        const index = match.index ?? 0;
        const matchRange = [index, index + match[0].length] as const;
        const ruleError = new RuleError(
          "画像のパスがローカルです。Cloudflare R2のパスに書き換えてください。",
          {
            padding: locator.range(matchRange),
          },
        );
        report(node, ruleError);
      }
    },
  };
};

export default report;
