# Mini Quiz Course Project

A small TypeScript quiz built for the FE403 Advanced JavaScript and TypeScript course (Module 1: Interfaces).

## Theme: Which Coffee Are You?

The quiz matches a person to a coffee based on how they start their morning. The first question asks what you do when your 7 a.m. alarm goes off, and each choice is worth points that point toward a result.

| Choice                        | Points |
| ----------------------------- | ------ |
| Jump up and start the day     | 3      |
| Snooze twice, then get up     | 2      |
| Pull the blanket over my head | 1      |

The example result is **Espresso**: fast, bold, and always ready to go.

## What I Built

**Implement: First question**

- `Choice` and `Question` interfaces that describe a quiz question and its answers
- A typed question with three choices, each with a label and points
- A hard-coded answer that picks a choice and prints it with its points

**Adapt: The result card**

- An `Outcome` interface with a `title` and a `description`, both strings
- One outcome for my theme, annotated with `Outcome`
- A result card printed with a template literal: title on one line, description on the next

All of this is in [`src/index.ts`](src/index.ts), organized in sections: Types, Data, Quiz, Result card.

## Reading Type Errors

I introduced two mistakes on purpose, read the errors, then fixed them:

| Mistake                            | What TypeScript said                                                      | Fix                         |
| ---------------------------------- | ------------------------------------------------------------------------- | --------------------------- |
| `poinst: 3` instead of `points: 3` | Object literal may only specify known properties, and `points` is missing | Corrected the property name |
| `points: "3"` (a string)           | Type `string` is not assignable to type `number`                          | Used the number `3`         |

This showed me that interfaces catch typos and wrong types before the code runs.

## How to Run

```bash
npm install
npx tsx src/index.ts
```

## How to Type-Check

```bash
npx tsc --noEmit
```

No output means no type errors.

## Example Output

```text
It's 7 a.m. and your alarm goes off. What do you do?
You chose Jump up and start the day (3 points)
Espresso
Fast, bold, and always ready to go.
```
