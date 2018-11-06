
# Regular Expression

## Basic Concepts

### Fundamental Structures

The structure of a regular expression is a concatenation of several basic structures: element and its optional repetition.

For example regular expression `^.*ABC{2,3}[0-9]+(B|C)$` matches the string `a-b-c-ABCCC1234C`, where

| Element Type  |     Element   |   Repetition   | Matched Times  |      Matched     |
| ------------- | ------------- |  ------------- |  ------------- | ---------------- |
|     anchor    |   `^`         |                |      1         |  begin of string |
|     any       |   `.`         |       `*`      |      5         |  `a-b-c`         |
|     char      |   `A`         |                |      1         |  `A`             |
|     char      |   `B`         |                |      1         |  `B`             |
|     char      |   `C`         |     `{2,3}`    |      3         |  `CCC`           |
|     class     |   `[0-9]`     |       `+`      |      4         |  `1234`          |
| subexpression |   `(B\|C)      |                |      1         |  `C`             |
|    anchor     |   `$`         |                |      1         |  end of string   |

#### Elements

  * match any character: `.`
  * ordinary characters: `0-9`, `a-zA-Z`, and any visible characters
  * character classes
  * special expressions
  * subexpression
  * anchors: anchor does not have repetition

#### Repetitions

  * match zero or one time: `?`
  * match any times: `*`
  * match one or more times: `+`
  * match exactly `n` times: `{n}`
  * match at least `n` times: `{n,}`
  * match at most `n` times: `{,n}`
  * match `m` to `n` times (included): `{m,n}`
  
#### Subexpressions and Alternations

  * subexpression: `(expression)`
  * alternation in a subexpression: `(expA|expB)`
  
### Character Classes

### Special Expressions

### Anchoring

### Back References and Subexpressions

## Implementation and Finite State Machine

## Basic Regular Expression (BRE)

## Extended Regular Expression (ERE)

## Regular Expression in Python

## Regular Expression in JavaScript

## Regular Expression in Vim

## Regular Expression in C++/Boost

## Regular Expression in Java

## Regular Expression in PHP

## Regular Expression in Perl (PCEP)

## Regular Expression in Linux Utilities

### grep/egrep

### sed

### find
