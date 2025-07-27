import { validateArrayLength, validateNumberRange, validateRegExp, validateStringLength } from '@robhan-cdk-lib/utils';
import { NetworkAccessControl, SamlConfiguration, VpcConfiguration } from '../workspace-base';

/**
 * Validates the clientToken property.
 *
 * @param token - The client token to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be a string
 * - Must be between 1 and 64 characters long
 * - Must contain only printable ASCII characters
 */
export function validateClientToken(token: unknown): string[] {
  const errors: string[] = [];

  if (typeof token !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: token,
    min: 1,
    max: 64,
  }));

  errors.push(...validateRegExp({
    value: token,
    regExp: /^[!-~]*$/,
    message: 'must contain only printable ASCII characters',
  }));

  return errors;
}

/**
 * Validates the description property.
 *
 * @param description - The description to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be a string
 * - Maximum length of 2048 characters
 */
export function validateDescription(description: unknown): string[] {
  const errors: string[] = [];

  if (typeof description !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: description,
    max: 2048,
  }));

  return errors;
}

/**
 * Validates the grafanaVersion property.
 *
 * @param version - The Grafana version to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be a string
 * - Must be between 1 and 255 characters long
 */
export function validateGrafanaVersion(version: unknown): string[] {
  const errors: string[] = [];

  if (typeof version !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: version,
    min: 1,
    max: 255,
  }));

  return errors;
}

/**
 * Validates the name property.
 *
 * @param name - The workspace name to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be a string
 * - Must be between 1 and 255 characters long
 * - Can only contain alphanumeric characters, hyphens, dots, underscores, and tildes
 */
export function validateName(name: unknown): string[] {
  const errors: string[] = [];

  if (typeof name !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateRegExp({
    value: name,
    regExp: /^[a-zA-Z0-9\-._~]+$/,
    message: 'can only contain alphanumeric characters, hyphens, dots, underscores, and tildes',
  }));

  errors.push(...validateStringLength({
    value: name,
    min: 1,
    max: 255,
  }));

  return errors;
}

/**
 * Validates the networkAccessControl property.
 *
 * @param nac - The network access control configuration to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be an object
 * - prefixLists (if present) must be an array with at most 5 items
 * - vpcEndpoints (if present) must be an array with at most 5 items
 */
export function validateNetworkAccessControl(nac: unknown): string[] {
  const errors: string[] = [];

  if (!nac || typeof nac !== 'object') {
    errors.push('must be an object');
    return errors;
  }

  const networkAccessControl = nac as NetworkAccessControl;

  // Check prefixLists if present
  if (networkAccessControl.prefixLists !== undefined) {
    if (!Array.isArray(networkAccessControl.prefixLists)) {
      errors.push('prefixLists must be an array');
    } else {
      errors.push(...validateArrayLength({
        value: networkAccessControl.prefixLists,
        max: 5,
        messagePrefix: 'prefixLists ',
      }));
    }
  }

  // Check vpcEndpoints if present
  if (networkAccessControl.vpcEndpoints !== undefined) {
    if (!Array.isArray(networkAccessControl.vpcEndpoints)) {
      errors.push('vpcEndpoints must be an array');
    } else {
      errors.push(...validateArrayLength({
        value: networkAccessControl.vpcEndpoints,
        max: 5,
        messagePrefix: 'vpcEndpoints ',
      }));
    }
  }

  return errors;
}

/**
 * Validates the organizationRoleName property.
 *
 * @param roleName - The organization role name to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be a string
 * - Must be between 1 and 2048 characters long
 */
export function validateOrganizationRoleName(roleName: unknown): string[] {
  const errors: string[] = [];

  if (typeof roleName !== 'string') {
    errors.push('must be a string');
    return errors; // No need to check further if not a string
  }

  errors.push(...validateStringLength({
    value: roleName,
    min: 1,
    max: 2048,
  }));

  return errors;
}

/**
 * Validates the SAML assertion attributes.
 *
 * @param obj - The SAML assertion attributes to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be an object
 * - Each attribute must be a string
 * - Each attribute must be between 1 and 256 characters long
 * - Valid attribute keys are: 'email', 'groups', 'login', 'name', 'org', 'role'
 */
export function validateSamlAssertionAttributes(obj: unknown): string[] {
  const errors: string[] = [];

  if (!obj || typeof obj !== 'object') {
    return ['must be an object'];
  }

  const attributes = obj as Record<string, unknown>;

  for (const key in attributes) {
    const value = attributes[key];
    if (value === undefined) {
      continue; // Optional properties can be undefined
    }

    if (typeof value !== 'string') {
      errors.push(`Property '${key}' must be a string`);
    } else {
      errors.push(...validateStringLength({
        value,
        min: 1,
        max: 256,
        messagePrefix: `Property '${key}' `,
      }));
    }
  }

  return errors;
}

/**
 * Validates the SAML IdP metadata.
 *
 * @param obj - The SAML IdP metadata to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be an object
 * - url (if present) must be a string between 1 and 2048 characters long
 * - xml (if present) must be a string
 */
export function validateSamlIdpMetadata(obj: unknown): string[] {
  const errors: string[] = [];

  if (!obj || typeof obj !== 'object') {
    return ['must be an object'];
  }

  const metadata = obj as Record<string, unknown>;

  // Check url property if present
  if (metadata.url !== undefined) {
    if (typeof metadata.url !== 'string') {
      errors.push("Property 'url' must be a string");
    } else {
      errors.push(...validateStringLength({
        value: metadata.url,
        min: 1,
        max: 2048,
        messagePrefix: "Property 'url' ",
      }));
    }
  }

  // Check xml property if present
  if (metadata.xml !== undefined && typeof metadata.xml !== 'string') {
    errors.push("Property 'xml' must be a string");
  }

  return errors;
}

