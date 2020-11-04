export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Analytics Service API',
    description: 'Tamandua Open Source project',
  },

  tags: [
    {
      name: 'Analytics',
      description: 'API for analytics data',
    },
    {
      name: 'User Timer Action',
    },
    {
      name: 'User Action',
    },
  ],

  schemes: ['https', 'http'],
  consumes: ['application/json'],
  produces: ['application/json'],

  paths: {
    //ANALYTICS - user timer action
    '/api/users/me/timerActions': {
      get: {
        tags: ['Analytics'],
        summary: 'Show User Timer Actions',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userTimerActions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Timer Action',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/me/timerActions/cycles': {
      get: {
        tags: ['Analytics'],
        summary: 'Show User Timer Action Cycles',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'startDate',
            description: 'yyyy-MM-ddTHH:mm:ss.SSSZ',
            default: '2010-10-15T14:31:23.464Z',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'endDate',
            description: 'yyyy-MM-ddTHH:mm:ss.SSSZ',
            default: '2025-10-15T14:31:23.464Z',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userCycles: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Cycle',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    //ANALYTICS - user action
    '/api/users/me/actions': {
      get: {
        tags: ['Analytics'],
        summary: 'Show User Actions',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userActions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Action',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/actions/{actionId}/userActions': {
      get: {
        tags: ['Analytics'],
        summary:
          'Show User Actions By Action Id Between Start Date and End Date',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'actionId',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'startDate',
            description: 'yyyy-MM-ddTHH:mm:ss.SSSZ',
            default: '2010-10-15T14:31:23.464Z',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'endDate',
            description: 'yyyy-MM-ddTHH:mm:ss.SSSZ',
            default: '2025-10-15T14:31:23.464Z',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userActions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Action',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    //ANALYTICS - LEGACY
    '/api/analytics/cycles/me': {
      get: {
        tags: ['Analytics'],
        summary: 'LEGACY - Please use `/api/users/me/timerActions/cycles`',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Authentication Token Id',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'startDate',
            description: 'yyyy-MM-ddTHH:mm:ss.SSSZ',
            default: '2010-10-15T14:31:23.464Z',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'query',
            name: 'endDate',
            description: 'yyyy-MM-ddTHH:mm:ss.SSSZ',
            default: '2025-10-15T14:31:23.464Z',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userCycles: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Legacy User Cycle',
                  },
                },
              },
            },
          },
        },
      },
    },

    //user action
    '/api/users/{userId}/actions': {
      get: {
        tags: ['User Action'],
        summary: 'Get User Actions',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Analytics Service Api Key',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Ok',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userActions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Action',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/actions': {
      get: {
        tags: ['User Action'],
        summary: 'Get All Actions',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Ok',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                actions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Action',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/{userId}/actions/{actionId}': {
      post: {
        tags: ['User Action'],
        summary: 'Add User Action',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Analytics Service Api Key',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'actionId',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                latitude: {
                  type: 'number',
                },
                longitude: {
                  type: 'number',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userTimerAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },

    //user timer action
    '/api/users/{userId}/timerActions': {
      get: {
        tags: ['User Timer Action'],
        summary: 'Get User Timer Actions',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Analytics Service Api Key',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Ok',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userTimerActions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User Timer Action',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/timerActions': {
      get: {
        tags: ['User Timer Action'],
        summary: 'Get All Timer Actions',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Ok',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                timerActions: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/Timer Action',
                  },
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
    '/api/users/{userId}/timerActions/{timerActionId}': {
      post: {
        tags: ['User Timer Action'],
        summary: 'Add User Timer Action',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Analytics Service Api Key',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'userId',
            schema: {
              type: 'string',
            },
          },
          {
            in: 'path',
            name: 'timerActionId',
            schema: {
              type: 'string',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Created',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                userTimerAction: {
                  type: 'object',
                  $ref: '#/definitions/User Timer Action',
                },
              },
            },
          },
          '4xx - 5xx': {
            description: 'Error',
            schema: {
              type: 'object',
              $ref: '#/definitions/Error',
            },
          },
        },
      },
    },
  },

  definitions: {
    'Legacy User Cycle': {
      type: 'object',
      properties: {
        startedAt: {
          type: 'string',
        },
        endedAt: {
          type: 'string',
        },
        onStartCycleCount: {
          type: 'integer',
        },
        onWorkCount: {
          type: 'integer',
        },
        onWorkIdleCount: {
          type: 'integer',
        },
        onBreakCount: {
          type: 'integer',
        },
        onBreakIdleCount: {
          type: 'integer',
        },
        onPauseCount: {
          type: 'integer',
        },
        onPauseIdleCount: {
          type: 'integer',
        },
        onResumeCount: {
          type: 'integer',
        },
        onFinishCount: {
          type: 'integer',
        },
        onInactiveCount: {
          type: 'integer',
        },
        userActions: {
          type: 'array',
          items: {
            $ref: '#/definitions/Legacy User Action',
          },
        },
        userStates: {
          type: 'array',
          items: {
            $ref: '#/definitions/User State',
          },
        },
      },
    },

    'Legacy User Action': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        Action: {
          type: 'object',
          $ref: '#/definitions/Action',
        },
      },
    },

    'User Action': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        latitude: {
          type: 'number',
        },
        longitude: {
          type: 'number',
        },
        Action: {
          type: 'object',
          $ref: '#/definitions/Action',
        },
      },
    },

    Action: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
      },
    },

    'User Cycle': {
      type: 'object',
      properties: {
        startedAt: {
          type: 'string',
        },
        endedAt: {
          type: 'string',
        },
        onStartCycleCount: {
          type: 'integer',
        },
        onWorkCount: {
          type: 'integer',
        },
        onWorkIdleCount: {
          type: 'integer',
        },
        onBreakCount: {
          type: 'integer',
        },
        onBreakIdleCount: {
          type: 'integer',
        },
        onPauseCount: {
          type: 'integer',
        },
        onPauseIdleCount: {
          type: 'integer',
        },
        onResumeCount: {
          type: 'integer',
        },
        onFinishCount: {
          type: 'integer',
        },
        onInactiveCount: {
          type: 'integer',
        },
        userTimerActions: {
          type: 'array',
          items: {
            $ref: '#/definitions/User Timer Action',
          },
        },
        userStates: {
          type: 'array',
          items: {
            $ref: '#/definitions/User State',
          },
        },
      },
    },

    'User Timer Action': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        TimerAction: {
          type: 'object',
          $ref: '#/definitions/Timer Action',
        },
      },
    },

    'Timer Action': {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
      },
    },

    'User State': {
      type: 'object',
      properties: {
        startedAt: {
          type: 'string',
        },
        endedAt: {
          type: 'string',
        },
        state: {
          type: 'string',
        },
      },
    },

    Error: {
      type: 'object',
      properties: {
        errorCode: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
        errors: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        method: {
          type: 'string',
        },
        url: {
          type: 'string',
        },
      },
    },
  },
}
