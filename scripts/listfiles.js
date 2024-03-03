const fs = require('fs')
const path = require('path')
const globby = require('globby')

const directory = process.argv[2] || 'src/assets'
const patternInput = process.argv[3] || '**/*.svg'
const pattern = patternInput.split(';')
const output = process.argv[4] || 'list.json'

const rootDirectory = path.resolve(process.cwd(), directory)
const files = globby.sync(pattern, { cwd: rootDirectory }).sort()

const result = {
  directory,
  pattern,
  files,
}

const targetPath = path.join(rootDirectory, output)
fs.writeFileSync(targetPath, JSON.stringify(result, null, 2))

console.log('Listed', files.length, 'files to', targetPath)