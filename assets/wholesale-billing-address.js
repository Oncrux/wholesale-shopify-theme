if (!customElements.get('wholesale-billing-address')) {
  customElements.define(
    'wholesale-billing-address',
    class WholesaleBillingAddress extends HTMLElement {
      constructor() {
        super();
        this.toggle = this.querySelector('[data-address-toggle]');
        this.fields = this.querySelector('[data-address-fields]');

        if (!this.toggle || !this.fields) return;

        this.toggle.addEventListener('change', this.onToggle.bind(this));
      }

      // Markup ships in the collapsed state, so there is nothing to do on load and
      // no flash of the wrong UI: with JavaScript off the visitor simply keeps the
      // default of billing matching shipping.
      onToggle() {
        const collapsed = this.toggle.checked;

        this.fields.hidden = collapsed;

        // Disabling is what makes this safe rather than only tidy — a disabled
        // control is left out of validation and out of submission, so the required
        // fields in here can't block submit while they're hidden, and a stale
        // billing address the visitor typed and then hid can't post either.
        this.fields.querySelectorAll('input, select').forEach((control) => {
          control.disabled = collapsed;
        });
      }
    }
  );
}
