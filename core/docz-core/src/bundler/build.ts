import * as fs from 'fs-extra'
import * as path from 'path'
import spawn from 'cross-spawn'
import sh from 'shelljs'

import * as paths from '../config/paths'

export const build = async (dist: string) => {
  const publicDir = path.join(paths.docz, 'public')

  sh.cd(paths.docz)
  spawn.sync('npm', ['run', 'build'], { stdio: 'inherit' })
  await fs.copy(publicDir, dist)
}
