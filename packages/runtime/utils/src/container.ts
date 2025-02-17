import { interfaces } from '@garfish/core';
import { assert, createKey } from './utils';

export function createAppContainer(name: string) {
  // Create a temporary node, which is destroyed by the module itself
  const appContainer = document.createElement('div');
  const htmlNode = document.createElement('div');

  appContainer.id = `garfish_app_for_${name || 'unknow'}_${createKey()}`;
  htmlNode.setAttribute('__GarfishMockHtml__', '');
  appContainer.appendChild(htmlNode);

  return {
    htmlNode,
    appContainer,
  };
}

export function getRenderNode(domGetter: interfaces.DomGetter): Element {
  assert(domGetter, `Invalid domGetter:\n ${domGetter}.`);
  // prettier-ignore
  const appWrapperNode =
    typeof domGetter === 'string'
      ? document.querySelector(domGetter)
      : typeof domGetter === 'function'
        ? domGetter()
        : domGetter;
  assert(appWrapperNode, `Invalid domGetter: ${domGetter}`);

  return appWrapperNode;
}
