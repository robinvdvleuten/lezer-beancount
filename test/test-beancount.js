import * as fs from "node:fs"
import * as path from "node:path"
import {fileURLToPath} from "node:url"
import {fileTests} from "@lezer/generator/dist/test"
import {suite} from "uvu"
import {parser} from "../dist/index.js"

let caseDir = path.dirname(fileURLToPath(import.meta.url))

for (let file of fs.readdirSync(caseDir)) {
  if (!/\.txt$/.test(file)) continue
  let name = /^[^\.]*/.exec(file)[0]
  let test = suite(name)
  for (let {name, run} of fileTests(fs.readFileSync(path.join(caseDir, file), "utf8"), file))
    test(name, () => run(parser))
  test.run()
}
