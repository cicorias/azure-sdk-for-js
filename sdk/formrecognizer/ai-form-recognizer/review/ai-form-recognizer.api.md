## API Report File for "@azure/ai-form-recognizer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbortSignalLike } from '@azure/core-http';
import { AzureKeyCredential } from '@azure/core-auth';
import * as coreHttp from '@azure/core-http';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PipelineOptions } from '@azure/core-http';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';
import { RestResponse } from '@azure/core-http';
import { TokenCredential } from '@azure/identity';

// @public
export interface AccountProperties {
    customModelCount: number;
    customModelLimit: number;
}

// @public
export interface AnalyzeOperationResultModel {
    // Warning: (ae-forgotten-export) The symbol "AnalyzeResult" needs to be exported by the entry point index.d.ts
    analyzeResult?: AnalyzeResult;
    createdOn: Date;
    lastModified: Date;
    status: OperationStatus;
}

// @public
export interface ArrayFieldValue {
    // (undocumented)
    type: "array";
    // (undocumented)
    value?: FieldValue[];
}

export { AzureKeyCredential }

// @public
export type BeginCopyModelOptions = FormRecognizerOperationOptions & {
    intervalInMs?: number;
    onProgress?: (state: BeginCopyModelPollState) => void;
    resumeFrom?: string;
};

// @public
export interface BeginCopyModelPollState extends PollOperationState<CustomFormModelInfo> {
    readonly client: CopyModelPollerClient;
    copyAuthorization: CopyAuthorization;
    readonly copyModelOptions?: CopyModelOptions;
    modelId: string;
    resultId?: string;
    status: OperationStatus;
    targetResourceId: string;
    targetResourceRegion: string;
}

// @public
export type BeginRecognizeContentOptions = RecognizeContentOptions & {
    intervalInMs?: number;
    onProgress?: (state: BeginRecognizePollState<RecognizeContentResultResponse>) => void;
    resumeFrom?: string;
};

// @public
export type BeginRecognizeFormsOptions = RecognizeFormsOptions & {
    intervalInMs?: number;
    onProgress?: (state: BeginRecognizePollState<RecognizeFormResultResponse>) => void;
    resumeFrom?: string;
};

// @public (undocumented)
export interface BeginRecognizePollState<T> extends PollOperationState<T> {
    // (undocumented)
    readonly analyzeOptions?: RecognizeOptions;
    // (undocumented)
    readonly client: RecognizePollerClient<T>;
    // (undocumented)
    contentType?: FormContentType;
    // (undocumented)
    modelId?: string;
    // (undocumented)
    resultId?: string;
    // (undocumented)
    source?: FormRecognizerRequestBody | string;
    // (undocumented)
    status: OperationStatus;
}

// @public
export type BeginRecognizeReceiptsOptions = RecognizeReceiptsOptions & {
    intervalInMs?: number;
    onProgress?: (state: BeginRecognizePollState<RecognizeReceiptResultResponse>) => void;
    resumeFrom?: string;
};

// @public
export type BeginTrainingOptions<T> = TrainingFileFilter & {
    intervalInMs?: number;
    onProgress?: (state: BeginTrainingPollState<T>) => void;
    resumeFrom?: string;
};

// @public
export interface BeginTrainingPollState<T> extends PollOperationState<T> {
    readonly client: TrainPollerClient<T>;
    modelId?: string;
    source: string;
    status: CustomFormModelStatus;
    readonly trainModelOptions?: TrainingFileFilter;
}

// @public
export interface CommonFieldValue {
    boundingBox?: Point2D[];
    confidence?: number;
    pageNumber?: number;
    text?: string;
    textContent?: FormContent[];
}

// @public
export type ContentPollerLike = PollerLike<PollOperationState<RecognizeContentResultResponse>, RecognizeContentResultResponse>;

// @public
export interface CopyAuthorization extends CopyAuthorizationResultModel {
    resourceId: string;
    resourceRegion: string;
}

// @public
export interface CopyAuthorizationResultModel {
    accessToken: string;
    expirationDateTimeTicks: number;
    modelId: string;
}

// @public
export type CopyModelOptions = FormRecognizerOperationOptions;

// @public
export type CopyModelPollerClient = {
    beginCopyModel: (modelId: string, copyAuthorization: CopyAuthorization, copyModelOptions?: CopyModelOptions) => Promise<GeneratedClientCopyCustomModelResponse>;
    getCopyModelResult: (modelId: string, resultId: string, options: GetCopyModelResultOptions) => Promise<GeneratedClientGetCustomModelCopyResultResponse>;
};

// @public
export interface CustomFormField {
    accuracy?: number;
    name: string;
}

