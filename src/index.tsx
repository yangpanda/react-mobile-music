import ReactDOM from 'react-dom';
import App from './app';
import Player from '@/components/Player';

import './styles/base.scss';
import './index.scss';

import { Provider } from 'react-redux';
import store from '@/store';

ReactDOM.render(
  <Provider store={store}>
    <App></App>
    <Player></Player>
  </Provider>,
  document.getElementById('root')
);
