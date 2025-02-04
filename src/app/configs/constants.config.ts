/**
 * EXTENSION_ID: The unique identifier of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_ID);
 *
 * @returns {string} - The unique identifier of the extension
 */
export const EXTENSION_ID: string = 'extensionIdentifier';

/**
 * EXTENSION_NAME: The repository ID of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_NAME);
 *
 * @returns {string} - The repository ID of the extension
 */
export const EXTENSION_NAME: string = 'vscode-extension-starter-advanced';

/**
 * EXTENSION_DISPLAY_NAME: The name of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_DISPLAY_NAME);
 *
 * @returns {string} - The name of the extension
 */
export const EXTENSION_DISPLAY_NAME: string = 'My Extension';

/**
 * GITHUB_USER_NAME: The githubUsername of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(GITHUB_USER_NAME);
 *
 * @returns {string} - The githubUsername of the extension
 */
export const GITHUB_USER_NAME: string = 'githubUsername';

/**
 * EXTENSION_USER_PUBLISHER: The publisher of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_USER_PUBLISHER);
 *
 * @returns {string} - The publisher of the extension
 */
export const EXTENSION_USER_PUBLISHER: string = 'extensionPublisher';

/**
 * EXTENSION_REPOSITORY_URL: The repository URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_REPOSITORY_URL);
 *
 * @returns {string} - The repository URL of the extension
 */
export const EXTENSION_REPOSITORY_URL: string = `https://github.com/${GITHUB_USER_NAME}/${EXTENSION_NAME}`;

/**
 * MARKETPLACE_URL: The marketplace URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(MARKETPLACE_URL);
 *
 * @returns {string} - The marketplace URL of the extension
 */
export const EXTENSION_MARKETPLACE_URL: string = `https://marketplace.visualstudio.com/items?itemName=${EXTENSION_USER_PUBLISHER}.${EXTENSION_NAME}`;

/**
 * DEFAULT_INCLUDE_PATTERNS: The files to include.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_INCLUDE_PATTERNS);
 *
 * @returns {string[]} - The files to include
 */
export const DEFAULT_INCLUDE_PATTERNS: string[] = ['**/*'];

/**
 * DEFAULT_EXCLUDE_PATTERNS: The patterns to exclude from the search.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_EXCLUDE_PATTERNS);
 *
 * @returns {string[]} - The files to exclude
 */
export const DEFAULT_EXCLUDE_PATTERNS: string[] = [
  '**/node_modules/**',
  '**/dist/**',
  '**/out/**',
  '**/build/**',
  '**/.*/**',
];

/**IS_INCLUDE_FILE_PATH_DEFAULT
 * DEFAULT_INCLUDE_FILE_PATH: Whether to show the path or not.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(IS_INCLUDE_FILE_PATH_DEFAULT);
 *
 * @returns {boolean} - Whether to show the path or not
 */
export const IS_INCLUDE_FILE_PATH_DEFAULT: boolean = true;
