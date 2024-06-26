/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MainLayoutImport } from './routes/_mainLayout'
import { Route as LogInLayoutImport } from './routes/_logInLayout'
import { Route as MainLayoutIndexImport } from './routes/_mainLayout/index'

// Create Virtual Routes

const LogInLayoutLogInLazyImport = createFileRoute('/_logInLayout/logIn')()

// Create/Update Routes

const MainLayoutRoute = MainLayoutImport.update({
  id: '/_mainLayout',
  getParentRoute: () => rootRoute,
} as any)

const LogInLayoutRoute = LogInLayoutImport.update({
  id: '/_logInLayout',
  getParentRoute: () => rootRoute,
} as any)

const MainLayoutIndexRoute = MainLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => MainLayoutRoute,
} as any)

const LogInLayoutLogInLazyRoute = LogInLayoutLogInLazyImport.update({
  path: '/logIn',
  getParentRoute: () => LogInLayoutRoute,
} as any).lazy(() =>
  import('./routes/_logInLayout/logIn.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_logInLayout': {
      id: '/_logInLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LogInLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_mainLayout': {
      id: '/_mainLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof MainLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_logInLayout/logIn': {
      id: '/_logInLayout/logIn'
      path: '/logIn'
      fullPath: '/logIn'
      preLoaderRoute: typeof LogInLayoutLogInLazyImport
      parentRoute: typeof LogInLayoutImport
    }
    '/_mainLayout/': {
      id: '/_mainLayout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof MainLayoutIndexImport
      parentRoute: typeof MainLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LogInLayoutRoute: LogInLayoutRoute.addChildren({ LogInLayoutLogInLazyRoute }),
  MainLayoutRoute: MainLayoutRoute.addChildren({ MainLayoutIndexRoute }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_logInLayout",
        "/_mainLayout"
      ]
    },
    "/_logInLayout": {
      "filePath": "_logInLayout.tsx",
      "children": [
        "/_logInLayout/logIn"
      ]
    },
    "/_mainLayout": {
      "filePath": "_mainLayout.tsx",
      "children": [
        "/_mainLayout/"
      ]
    },
    "/_logInLayout/logIn": {
      "filePath": "_logInLayout/logIn.lazy.tsx",
      "parent": "/_logInLayout"
    },
    "/_mainLayout/": {
      "filePath": "_mainLayout/index.tsx",
      "parent": "/_mainLayout"
    }
  }
}
ROUTE_MANIFEST_END */
