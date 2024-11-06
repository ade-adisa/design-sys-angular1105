# Login Form

A customizable and themeable login form component for Angular, designed to align with your design system's standards and provide a reusable login interface. This component is built with accessibility and flexibility in mind, making it suitable for various applications.

## Table of Contents

- [Usage](#usage)
- [Component Props](#component-props)
- [State Variations and Theming](#state-variations-and-theming)
- [Accessibility Considerations](#accessibility-considerations)
- [Scaling and Modifications](#scaling-and-modifications)
- [Examples](#examples)

## Usage

To use the `LoginFormComponent`:

1. Import the component into your module:

    ```typescript
    import { LoginFormComponent } from './login-form/login-form.component';
    ```

2. Include it in the template of your wrapper or page component:

    ```html
    <app-login-form
      [theme]="'light'"
      [showPasswordStrength]="true"
      (submit)="handleLogin($event)">
    </app-login-form>
    ```

3. Define the `handleLogin` function in your component to handle form submissions.

### Installation

This component is part of a standalone repository:

```bash
git clone https://github.com/ade-adisa/design-sys-angular1105.git
cd design-sys-angular1105
npm install
```

## Component Props

| Prop                 | Type              | Default     | Description                                                   |
|----------------------|-------------------|-------------|---------------------------------------------------------------|
| `theme`              | `'light' | 'dark'` | `'light'`   | The theme of the form, allowing for a light or dark background. |
| `showPasswordStrength` | `boolean`       | `false`     | Whether to display the password strength indicator.            |

### Events

| Event   | Payload                             | Description                           |
|---------|-------------------------------------|---------------------------------------|
| `submit`| `{ email: string, password: string }` | Emitted on form submission with form data. |

## State Variations and Theming

### Theme Variations

The `LoginFormComponent` supports two themes: **light** and **dark**.

- **Light Theme**: The component background is white, with dark text and form fields.
- **Dark Theme**: The component background is dark gray, with light text and form fields.

Example of using the dark theme:

```html
<app-login-form
  [theme]="'dark'"
  [showPasswordStrength]="true"
  (submit)="handleLogin($event)">
</app-login-form>
```

### Password Strength Indicator

When `showPasswordStrength` is set to `true`, the component displays an indicator showing the strength of the password as the user types.

```html
<app-login-form
  [showPasswordStrength]="true"
  (submit)="handleLogin($event)">
</app-login-form>
```

## Accessibility Considerations

- **Keyboard Navigation**: All fields and buttons are accessible via keyboard. Users can navigate through form fields using the `Tab` key and submit the form with the `Enter` key.
- **Screen Readers**: ARIA labels and live regions ensure that screen readers interpret the form fields correctly. Each field has a clear label, and error messages are read aloud when fields are invalid.
- **Focus Indicators**: Customizable focus states make it clear which element is currently selected for users navigating with a keyboard.

### Error Messaging

Error messages are announced in a non-intrusive manner to avoid overwhelming users with screen readers. For example, when the email or password field is invalid, an error message appears beneath the field and is announced via ARIA attributes.

## Scaling and Modifications

This component is designed to be easily scalable and adaptable for various use cases:

- **Custom Validation**: You can extend the component by injecting additional validation rules (e.g., unique domain requirements for email).
- **Third-Party Authentication**: Modify the `onSubmit` method to handle OAuth or third-party authentication services.
- **Custom Themes**: Extend the component to support additional themes by defining more theme objects and modifying the `theme` input property.
- **Field Expansion**: Add more fields such as username, confirm password, or a “Remember Me” checkbox by expanding the `FormGroup` and template.

## Examples

### Basic Usage

```html
<app-login-form (submit)="handleLogin($event)"></app-login-form>
```

### With Dark Theme and Password Strength

```html
<app-login-form
  [theme]="'dark'"
  [showPasswordStrength]="true"
  (submit)="handleLogin($event)">
</app-login-form>
```

### Handling the Submit Event

```typescript
export class WrapperComponent {
  handleLogin(formData: { email: string, password: string }) {
    console.log('Form data:', formData);
    // Implement further login logic here
  }
}
```

## License

This component is part of the design system in [this repository](https://github.com/ade-adisa/design-sys-angular1105.git). Please refer to the repository for license information.

