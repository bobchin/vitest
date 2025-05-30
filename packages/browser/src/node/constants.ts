import { fileURLToPath } from 'node:url'
import { resolve } from 'pathe'

const pkgRoot = resolve(fileURLToPath(import.meta.url), '../..')
export const distRoot: string = resolve(pkgRoot, 'dist')
