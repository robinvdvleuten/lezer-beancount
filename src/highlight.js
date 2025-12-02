/* Syntax highlighting for Beancount */

import { styleTags, tags as t } from "@lezer/highlight";

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

  // Org-mode headers
  OrgHeader: t.heading,
  OrgMarker: t.heading,

  // Indent (for structure)
  Indent: t.indent,
});
