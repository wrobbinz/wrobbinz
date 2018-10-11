import m from 'mithril';
import Nav from './Nav/Nav';
import MainView from './MainView/MainView';
import './styles/styles';

class App {
  constructor() {
    this.page = '';
  }

  setPage = (page) => {
    this.page = page;
  }

  view(vnode) {
    return (
      <div class="row full-height fade-in">
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <Nav page={this.page} setPage={this.setPage} />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          {vnode.children}
        </div>
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <aside id="nav" class="full-height segment slide-left">
            <h1 class="slide-right">___</h1>
            <ul>
              <li>
                <a class="active" href="#projects">OVERVIEW</a>
              </li>
              <li>
                <a href="#about">DESIGN</a>
              </li>
              <li>
                <a href="#contact">DEVELOPMENT</a>
              </li>
              <li>
                <a href="#contact">THOUGHTS</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

m.route(document.body, '/', {
  '/': {
    render() {
      return m(App, m(Nav));
    },
  },
  '/projects': {
    render(vnode) {
      return m(App, m(MainView, { page: 'projects' }));
    },
  },
  '/tension': {
    render() {
      return m(App, m(MainView, { page: 'tension' }));
    },
  },
  '/audivy': {
    render() {
      return m(App, m(MainView, { page: 'audivy' }));
    },
  },
  '/drizzly': {
    render() {
      return <App page="projects" />;
    },
  },
  '/about': {
    render() {
      return <App page="projects" />;
    },
  },
  '/contact': {
    render() {
      return <App page="projects" />;
    },
  },
});
