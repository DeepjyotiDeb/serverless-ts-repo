import {
  APIGatewayEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Context
} from 'aws-lambda';

import { connectToDatabase } from './../../../libs/db-lib';

export const get: APIGatewayProxyHandler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Go Serverless v2.0! Your function executed successfully!',
        event,
        context
      })
    };
  } catch (error) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Go Serverless v2.0! Your function executed successfully!',
        event
      })
    };
  }
};

export const resetPassword: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  _context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectToDatabase();
  } catch (error) {
    throw { statusCode: 503, message: error };
  }

  // The email service api key would be used to send a reset password email.
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Go Serverless v2.0! Your function executed successfully!',
      event
    })
  };
};
