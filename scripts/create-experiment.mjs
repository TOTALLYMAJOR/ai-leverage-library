#!/usr/bin/env node

import {
  parseArguments,
  planExperimentIntake,
  writeExperimentPlan
} from "./lib/experiment-intake.mjs";

try {
  const options = parseArguments(process.argv.slice(2));
  const plan = planExperimentIntake(process.cwd(), options);
  const result = options.write ? writeExperimentPlan(process.cwd(), plan) : plan;
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
} catch (error) {
  process.stderr.write(`Experiment intake failed: ${error.message}\n`);
  process.exitCode = 1;
}
