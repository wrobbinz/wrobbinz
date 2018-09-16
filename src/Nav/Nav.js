import m from 'mithril';
import './nav.scss';


class Nav {
  constructor(vnode) {
    this.state = vnode;

    this.links = [
      {
        name: 'projects',
        children: [
          { name: 'tension' },
          { name: 'audivy' },
          { name: 'drizzly' },
        ],
      },
      { name: 'about' },
      { name: 'contact' },
    ];
  }

  selectPage = (event) => {
    event.preventDefault();
    const { value } = event.target.attributes.value;
    this.state.attrs.setPage(value);
  }

  renderLinks = links => links.map(link => (
    <li>
      <a
        class="active"
        value={link.name}
        href={`/${link.name}`}
        oncreate={m.route.link}
        onclick={this.selectPage}
      >
        {link.name.toUpperCase()}
      </a>
      {link.children ? <ul>{this.renderLinks(link.children)}</ul> : null}
    </li>
  ))

  view() {
    return (
      <nav id="nav" class="full-height segment slide-right">
        <h1>@wrobbinz</h1>
        <ul>
          {this.renderLinks(this.links)}
        </ul>
      </nav>
    );
  }
}

export default Nav;
