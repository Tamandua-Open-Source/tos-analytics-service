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
  ],

  schemes: ['https', 'http'],
  consumes: ['application/json'],
  produces: ['application/json'],

  paths: {
    '/api/analytics/actions': {
      get: {
        tags: ['Analytics'],
        summary: 'Show user actions from all users',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
        },
      },
    },

    '/api/analytics/actions/me': {
      get: {
        tags: ['Analytics'],
        summary: 'Show user actions',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
        },
      },
    },

    '/api/analytics/actions/breakIdle': {
      post: {
        tags: ['Analytics'],
        summary: 'Add breakIdle user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/break': {
      post: {
        tags: ['Analytics'],
        summary: 'Add break user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/finish': {
      post: {
        tags: ['Analytics'],
        summary: 'Add finish user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/inactive': {
      post: {
        tags: ['Analytics'],
        summary: 'Add inactive user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/login': {
      post: {
        tags: ['Analytics'],
        summary: 'Add login user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/pauseIdle': {
      post: {
        tags: ['Analytics'],
        summary: 'Add pauseIdle user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/pause': {
      post: {
        tags: ['Analytics'],
        summary: 'Add pause user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/resume': {
      post: {
        tags: ['Analytics'],
        summary: 'Add resume user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/startCycle': {
      post: {
        tags: ['Analytics'],
        summary: 'Add startCycle user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/workIdle': {
      post: {
        tags: ['Analytics'],
        summary: 'Add workIdle user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },

    '/api/analytics/actions/work': {
      post: {
        tags: ['Analytics'],
        summary: 'Add work user action record',
        parameters: [
          {
            in: 'header',
            name: 'authorization',
            description: 'Token used to authenticate the user',
            required: false,
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
                userAction: {
                  type: 'object',
                  $ref: '#/definitions/User Action',
                },
              },
            },
          },
        },
      },
    },
  },

  definitions: {
    'User Action': {
      type: 'object',
      properties: {
        UserId: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        userAction: {
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
  },
}
