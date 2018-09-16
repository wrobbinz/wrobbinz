import m from 'mithril';
import Tension from './views/Tension';
import './MainView.scss';


class MainView {
  constructor(vnode) {
    this.views = {
      tension: Tension,
    };
  }

  onbeforeremove(vnode) {
    vnode.dom.classList.add('fade-out');
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  view(vnode) {
    const { page } = vnode.attrs;
    return this.views[page];
  }
};

export default MainView;
