if (!customElements.get('phone-field')) {
  customElements.define(
    'phone-field',
    class PhoneField extends HTMLElement {
      constructor() {
        super();
        this.countrySelect = this.querySelector('[data-phone-country]');
        this.phoneInput = this.querySelector('[data-phone-number]');

        if (!this.countrySelect || !this.phoneInput) return;

        this.countrySelect.addEventListener('change', this.onCountryChange.bind(this));
      }

      // Swap the leading "+<digits>" prefix for the newly selected dial code,
      // preserving whatever the visitor has already typed after it. A number
      // pasted with its own country code is left alone apart from the prefix.
      onCountryChange() {
        const dialCode = this.countrySelect.value;
        const rest = this.phoneInput.value.replace(/^\s*\+\d*/, '').trimStart();

        this.phoneInput.value = rest ? `${dialCode} ${rest}` : dialCode;
        this.phoneInput.focus();
        this.phoneInput.setSelectionRange(this.phoneInput.value.length, this.phoneInput.value.length);
      }
    }
  );
}
