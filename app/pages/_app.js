import 'isomorphic-unfetch';
import React from 'react';
import App, { Container } from 'next/app';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { PageTransition } from 'next-page-transitions';

import { Main } from '../components/layouts';

import { initStore } from '../store';
import { DATA } from '../constants';

class Insurgent extends App {
  static async getInitialProps({ Component, ctx }) {
    const baseUrl = ctx.req
      ? `${ctx.req.protocol}://${ctx.req.get('Host')}`
      : '';

    const state = ctx.store.getState();

    if (!state.data.loaded) {
      const data = await fetch(`${baseUrl}/data`);

      ctx.store.dispatch({
        type: DATA.LOADED,
        payload: await data.json()
      });
    }

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <PageTransition timeout={500} classNames="page-transition">
            <Main>
              <Component {...pageProps} />
            </Main>
          </PageTransition>
        </Provider>

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 500ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 500ms;
          }
        `}</style>
      </Container>
    );
  }
}

export default withRedux(initStore)(Insurgent);
