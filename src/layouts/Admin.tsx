/*eslint eqeqeq: "off"*/

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../routes";
import { fetchDetail } from "../utils/api/owner";
import storage from "../utils/storage/storage";
import Header from "../components/Headers/Header";


class Admin extends React.Component<any> {
  async componentDidMount() {
    try {
      const owner = await fetchDetail();
      storage.saveUserDetails(owner);
    } catch (e) {}
  }

  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement != null)
      document.scrollingElement.scrollTop = 0;
    (this.refs.mainContent as any).scrollTop = 0;
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        var path = prop.layout + prop.path;
        if (prop.param) path += prop.param;

        return (
          <Route path={path} component={prop.component} key={`routes-${key}`} />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        (this.props as any).location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    let sideBarList: any = [];
    routes.forEach((route) => {
      if (route.show == true) {
        sideBarList.push(route);
      }
    });

    return (
      <>
        <Sidebar {...this.props} routes={sideBarList} />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Header />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/admin/forms" />
          </Switch>
        </div>
      </>
    );
  }
}

export default Admin;