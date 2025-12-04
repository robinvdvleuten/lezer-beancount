import { test } from "uvu";
import * as assert from "uvu/assert";
import { parser } from "../dist/index.js";
import { foldNodeProp } from "@codemirror/language";

test("PostingBlock has folding prop", () => {
  const tree = parser.parse(`2024-01-01 * "Test"
  Assets:Bank 100 USD
  Expenses:Food`);

  let found = false;
  tree.iterate({
    enter(node) {
      if (node.name === "PostingBlock") {
        found = true;
        assert.ok(node.type.prop(foldNodeProp), "PostingBlock should have fold prop");
      }
    }
  });
  assert.ok(found, "Should find PostingBlock node");
});

test("MetadataBlock has folding prop", () => {
  const tree = parser.parse(`2024-01-01 open Assets:Bank USD
  name: "Test Account"`);

  let found = false;
  tree.iterate({
    enter(node) {
      if (node.name === "MetadataBlock") {
        found = true;
        assert.ok(node.type.prop(foldNodeProp), "MetadataBlock should have fold prop");
      }
    }
  });
  assert.ok(found, "Should find MetadataBlock node");
});

test.run();
