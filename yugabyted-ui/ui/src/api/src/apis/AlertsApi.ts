// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useQuery, useInfiniteQuery, useMutation, UseQueryOptions, UseInfiniteQueryOptions, UseMutationOptions } from 'react-query';
import Axios from '../runtime';
import type { AxiosInstance } from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type {
  AlertNotificationsListResponse,
  AlertRuleResponse,
  AlertRuleSpec,
  AlertRulesListResponse,
  AlertTestEmailRequest,
  ApiError,
} from '../models';

export interface ListAlertNotificationsForQuery {
  accountId: string;
  level?: string;
  fetchNewAlerts?: boolean;
  source?: string;
  limit?: number;
  continuation_token?: string;
}
export interface ListAlertRulesForQuery {
  accountId: string;
}
export interface SendTestEmailAlertForQuery {
  accountId: string;
  alertRuleId: string;
  AlertTestEmailRequest?: AlertTestEmailRequest;
}
export interface UpdateAlertRuleForQuery {
  accountId: string;
  alertRuleId: string;
  AlertRuleSpec?: AlertRuleSpec;
}

/**
 * API to fetch the alert notifications for an account
 * API to fetch the alert notifications for an account
 */

export const listAlertNotificationsAxiosRequest = (
  requestParameters: ListAlertNotificationsForQuery,
  customAxiosInstance?: AxiosInstance
) => {
  return Axios<AlertNotificationsListResponse>(
    {
      url: '/public/accounts/{accountId}/alerts/notifications'.replace(`{${'accountId'}}`, encodeURIComponent(String(requestParameters.accountId))),
      method: 'GET',
      params: {
        level: requestParameters['level'],
        fetchNewAlerts: requestParameters['fetchNewAlerts'],
        source: requestParameters['source'],
        limit: requestParameters['limit'],
        continuation_token: requestParameters['continuation_token'],
      }
    },
    customAxiosInstance
  );
};

export const listAlertNotificationsQueryKey = (
  requestParametersQuery: ListAlertNotificationsForQuery,
  pageParam = -1,
  version = 1,
) => [
  `/v${version}/public/accounts/{accountId}/alerts/notifications`,
  pageParam,
  ...(requestParametersQuery ? [requestParametersQuery] : [])
];


export const useListAlertNotificationsInfiniteQuery = <T = AlertNotificationsListResponse, Error = ApiError>(
  params: ListAlertNotificationsForQuery,
  options?: {
    query?: UseInfiniteQueryOptions<AlertNotificationsListResponse, Error, T>;
    customAxiosInstance?: AxiosInstance;
  },
  pageParam = -1,
  version = 1,
) => {
  const queryKey = listAlertNotificationsQueryKey(params, pageParam, version);
  const { query: queryOptions, customAxiosInstance } = options ?? {};

  const query = useInfiniteQuery<AlertNotificationsListResponse, Error, T>(
    queryKey,
    () => listAlertNotificationsAxiosRequest(params, customAxiosInstance),
    queryOptions
  );

  return {
    queryKey,
    ...query
  };
};

export const useListAlertNotificationsQuery = <T = AlertNotificationsListResponse, Error = ApiError>(
  params: ListAlertNotificationsForQuery,
  options?: {
    query?: UseQueryOptions<AlertNotificationsListResponse, Error, T>;
    customAxiosInstance?: AxiosInstance;
  },
  version = 1,
) => {
  const queryKey = listAlertNotificationsQueryKey(params,  version);
  const { query: queryOptions, customAxiosInstance } = options ?? {};

  const query = useQuery<AlertNotificationsListResponse, Error, T>(
    queryKey,
    () => listAlertNotificationsAxiosRequest(params, customAxiosInstance),
    queryOptions
  );

  return {
    queryKey,
    ...query
  };
};



/**
 * API to fetch the alert rules for an account
 * API to fetch the alert rules for an account
 */

export const listAlertRulesAxiosRequest = (
  requestParameters: ListAlertRulesForQuery,
  customAxiosInstance?: AxiosInstance
) => {
  return Axios<AlertRulesListResponse>(
    {
      url: '/public/accounts/{accountId}/alert_rules'.replace(`{${'accountId'}}`, encodeURIComponent(String(requestParameters.accountId))),
      method: 'GET',
      params: {
      }
    },
    customAxiosInstance
  );
};

