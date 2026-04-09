/**
 * The HTTP request object passed to the user function.
 */
export interface RuntimeRequest {
  /** Auto-parsed body based on content-type. JSON content returns parsed object, otherwise returns bodyText. */
  readonly body: any;
  /** Raw body text (alias for bodyText). */
  readonly bodyRaw: string;
  /** Body decoded as UTF-8 string. */
  readonly bodyText: string;
  /** Body parsed as JSON. */
  readonly bodyJson: any;
  /** Raw body as binary buffer. */
  readonly bodyBinary: ArrayBuffer;
  /** HTTP request headers (lowercase keys). */
  readonly headers: Record<string, string>;
  /** HTTP method (GET, POST, etc.). */
  readonly method: string;
  /** Request host (without port). */
  readonly host: string;
  /** URL scheme (http or https). */
  readonly scheme: string;
  /** Parsed query parameters. */
  readonly query: Record<string, string>;
  /** Raw query string (without leading ?). */
  readonly queryString: string;
  /** Server port number. */
  readonly port: number;
  /** Full reconstructed URL. */
  readonly url: string;
  /** URL path (without query string). */
  readonly path: string;
}

/**
 * The response output returned from response builder methods.
 */
export interface RuntimeOutput {
  /** Response body. */
  body: string | ArrayBuffer;
  /** HTTP status code. */
  statusCode: number;
  /** Response headers. */
  headers: Record<string, string>;
}

/**
 * The response builder object with convenience methods.
 */
export interface RuntimeResponse {
  /** Send a string response (alias for text). */
  send(body: string, statusCode?: number, headers?: Record<string, string>): RuntimeOutput;
  /** Send a UTF-8 text response. */
  text(body: string, statusCode?: number, headers?: Record<string, string>): RuntimeOutput;
  /** Send a binary response. */
  binary(bytes: ArrayBuffer, statusCode?: number, headers?: Record<string, string>): RuntimeOutput;
  /** Send a JSON response (auto-sets content-type header). */
  json(obj: any, statusCode?: number, headers?: Record<string, string>): RuntimeOutput;
  /** Send an empty 204 response. */
  empty(): RuntimeOutput;
  /** Send a redirect response (default 301). */
  redirect(url: string, statusCode?: number, headers?: Record<string, string>): RuntimeOutput;
}

/**
 * The execution context passed to the user function.
 */
export interface RuntimeContext {
  /** The incoming HTTP request. */
  readonly req: RuntimeRequest;
  /** The response builder. */
  readonly res: RuntimeResponse;
  /** Write log messages. */
  log(...messages: any[]): void;
  /** Write error messages. */
  error(...messages: any[]): void;
}
