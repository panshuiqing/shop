export class ValidationResult {
  valid: boolean;
  message: string;

  constructor(valid: boolean, msg?: string) {
    this.valid = valid;
    this.message = msg;
  }

  static success() {
    return new ValidationResult(true)
  }

  static fail(msg: string) {
    return new ValidationResult(false, msg);
  }
}