export const listAlertRulesQueryKey = (
  requestParametersQuery: ListAlertRulesForQuery,
  pageParam = -1,
  version = 1,
) => [
  `/v${version}/public/accounts/{accountId}/alert_rules`,
  pageParam,
  ...(requestParametersQuery ? [requestParametersQuery] : [])
];


export const useListAlertRulesInfiniteQuery = <T = AlertRulesListResponse, Error = ApiError>(
  params: ListAlertRulesForQuery,
  options?: {
    query?: UseInfiniteQueryOptions<AlertRulesListResponse, Error, T>;
    customAxiosInstance?: AxiosInstance;
  },
  pageParam = -1,
  version = 1,
) => {
  const queryKey = listAlertRulesQueryKey(params, pageParam, version);
  const { query: queryOptions, customAxiosInstance } = options ?? {};

  const query = useInfiniteQuery<AlertRulesListResponse, Error, T>(
    queryKey,
    () => listAlertRulesAxiosRequest(params, customAxiosInstance),
    queryOptions
  );

  return {
    queryKey,
    ...query
  };
};

export const useListAlertRulesQuery = <T = AlertRulesListResponse, Error = ApiError>(
  params: ListAlertRulesForQuery,
  options?: {
    query?: UseQueryOptions<AlertRulesListResponse, Error, T>;
    customAxiosInstance?: AxiosInstance;
  },
  version = 1,
) => {
  const queryKey = listAlertRulesQueryKey(params,  version);
  const { query: queryOptions, customAxiosInstance } = options ?? {};

  const query = useQuery<AlertRulesListResponse, Error, T>(
    queryKey,
    () => listAlertRulesAxiosRequest(params, customAxiosInstance),
    queryOptions
  );

  return {
    queryKey,
    ...query
  };
};



/**
 * API to send test email alerts to users of an account
 * API to send test email alerts to users of an account
 */


export const sendTestEmailAlertMutate = (
  body: SendTestEmailAlertForQuery,
  customAxiosInstance?: AxiosInstance
) => {
  const url = '/public/accounts/{accountId}/alert_rules/{alertRuleId}/test_email'.replace(`{${'accountId'}}`, encodeURIComponent(String(body.accountId))).replace(`{${'alertRuleId'}}`, encodeURIComponent(String(body.alertRuleId)));
  // eslint-disable-next-line
  // @ts-ignore
  delete body.accountId;
  // eslint-disable-next-line
  // @ts-ignore
  delete body.alertRuleId;
  return Axios<unknown>(
    {
      url,
      method: 'POST',
      data: body.AlertTestEmailRequest
    },
    customAxiosInstance
  );
};

export const useSendTestEmailAlertMutation = <Error = ApiError>(
  options?: {
    mutation?:UseMutationOptions<unknown, Error>,
    customAxiosInstance?: AxiosInstance;
  }
) => {
  const {mutation: mutationOptions, customAxiosInstance} = options ?? {};
  // eslint-disable-next-line
  // @ts-ignore
  return useMutation<unknown, Error, SendTestEmailAlertForQuery, unknown>((props) => {
    return  sendTestEmailAlertMutate(props, customAxiosInstance);
  }, mutationOptions);
};


/**
 * API to modify alert rule for an account
 * API to modify alert rule for an account
 */


export const updateAlertRuleMutate = (
  body: UpdateAlertRuleForQuery,
  customAxiosInstance?: AxiosInstance
) => {
  const url = '/public/accounts/{accountId}/alert_rules/{alertRuleId}'.replace(`{${'accountId'}}`, encodeURIComponent(String(body.accountId))).replace(`{${'alertRuleId'}}`, encodeURIComponent(String(body.alertRuleId)));
  // eslint-disable-next-line
  // @ts-ignore
  delete body.accountId;
  // eslint-disable-next-line
  // @ts-ignore
  delete body.alertRuleId;
  return Axios<AlertRuleResponse>(
    {
      url,
      method: 'PUT',
      data: body.AlertRuleSpec
    },
    customAxiosInstance
  );
};

export const useUpdateAlertRuleMutation = <Error = ApiError>(
  options?: {
    mutation?:UseMutationOptions<AlertRuleResponse, Error>,
    customAxiosInstance?: AxiosInstance;
  }
) => {
  const {mutation: mutationOptions, customAxiosInstance} = options ?? {};
  // eslint-disable-next-line
  // @ts-ignore
  return useMutation<AlertRuleResponse, Error, UpdateAlertRuleForQuery, unknown>((props) => {
    return  updateAlertRuleMutate(props, customAxiosInstance);
  }, mutationOptions);
};




