import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { parentNavigation } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        console.log(nextPathname, pathname);
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(parentNavigation);
  }, []);

  return <div ref={ref} />;
};
