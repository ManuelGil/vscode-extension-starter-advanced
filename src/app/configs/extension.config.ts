import { WorkspaceConfiguration } from 'vscode';

import {
  DEFAULT_EXCLUDE_PATTERNS,
  IS_INCLUDE_FILE_PATH_DEFAULT,
  DEFAULT_INCLUDE_PATTERNS,
} from './constants.config';

/**
 * The Config class.
 *
 * @class
 * @classdesc The class that represents the configuration of the extension.
 * @export
 * @public
 * @property {WorkspaceConfiguration} config - The workspace configuration
 * @property {string[]} include - The files to include
 * @property {string[]} exclude - The files to exclude
 * @property {{ apiKey: string; model: string; }} openai - The OpenAI API key
 * @example
 * const config = new Config(workspace.getConfiguration());
 * console.log(config.include);
 * console.log(config.exclude);
 */
export class ExtensionConfig {
  // -----------------------------------------------------------------
  // Properties
  // -----------------------------------------------------------------

  // Public properties
  /**
   * The files to include.
   * @type {string[]}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.include);
   */
  includedFilePatterns: string[];
  /**
   * The files to exclude.
   * @type {string[]}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.exclude);
   */
  excludedFilePatterns: string[];
  /**
   * Whether to show the path or not.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.showPath);
   */
  includeFilePath: boolean;
  /**
   * The OpenAI API key.
   * @type {string}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.openai.apiKey);
   */
  openai: {
    apiKey: string;
    model: string;
  };

  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the Config class.
   *
   * @constructor
   * @param {WorkspaceConfiguration} config - The workspace configuration
   * @public
   * @memberof Config
   */
  constructor(readonly config: WorkspaceConfiguration) {
    // Extensions to include in the search
    this.includedFilePatterns = config.get<string[]>(
      'files.includedFilePatterns',
      DEFAULT_INCLUDE_PATTERNS,
    );
    // Patterns of files and folders to exclude from the search
    this.excludedFilePatterns = config.get<string[]>(
      'files.excludedFilePatterns',
      DEFAULT_EXCLUDE_PATTERNS,
    );
    // Whether to show the path or not in the search results
    this.includeFilePath = config.get<boolean>(
      'files.includeFilePath',
      IS_INCLUDE_FILE_PATH_DEFAULT,
    );
    // OpenAI API key and model to use
    this.openai = {
      apiKey: config.get<string>('openai.apiKey', ''),
      model: config.get<string>('openai.model', ''),
    };
  }

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * The update method.
   *
   * @function update
   * @param {WorkspaceConfiguration} config - The workspace configuration
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * config.update(workspace.getConfiguration());
   */
  update(config: WorkspaceConfiguration): void {
    // Extensions to include in the search
    this.includedFilePatterns = config.get<string[]>(
      'files.includedFilePatterns',
      this.includedFilePatterns,
    );
    // Patterns of files and folders to exclude from the search
    this.excludedFilePatterns = config.get<string[]>(
      'files.excludedFilePatterns',
      this.excludedFilePatterns,
    );
    // Whether to show the path or not in the search results
    this.includeFilePath = config.get<boolean>(
      'files.includeFilePath',
      this.includeFilePath,
    );
    // OpenAI API key and model to use
    this.openai = {
      apiKey: config.get<string>('openai.apiKey', this.openai.apiKey),
      model: config.get<string>('openai.model', this.openai.model),
    };
  }
}
