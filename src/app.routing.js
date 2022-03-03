import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import LocalLoader from './common/components/local-loader/local-loader.component'
import Home from './static/js/Home'

import NFT from './static/js/NFT'

function AppRouting() {
  const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/NFT',
      component: NFT,
    },
  ]

  const renderChildren = (props, route) =>
    route.noHeader ? (
      <route.component {...props} />
    ) : (
      <>
        <route.component {...props} />
      </>
    )

  return (
    <Switch>
      <Suspense fallback={<LocalLoader loader={true} />}>
        {routes.map((route, i) =>
          route.exact === false ? (
            <Route
              key={i}
              path={route.path}
              render={(props) => renderChildren(props, route)}
            />
          ) : (
            <Route
              exact
              key={i}
              path={route.path}
              render={(props) => renderChildren(props, route)}
            />
          )
        )}
      </Suspense>
    </Switch>
  )
}

export default AppRouting