/**
 * Validates the SAML configuration.
 *
 * @param config - The SAML configuration to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be an object
 * - idpMetadata is required and must be valid
 * - assertionAtrributes (if present) must be valid
 * - allowedOrganizations (if present) must be an array of strings with 1-256 elements
 * - loginValidityDuration (if present) must be a positive number
 * - roleValues (if present) must be an object with valid admin and editor arrays
 */
export function validateSamlConfiguration(config: unknown): string[] {
  const errors: string[] = [];

  if (!config || typeof config !== 'object') {
    errors.push('must be an object');
    return errors;
  }

  const samlConfig = config as SamlConfiguration;

  // Check idpMetadata (required)
  if (samlConfig.idpMetadata === undefined) {
    errors.push('idpMetadata is required in samlConfiguration');
  } else {
    const idpMetadataErrors = validateSamlIdpMetadata(
      samlConfig.idpMetadata,
    );
    if (idpMetadataErrors.length > 0) {
      errors.push(...idpMetadataErrors.map((err) => `idpMetadata: ${err}`));
    }
  }

  // Check assertionAtrributes if present
  if (samlConfig.assertionAtrributes !== undefined) {
    const attributeErrors = validateSamlAssertionAttributes(
      samlConfig.assertionAtrributes,
    );
    if (attributeErrors.length > 0) {
      errors.push(
        ...attributeErrors.map((err) => `assertionAtrributes: ${err}`),
      );
    }
  }

  // Check allowedOrganizations if present
  if (samlConfig.allowedOrganizations !== undefined) {
    if (!Array.isArray(samlConfig.allowedOrganizations)) {
      errors.push('allowedOrganizations must be an array');
    } else {
      errors.push(
        ...validateArrayLength({
          value: samlConfig.allowedOrganizations,
          min: 1,
          max: 256,
          messagePrefix: 'allowedOrganizations ',
        }),
      );

      for (let i = 0; i < samlConfig.allowedOrganizations.length; i++) {
        const org = samlConfig.allowedOrganizations[i];
        if (typeof org !== 'string') {
          errors.push(`allowedOrganizations[${i}] must be a string`);
        }
      }
    }
  }

  // Check loginValidityDuration if present
  if (samlConfig.loginValidityDuration !== undefined) {
    if (typeof samlConfig.loginValidityDuration !== 'number') {
      errors.push('loginValidityDuration must be a number');
    } else {
      errors.push(
        ...validateNumberRange({
          value: samlConfig.loginValidityDuration,
          min: 1,
          messagePrefix: 'loginValidityDuration ',
        }),
      );
    }
  }

  // Check roleValues if present
  if (samlConfig.roleValues !== undefined) {
    if (!samlConfig.roleValues || typeof samlConfig.roleValues !== 'object') {
      errors.push('roleValues must be an object');
    } else {
      // Check admin array if present
      if (samlConfig.roleValues.admin !== undefined) {
        if (!Array.isArray(samlConfig.roleValues.admin)) {
          errors.push('roleValues.admin must be an array');
        } else {
          for (let i = 0; i < samlConfig.roleValues.admin.length; i++) {
            if (typeof samlConfig.roleValues.admin[i] !== 'string') {
              errors.push(`roleValues.admin[${i}] must be a string`);
            }
          }

          errors.push(
            ...validateArrayLength({
              value: samlConfig.roleValues.admin,
              max: 256,
              messagePrefix: 'roleValues.admin ',
            }),
          );
        }
      }

      // Check editor array if present
      if (samlConfig.roleValues.editor !== undefined) {
        if (!Array.isArray(samlConfig.roleValues.editor)) {
          errors.push('roleValues.editor must be an array');
        } else {
          for (let i = 0; i < samlConfig.roleValues.editor.length; i++) {
            if (typeof samlConfig.roleValues.editor[i] !== 'string') {
              errors.push(`roleValues.editor[${i}] must be a string`);
            }
          }

          errors.push(
            ...validateArrayLength({
              value: samlConfig.roleValues.editor,
              max: 256,
              messagePrefix: 'roleValues.editor ',
            }),
          );
        }
      }
    }
  }

  return errors;
}

/**
 * Validates the vpcConfiguration property.
 *
 * @param config - The VPC configuration to validate
 * @returns An array of error messages if validation fails, or an empty array if valid
 *
 * Validation rules:
 * - Must be an object
 * - securityGroups is required and must be an array with 1-5 items
 * - subnets is required and must be an array with 2-6 items
 */
export function validateVpcConfiguration(config: unknown): string[] {
  const errors: string[] = [];

  if (!config || typeof config !== 'object') {
    errors.push('vpcConfiguration must be an object');
    return errors;
  }

  const vpcConfig = config as VpcConfiguration;

  // Check securityGroups (required)
  if (vpcConfig.securityGroups === undefined) {
    errors.push('securityGroups is required in vpcConfiguration');
  } else if (!Array.isArray(vpcConfig.securityGroups)) {
    errors.push('securityGroups must be an array');
  } else {
    errors.push(
      ...validateArrayLength({
        value: vpcConfig.securityGroups,
        min: 1,
        max: 5,
        messagePrefix: 'securityGroups ',
      }),
    );
  }

  // Check subnets (required)
  if (vpcConfig.subnets === undefined) {
    errors.push('subnets is required in vpcConfiguration');
  } else if (!Array.isArray(vpcConfig.subnets)) {
    errors.push('subnets must be an array');
  } else {
    errors.push(
      ...validateArrayLength({
        value: vpcConfig.subnets,
        min: 2,
        max: 6,
        messagePrefix: 'subnets ',
      }),
    );
  }

  return errors;
}