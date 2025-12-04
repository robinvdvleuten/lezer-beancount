import { test } from "uvu";
import * as assert from "uvu/assert";
import { parser } from "../dist/index.js";
import { indentNodeProp } from "@codemirror/language";

test("Transaction has indent prop", () => {
  const tree = parser.parse(`2024-01-01 * "Test"
  Assets:Bank 100 USD`);

  let found = false;
  tree.iterate({
    enter(node) {
      if (node.name === "Transaction") {
        found = true;
        assert.ok(node.type.prop(indentNodeProp), "Transaction should have indent prop");
      }
    }
  });
  assert.ok(found, "Should find Transaction node");
});

test("PostingBlock has indent prop", () => {
  const tree = parser.parse(`2024-01-01 * "Test"
  Assets:Bank 100 USD
  Expenses:Food 100 USD`);

  let found = false;
  tree.iterate({
    enter(node) {
      if (node.name === "PostingBlock") {
        found = true;
        assert.ok(node.type.prop(indentNodeProp), "PostingBlock should have indent prop");
      }
    }
  });
  assert.ok(found, "Should find PostingBlock node");
});

test("Open directive has indent prop", () => {
  const tree = parser.parse(`2024-01-01 open Assets:Bank USD`);

  let found = false;
  tree.iterate({
    enter(node) {
      if (node.name === "Open") {
        found = true;
        assert.ok(node.type.prop(indentNodeProp), "Open should have indent prop");
      }
    }
  });
  assert.ok(found, "Should find Open node");
});

test.run();
