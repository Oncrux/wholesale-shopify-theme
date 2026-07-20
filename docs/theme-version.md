# Theme Version Reference

_Last checked: 2026-07-20_

## What this theme is

This repo is Shopify's free **Ride** theme, synced from the Shopify admin
(commits read `Update from Shopify for theme wholesale-shopify-theme/main`).

Source of truth for the local version is `config/settings_schema.json`:

```json
{
  "name": "theme_info",
  "theme_name": "Ride",
  "theme_version": "9.0.0",
  "theme_author": "Shopify"
}
```

Theme Store listing: https://themes.shopify.com/themes/ride
(the `/presets/ride` URL is the default preset — presets are color/type
variants of the same underlying code, not separate themes)

## Version status

| | Version | Notes |
|---|---|---|
| This repo | **9.0.0** | per `config/settings_schema.json` |
| Theme Store current | **15.5.0** | released 2026-06-17 |

**6 major versions behind.**

Latest release notes (15.5.0): "Adds support for standard storefront events and
a new section and block to display product disclosures."

## Why the gap matters

Ride shares Dawn's codebase and follows Shopify's theme semver, where a **major**
bump means backwards-incompatible changes — settings removed or renamed, global
settings added, sections/blocks restructured. See
https://shopify.dev/docs/storefronts/themes/store/success/updates

Six majors means an in-place update is not realistic if this theme carries
customizations. The standard path is:

1. Install a fresh Ride 15.5.0 as an unpublished theme.
2. Diff this repo against a stock Ride/Dawn baseline to identify real customizations.
3. Port those customizations forward, then re-test and publish.

Step 2 determines the scope — if the theme is close to stock, the upgrade is small.

## How to re-check

- **Admin:** Online Store → Themes shows "Update available" and the target version
  for Shopify-published themes.
- **Local:** `head -10 config/settings_schema.json`
- **Latest published:** the Theme Store listing above.
