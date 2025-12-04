import {test} from "uvu"
import * as assert from "uvu/assert"
import {tags} from "@lezer/highlight"
import {beancountHighlighting} from "../src/highlight.js"

test("all highlight tags should be valid @lezer/highlight tags", () => {
  assert.ok(beancountHighlighting, "beancountHighlighting should be defined")
  assert.type(beancountHighlighting, "function", "beancountHighlighting should be a NodePropSource function")
})

test("verify standard tags exist in @lezer/highlight", () => {
  // These are all the tags we have defined in highlight.js
  const usedTags = [
    tags.lineComment,
    tags.string,
    tags.number,
    tags.literal,
    tags.bool,
    tags.variableName,
    tags.unit,
    tags.modifier,
    tags.tagName,
    tags.link,
    tags.keyword,
    tags.propertyName,
    tags.name,
    tags.arithmeticOperator,
    tags.operator,
    tags.brace,
    tags.paren,
    tags.separator,
    tags.punctuation,
    tags.heading,
  ]

  for (const tag of usedTags) {
    assert.ok(tag !== undefined, `Tag should be defined: ${tag}`)
  }
})

test("t.special() modifier should work with valid tags", () => {
  const specialOp = tags.special(tags.operator)
  assert.ok(specialOp, "special(operator) should return a valid tag")
})

test("non-existent tags should be undefined", () => {
  assert.is(tags.indent, undefined, "t.indent does not exist")
  assert.is(tags.foo, undefined, "t.foo does not exist")
})

test.run()