// @public
export interface CustomFormModel {
    completedOn: Date;
    errors?: FormRecognizerError[];
    modelId: string;
    requestedOn: Date;
    status: CustomFormModelStatus;
    submodels?: CustomFormSubmodel[];
    trainingDocuments?: TrainingDocumentInfo[];
}

// @public
export interface CustomFormModelInfo {
    completedOn: Date;
    modelId: string;
    requestedOn: Date;
    status: CustomFormModelStatus;
}

// @public
export type CustomFormModelStatus = "creating" | "ready" | "invalid";

// @public
export interface CustomFormSubmodel {
    accuracy?: number;
    fields: {
        [propertyName: string]: CustomFormField;
    };
    formType: string;
}

// @public
export type DateFieldValue = {
    type: "date";
    value?: Date;
} & CommonFieldValue;

// @public
export type DeleteModelOptions = FormRecognizerOperationOptions;

// @public
export interface FieldText {
    boundingBox?: Point2D[];
    pageNumber: number;
    text?: string;
    textContent?: FormContent[];
}

// @public
export type FieldValue = StringFieldValue | DateFieldValue | TimeFieldValue | PhoneNumberFieldValue | NumberFieldValue | IntegerFieldValue | ArrayFieldValue | ObjectFieldValue;

// @public
export type FieldValueTypes = string | Date | number | FieldValue[] | {
    [propertyName: string]: FieldValue;
};

// @public
export type FormContent = FormWord | FormLine;

// @public
export interface FormContentCommon {
    boundingBox: Point2D[];
    pageNumber: number;
    text: string;
}

// @public
export type FormContentType = "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";

// @public
export interface FormField {
    confidence?: number;
    labelText?: FieldText;
    name?: string;
    value?: FieldValueTypes;
    valueText?: FieldText;
    valueType?: ValueTypes;
}

// @public
export interface FormFieldsReport {
    accuracy: number;
    fieldName: string;
}

// @public
export interface FormLine extends FormContentCommon {
    kind: "line";
    words: FormWord[];
}

// @public
export interface FormModel {
    keys: KeysResult;
    modelInfo: CustomFormModelInfo;
    trainResult?: FormTrainResult;
}

// @public
export type FormModelResponse = CustomFormModel & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Model;
    };
};

// @public
export interface FormPage {
    height: number;
    lines?: FormLine[];
    pageNumber: number;
    tables?: FormTable[];
    textAngle: number;
    unit: LengthUnit;
    width: number;
}

// @public
export interface FormPageRange {
    firstPageNumber: number;
    lastPageNumber: number;
}

// @public
export type FormPollerLike = PollerLike<PollOperationState<RecognizeFormResultResponse>, RecognizeFormResultResponse>;

// @public
export class FormRecognizerClient {
    constructor(endpointUrl: string, credential: TokenCredential | KeyCredential, options?: FormRecognizerClientOptions);
    beginRecognizeContent(form: FormRecognizerRequestBody, contentType?: FormContentType, options?: BeginRecognizeContentOptions): Promise<ContentPollerLike>;
    beginRecognizeContentFromUrl(formUrl: string, options?: BeginRecognizeContentOptions): Promise<ContentPollerLike>;
    beginRecognizeCustomForms(modelId: string, form: FormRecognizerRequestBody, contentType?: FormContentType, options?: BeginRecognizeFormsOptions): Promise<FormPollerLike>;
    beginRecognizeCustomFormsFromUrl(modelId: string, formUrl: string, options?: BeginRecognizeFormsOptions): Promise<PollerLike<PollOperationState<RecognizeFormResultResponse>, RecognizeFormResultResponse>>;
    beginRecognizeReceipts(receipt: FormRecognizerRequestBody, contentType?: FormContentType, options?: BeginRecognizeReceiptsOptions): Promise<ReceiptPollerLike>;
    beginRecognizeReceiptsFromUrl(receiptUrl: string, options?: BeginRecognizeReceiptsOptions): Promise<ReceiptPollerLike>;
    readonly endpointUrl: string;
    }

// @public
export interface FormRecognizerClientOptions extends PipelineOptions {
}

// @public
export interface FormRecognizerError {
    code: string;
    message: string;
}

// @public
export interface FormRecognizerOperationOptions extends OperationOptions {
}

// @public
export type FormRecognizerRequestBody = Blob | ArrayBuffer | ArrayBufferView | NodeJS.ReadableStream;

// @public
export interface FormResult {
    errors?: FormRecognizerError[];
    forms?: RecognizedForm[];
    version: string;
}

// @public
export interface FormTable {
    columnCount: number;
    rowCount: number;
    rows: FormTableRow[];
}

// @public
export interface FormTableCell {
    boundingBox: Point2D[];
    columnIndex: number;
    columnSpan?: number;
    confidence: number;
    isFooter?: boolean;
    isHeader?: boolean;
    rowIndex: number;
    rowSpan?: number;
    text: string;
    textContent?: FormContent[];
}

