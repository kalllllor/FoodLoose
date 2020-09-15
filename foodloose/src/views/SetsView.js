import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SetTemplate from 'templates/SetTemplate';
import PreviewTemplate from 'templates/PreviewTemplate';
import { Sets } from 'data/Sets';

function SetsView() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        {Sets.map((item, id) => (
          <Route
            exact
            path={`/${item.data.sets[0].title.replace(/\s/g, '')}`}
            key={item.data.sets[0].title}
          >
            <SetTemplate Sets={Sets[id]} uni={item.data.sets[0].title} />
          </Route>
        ))}
        {Sets.map((item, id) => (
          <Route
            exact
            path={`/${item.data.sets[0].title.replace(/\s/g, '')}Preview`}
            key={item.data.sets[0].title}
          >
            <PreviewTemplate
              activeColor={item.data.sets[0].color}
              title={item.data.sets[0].title}
              uni={item.data.sets[0].title}
            />
          </Route>
        ))}
      </Switch>
    </AnimatePresence>
  );
}

export default SetsView;
