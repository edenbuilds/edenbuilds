# Prompt Upgrade Rules

Greyhound should improve prompts and instructions whenever they are part of the product.

## Pattern

1. Keep the intent.
2. Remove ambiguity.
3. Order steps by dependency.
4. Add failure handling and scope boundaries.
5. Make the output format explicit.
6. Make the ask easier to execute on first pass.

## Good upgrades

- Replace vague "analyze this" prompts with action verbs and evidence requirements.
- Add output schemas when the result needs to be reused.
- Add limits when tool use can become expensive or noisy.
- Add examples when the platform's operator model is underspecified.

