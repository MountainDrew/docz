import { Arguments } from 'yargs'
import spawn from 'cross-spawn'
import sh from 'shelljs'

import * as paths from '../config/paths'

export const serve = async (_args: Arguments<any>) => {
  sh.cd(paths.docz)
  spawn.sync('npm', ['run', 'serve'], { stdio: 'inherit' })
}
