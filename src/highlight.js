import { styleTags, tags as t } from "@lezer/highlight";
import { foldNodeProp, foldInside, indentNodeProp } from "@codemirror/language";

export const beancountHighlighting = styleTags({
  // Comments
  LineComment: t.lineComment,

  // Literals
  String: t.string,
  Number: t.number,
  Date: t.literal,
  BooleanValue: t.bool,

  // Accounts and Currencies
  Account: t.variableName,
  Currency: t.unit,

  // Transaction flags
  TxnFlag: t.modifier,
  TxnKeyword: t.modifier,

  // Tags and Links
  Tag: t.tagName,
  Link: t.link,

  // Keywords (directives)
  "open close balance pad note document event price commodity query custom": t.keyword,
  "option include plugin pushtag poptag": t.keyword,

  // Metadata
  MetadataKey: t.propertyName,
  identifier: t.name,

  // Operators
  ArithOp: t.arithmeticOperator,
  PriceOp: t.operator,
  "~": t.operator,

  // Cost spec markers
  LotLabel: t.special(t.operator),
  CostMerge: t.special(t.operator),

  // Delimiters
  "{ } {{ }}": t.brace,
  "( )": t.paren,
  ",": t.separator,
  ":": t.punctuation,
  "@ @@": t.operator,

  OrgHeader: t.heading,
  OrgMarker: t.heading,
});

export const beancountFolding = foldNodeProp.add({
  PostingBlock: foldInside,
  MetadataBlock: foldInside,
});

export const beancountIndentation = indentNodeProp.add({
  Transaction: context => context.baseIndent + context.unit,
  PostingBlock: context => context.baseIndent + context.unit,
  MetadataBlock: context => context.baseIndent + context.unit,
  Open: context => context.baseIndent + context.unit,
  Close: context => context.baseIndent + context.unit,
  Balance: context => context.baseIndent + context.unit,
  Pad: context => context.baseIndent + context.unit,
  Note: context => context.baseIndent + context.unit,
  Document: context => context.baseIndent + context.unit,
  Event: context => context.baseIndent + context.unit,
  Price: context => context.baseIndent + context.unit,
  Commodity: context => context.baseIndent + context.unit,
  Query: context => context.baseIndent + context.unit,
  Custom: context => context.baseIndent + context.unit,
});
