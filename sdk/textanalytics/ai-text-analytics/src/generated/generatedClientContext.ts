/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

const packageName = "@azure/ai-text-analytics";
const packageVersion = "1.0.0-preview.5";

export class GeneratedClientContext extends coreHttp.ServiceClient {
  endpoint: string;
  credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   * https://westus.api.cognitive.microsoft.com).
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, endpoint: string, options?: coreHttp.ServiceClientOptions) {
    if (endpoint == undefined) {
      throw new Error("'endpoint' cannot be null.");
    }
    if (credentials == undefined) {
      throw new Error("'credentials' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.baseUri = "{Endpoint}/text/analytics/v3.0";
    this.requestContentType = "application/json; charset=utf-8";
    this.endpoint = endpoint;
    this.credentials = credentials;
  }
}
