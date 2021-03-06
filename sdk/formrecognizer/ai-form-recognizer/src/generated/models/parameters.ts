/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const contentType: coreHttp.OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const trainRequest: coreHttp.OperationParameter = {
  parameterPath: "trainRequest",
  mapper: Mappers.TrainRequest
};

export const endpoint: coreHttp.OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const modelId: coreHttp.OperationURLParameter = {
  parameterPath: "modelId",
  mapper: {
    serializedName: "modelId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const includeKeys: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "includeKeys"],
  mapper: {
    serializedName: "includeKeys",
    type: {
      name: "Boolean"
    }
  }
};

export const contentType1: coreHttp.OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    serializedName: "Content-Type",
    required: true,
    type: {
      name: "Enum",
      allowedValues: [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/tiff"
      ]
    }
  }
};

export const fileStream: coreHttp.OperationParameter = {
  parameterPath: "fileStream",
  mapper: {
    serializedName: "fileStream",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const contentType2: coreHttp.OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const fileStream1: coreHttp.OperationParameter = {
  parameterPath: ["options", "fileStream"],
  mapper: Mappers.SourcePath
};

export const includeTextDetails: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "includeTextDetails"],
  mapper: {
    serializedName: "includeTextDetails",
    type: {
      name: "Boolean"
    }
  }
};

export const resultId: coreHttp.OperationURLParameter = {
  parameterPath: "resultId",
  mapper: {
    serializedName: "resultId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const copyRequest: coreHttp.OperationParameter = {
  parameterPath: "copyRequest",
  mapper: Mappers.CopyRequest
};

export const resultId1: coreHttp.OperationURLParameter = {
  parameterPath: "resultId",
  mapper: {
    serializedName: "resultId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const op: coreHttp.OperationQueryParameter = {
  parameterPath: "op",
  mapper: {
    defaultValue: "full",
    isConstant: true,
    serializedName: "op",
    type: {
      name: "String"
    }
  }
};

export const op1: coreHttp.OperationQueryParameter = {
  parameterPath: "op",
  mapper: {
    defaultValue: "summary",
    isConstant: true,
    serializedName: "op",
    type: {
      name: "String"
    }
  }
};

export const nextLink: coreHttp.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