// @public
export interface FormTableRow {
    cells: FormTableCell[];
}

// @public
export class FormTrainingClient {
    constructor(endpointUrl: string, credential: TokenCredential | KeyCredential, options?: FormRecognizerClientOptions);
    beginCopyModel(modelId: string, target: CopyAuthorization, options?: BeginCopyModelOptions): Promise<PollerLike<PollOperationState<CustomFormModelInfo>, CustomFormModelInfo>>;
    beginTraining(trainingFilesUrl: string, useTrainingLabels: boolean, options?: BeginTrainingOptions<FormModelResponse>): Promise<PollerLike<PollOperationState<FormModelResponse>, FormModelResponse>>;
    deleteModel(modelId: string, options?: DeleteModelOptions): Promise<RestResponse>;
    readonly endpointUrl: string;
    getAccountProperties(options?: GetAccountPropertiesOptions): Promise<AccountProperties>;
    getCopyAuthorization(resourceId: string, resourceRegion: string, options?: GetCopyAuthorizationOptions): Promise<CopyAuthorization>;
    getCustomModel(modelId: string, options?: GetModelOptions): Promise<FormModelResponse>;
    getFormRecognizerClient(): FormRecognizerClient;
    listCustomModels(options?: ListModelsOptions): PagedAsyncIterableIterator<CustomFormModelInfo, ListModelsResponseModel>;
    }

// @public
export interface FormTrainResult {
    errors?: FormRecognizerError[];
    trainingDocuments: TrainingDocumentInfo[];
}

// @public
export interface FormWord extends FormContentCommon {
    confidence?: number;
    containingLine?: FormLine;
    kind: "word";
}

// @public
export type GetAccountPropertiesOptions = FormRecognizerOperationOptions;

// @public
export type GetCopyAuthorizationOptions = FormRecognizerOperationOptions;

// @public
export type GetCopyModelResultOptions = FormRecognizerOperationOptions;

// @public
export type GetModelOptions = FormRecognizerOperationOptions;

// @public
export type IntegerFieldValue = {
    type: "integer";
    value?: number;
} & CommonFieldValue;

// @public
export interface KeysResult {
    clusters: {
        [propertyName: string]: string[];
    };
}

// @public
export interface KeyValueElementModel {
    boundingBox?: number[];
    elements?: string[];
    text: string;
}

// @public
export interface KeyValuePairModel {
    confidence: number;
    key: KeyValueElementModel;
    label?: string;
    value: KeyValueElementModel;
}

// @public
export type Language = "en" | "es";

// @public
export type LengthUnit = "pixel" | "inch";

// @public
export type ListModelsOptions = FormRecognizerOperationOptions;

// @public
export type ListModelsResponseModel = Models & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Models;
    };
};

// @public
export type Locale = "US" | "UK";

// @public
export interface Model {
    keys?: KeysResult;
    modelInfo: ModelInfo;
    trainResult?: TrainResult;
}

// @public
export interface ModelInfo {
    completedOn: Date;
    modelId: string;
    requestedOn: Date;
    status: CustomFormModelStatus;
}

// @public
export interface Models {
    modelList?: ModelInfo[];
    nextLink?: string;
    summary?: ModelsSummary;
}

// @public
export interface ModelsSummary {
    count: number;
    lastModified: Date;
    limit: number;
}

// @public
export type NumberFieldValue = {
    type: "number";
    value?: number;
} & CommonFieldValue;

// @public
export interface ObjectFieldValue {
    // (undocumented)
    type: "object";
    // (undocumented)
    value?: {
        [propertyName: string]: FieldValue;
    };
}

// @public
export type OperationStatus = "notStarted" | "running" | "succeeded" | "failed";

// @public
export type PhoneNumberFieldValue = {
    type: "phoneNumber";
    value?: string;
} & CommonFieldValue;

// @public
export interface Point2D {
    x: number;
    y: number;
}

export { PollerLike }

export { PollOperationState }

// @public
export interface ReceiptItemArrayField {
    // (undocumented)
    type: "array";
    // (undocumented)
    value: ReceiptItemField[];
}

// @public
export type ReceiptItemField = {
    type: "object";
    value: {
        Name?: StringFieldValue;
        Quantity?: NumberFieldValue;
        Price?: NumberFieldValue;
        TotalPrice?: NumberFieldValue;
    };
} & CommonFieldValue;

// @public
export type ReceiptPollerLike = PollerLike<PollOperationState<RecognizeReceiptResultResponse>, RecognizeReceiptResultResponse>;

// @public (undocumented)
export type ReceiptWithLocale = {
    locale: "US";
} & USReceipt;

