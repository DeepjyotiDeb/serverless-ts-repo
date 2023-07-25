/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIGatewayProxyResult } from 'aws-lambda';

const buildResponse = async (
  statusCode: number,
  body: any
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  };
};

export const success = async (body: any): Promise<APIGatewayProxyResult> => {
  return buildResponse(200, body);
};

export const failure = async (body: any): Promise<APIGatewayProxyResult> => {
  const statusCode = body.error.statusCode;
  const result = { status: body.status, message: body.error.message };
  return buildResponse(statusCode, result);
};
