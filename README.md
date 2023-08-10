# wholesale-shopify-theme

## Resources

- user
  - [shopify routes to append](https://shopify.dev/docs/api/liquid/objects#routes)
- dev
  - shopify
    - liquid specifics
      - [Collecting additional customer information](https://shopify.dev/docs/themes/customer-engagement/additional-customer-information), how shopify handles collecting additional form data beyond required inputs
    - [repo structure](https://shopify.dev/docs/themes/tools/github#repository-structure)
    - github integration
      - [github integration starter](https://shopify.dev/docs/themes/tools/github/getting-started)
      - [github overview](https://shopify.dev/docs/themes/tools/github)
      - [version control best practices](https://shopify.dev/docs/themes/best-practices/version-control)

## How is the Repo structured

Currently this is a buildless theme.

The Github Integration follows the main branch and will edits from the web admin console will be committed there by the shopify bot.

Refer to the repo structure, any folders not matching the shown structure will be ignored.

Inspect the main branch for any admin changes.

All developer changes will occur on feature branches and PR'd to dev which after release will be PR'd to main.