// @public
export type RecognizeContentOperationResult = Partial<RecognizedContent> & {
    status: OperationStatus;
    createdOn: Date;
    lastModified: Date;
};

// @public
export type RecognizeContentOptions = FormRecognizerOperationOptions;

// @public
export type RecognizeContentResultResponse = RecognizeContentOperationResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: AnalyzeOperationResultModel;
    };
};

// @public
export interface RecognizedContent {
    pages: FormPage[];
    version: string;
}

// @public
export interface RecognizedForm {
    fields: {
        [propertyName: string]: FormField;
    };
    formType: string;
    pageRange: FormPageRange;
    pages: FormPage[];
}

// @public (undocumented)
export interface RecognizedReceipt {
    locale?: string;
    recognizedForm: RecognizedForm;
}

// @public
export type RecognizeFormOperationResult = Partial<FormResult> & {
    status: OperationStatus;
    createdOn: Date;
    lastModified: Date;
};

// @public
export type RecognizeFormResultResponse = RecognizeFormOperationResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: AnalyzeOperationResultModel;
    };
};

// @public
export type RecognizeFormsOptions = FormRecognizerOperationOptions & {
    includeTextDetails?: boolean;
};

// @public (undocumented)
export type RecognizeOptions = RecognizeReceiptsOptions | RecognizeContentOptions | RecognizeFormsOptions;

// @public
export type RecognizePollerClient<T> = {
    beginRecognize: (source: FormRecognizerRequestBody | string, contentType?: FormContentType, analyzeOptions?: RecognizeOptions, modelId?: string) => Promise<{
        operationLocation?: string;
    }>;
    getRecognizeResult: (resultId: string, options: {
        abortSignal?: AbortSignalLike;
    }) => Promise<T>;
};

// @public
export type RecognizeReceiptOperationResult = Partial<RecognizeReceiptResult> & {
    status: OperationStatus;
    createdOn: Date;
    lastModified: Date;
};

// @public
export interface RecognizeReceiptResult {
    receipts?: ReceiptWithLocale[];
    version: string;
}

// @public
export type RecognizeReceiptResultResponse = RecognizeReceiptOperationResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: AnalyzeOperationResultModel;
    };
};

// @public
export type RecognizeReceiptsOptions = FormRecognizerOperationOptions & {
    includeTextDetails?: boolean;
};

export { RestResponse }

// @public
export type StringFieldValue = {
    type: "string";
    value?: string;
} & CommonFieldValue;

// @public
export type TimeFieldValue = {
    type: "time";
    value?: string;
} & CommonFieldValue;

// @public
export interface TrainingDocumentInfo {
    documentName: string;
    errors: FormRecognizerError[];
    pageCount: number;
    status: TrainingStatus;
}

// @public
export type TrainingFileFilter = FormRecognizerOperationOptions & {
    prefix?: string;
    includeSubFolders?: boolean;
};

// @public
export type TrainingStatus = "succeeded" | "partiallySucceeded" | "failed";

// @public
export type TrainPollerClient<T> = {
    getCustomModel: (modelId: string, options: GetModelOptions) => Promise<T>;
    trainCustomModelInternal: (source: string, useLabelFile?: boolean, options?: TrainingFileFilter) => Promise<{
        location?: string;
    }>;
};

// @public
export interface TrainResult {
    averageModelAccuracy?: number;
    errors?: FormRecognizerError[];
    fields?: FormFieldsReport[];
    trainingDocuments: TrainingDocumentInfo[];
}

// @public
export interface USReceipt extends RecognizedReceipt {
    items: USReceiptItem[];
    merchantAddress: FormField;
    merchantName: FormField;
    merchantPhoneNumber: FormField;
    receiptType: USReceiptType;
    subtotal: FormField;
    tax: FormField;
    tip: FormField;
    total: FormField;
    transactionDate: FormField;
    transactionTime: FormField;
}

// @public
export interface USReceiptItem {
    name?: FormField;
    price?: FormField;
    quantity?: FormField;
    totalPrice?: FormField;
}

// @public
export type USReceiptType = {
    type: "Unrecognized" | "Itemized" | "CreditCard" | "Gas" | "Parking";
    confidence?: number;
};

// @public
export type ValueTypes = "string" | "date" | "time" | "phoneNumber" | "number" | "integer" | "array" | "object";


// Warnings were encountered during analysis:
//
// src/lro/copy/poller.ts:37:3 - (ae-forgotten-export) The symbol "GeneratedClientCopyCustomModelResponse" needs to be exported by the entry point index.d.ts
// src/lro/copy/poller.ts:43:3 - (ae-forgotten-export) The symbol "GeneratedClientGetCustomModelCopyResultResponse" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```
