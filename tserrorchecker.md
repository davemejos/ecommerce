TypeScript and Lint Error Checking

This project is a monorepo. Regardless of which application directory you are working in, you must verify that the codebase is free of TypeScript and linting issues by running the following commands:

pnpm exec tsc --noEmit

pnpm exec next lint

Requirements

Both commands must complete successfully with zero errors and zero warnings.

All reported issues must be resolved properly and professionally.

Temporary, rushed, or low-quality fixes are strictly unacceptable.

Final Validation (Mandatory)

The following commands must be runnable consecutively, in the order shown, without producing any errors or warnings:

pnpm exec tsc --noEmit

pnpm exec next lint

Both checks must pass together. Fixes applied to satisfy one command must not introduce errors or warnings in the other.

The final goal is to ensure that both commands can be executed back-to-back with a clean result. Failure to do so may indicate incomplete or conflicting fixes and is not acceptable.