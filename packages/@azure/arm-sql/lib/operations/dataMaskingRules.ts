/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/dataMaskingRulesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a DataMaskingRules. */
export class DataMaskingRules {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a DataMaskingRules.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a database data masking rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataMaskingRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, dataMaskingRuleName: string, parameters: Models.DataMaskingRule, options?: msRest.RequestOptionsBase): Promise<Models.DataMaskingRulesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, dataMaskingRuleName: string, parameters: Models.DataMaskingRule, callback: msRest.ServiceCallback<Models.DataMaskingRule>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, dataMaskingRuleName: string, parameters: Models.DataMaskingRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataMaskingRule>): void;
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, dataMaskingRuleName: string, parameters: Models.DataMaskingRule, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DataMaskingRule>): Promise<Models.DataMaskingRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        dataMaskingRuleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DataMaskingRulesCreateOrUpdateResponse>;
  }

  /**
   * Gets a list of database data masking rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataMaskingRulesListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.DataMaskingRulesListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.DataMaskingRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DataMaskingRuleListResult>): void;
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DataMaskingRuleListResult>): Promise<Models.DataMaskingRulesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.DataMaskingRulesListByDatabaseResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.dataMaskingPolicyName,
    Parameters.dataMaskingRuleName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DataMaskingRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRule
    },
    201: {
      bodyMapper: Mappers.DataMaskingRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.dataMaskingPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
