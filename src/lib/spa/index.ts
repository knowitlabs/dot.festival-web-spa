/* eslint no-console:0 */
import { waitFor } from '@knowitlabs/wait-for';
import { updateNodes, setTitle } from '@knowitlabs/spa';
import { KIFunctionType } from '../../@types/module/function';
import {
  KIEventArrayType,
  KIEventDataActionType,
  KIEventDataIdType
} from '../../@types/module/spa';
import { KIRouteDetailsType } from '../../@types/module/router';
import { KIEventType } from '../../@types/module/events';

export type KILABS_UseStateValueType =
  | boolean
  | string
  | number
  | unknown[]
  | Record<string, unknown>;

// eslint-disable-next-line no-unused-vars
export type KILABS_UseStateReturnType = [
  KILABS_UseStateValueType,
  KIFunctionType
];

export type KIStateContextType = {
  state: KILABS_UseStateValueType[];
  index: number;
};

/**
 * The main functionality that is to be replaced if a framework is to be used
 * instead. The functionality that spa provides, is the same principles and naming that React uses,
 * except for the global event handlers like `addOnClick`.
 */
export const spa = (() => {
  const _root: HTMLElement | null = document.querySelector('#app');

  if (!_root) {
    throw new Error(
      'Missing element for application! Please make sure you have an element with the id of `app` in the DOM'
    );
  }

  const stateHooks: Record<string, KIStateContextType> = {};

  console.log('adsadsadsadsadsadsa');

  const effectHooks: unknown[] = [];

  let _templateCallback;
  let _page;
  let clickEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let inputEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let keyupEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let submitEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let keydownEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let toggleEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let changeEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let clickOutsideEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let onRouteChangeEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let onAfterAppRenderEventArray: KIEventArrayType<KIEventDataIdType> = [];
  let effectIndex = 0;

  const init = (
    // eslint-disable-next-line no-unused-vars
    templateCallback: KIFunctionType,
    routeDetails: KIRouteDetailsType
  ) => {
    if (!templateCallback) {
      throw new Error('Missing param `templateCallback` for `init()`');
    }

    if (!routeDetails) {
      throw new Error('Missing param `routeDetails` for `init()`');
    }

    const { page } = routeDetails;

    if (!page) {
      throw new Error('Missing page');
    }

    _templateCallback = templateCallback;
    _page = page;

    render(routeDetails);
  };
  const render = async (routeDetails?: KIRouteDetailsType) => {
    let page = _page;
    let routeChanged = false;

    if (routeDetails) {
      page = routeDetails.page;
      routeChanged = routeDetails.routeChanged;
    }

    console.info(`trying to render "${page?.route?.name}"`);
    clickEventArray = [];
    inputEventArray = [];
    keyupEventArray = [];
    toggleEventArray = [];
    submitEventArray = [];
    keydownEventArray = [];
    changeEventArray = [];
    clickOutsideEventArray = [];
    onRouteChangeEventArray = [];
    onAfterAppRenderEventArray = [];
    // reset state indexes
    Object.keys(stateHooks).forEach(
      (context) => (stateHooks[context].index = 0)
    );

    effectIndex = 0;

    document.dispatchEvent(
      new CustomEvent('eventBeforeAppRender', {
        bubbles: true,
        cancelable: true
      })
    );

    let _html = '';
    let error = false;

    try {
      _html = await _templateCallback(page);
    } catch (e) {
      if (e.message.indexOf('404') !== -1) {
        setTitle('Nettsiden finnes ikke');
        _html = `
<h1>Nettsiden finnes ikke</h1>
<p>Innholdet kan ha blitt flyttet, eller du kan ha skrevet inn en nettadresse som ikke eksisterer.</p>
      `;
      } else {
        _html = await _templateCallback('ErrorPage', {
          error: e
        });

        error = true;
        console.error(e);
        console.info(
          `failed to render "${page?.route?.name}", rendering error page`
        );
      }
    }

    if (!error) {
      console.info(`successfully rendered "${page?.route?.name}"`);
    }

    updateNodes(_root, _html);

    await waitFor(10);

    document.removeEventListener(
      'eventAfterRouteChanged',
      handleOnRouteChangedListener
    );
    document.addEventListener(
      'eventAfterRouteChanged',
      handleOnRouteChangedListener
    );

    if (routeChanged) {
      document.dispatchEvent(
        new CustomEvent('eventAfterRouteChanged', {
          bubbles: true,
          cancelable: true,
          detail: {
            routeDetails
          }
        })
      );
    }

    const onRender = () => {
      if (
        page &&
        page.route &&
        page.route.page.onRender &&
        typeof page.route.page.onRender === 'function'
      ) {
        page.route.page.onRender();
      }

      document.dispatchEvent(
        new CustomEvent(`eventAfterPage${page.route.name}Render`, {
          bubbles: true,
          cancelable: true
        })
      );

      if (
        _templateCallback &&
        _templateCallback.onRender &&
        typeof _templateCallback.onRender === 'function'
      ) {
        _templateCallback.onRender();
      }

      document.dispatchEvent(
        new CustomEvent('eventAfterAppRender', {
          bubbles: true,
          cancelable: true
        })
      );
    };

    document.removeEventListener(
      'eventAfterAppRender',
      handleAfterAppRenderListeners
    );
    document.addEventListener(
      'eventAfterAppRender',
      handleAfterAppRenderListeners
    );

    onRender();

    document.removeEventListener('click', handleClickListeners);
    document.addEventListener('click', handleClickListeners);
    document.removeEventListener('click', handleClickOutsideListeners);
    document.addEventListener('click', handleClickOutsideListeners);
    document.removeEventListener('input', handleInputListeners);
    document.addEventListener('input', handleInputListeners);
    document.removeEventListener('keyup', handleKeyupListeners);
    document.addEventListener('keyup', handleKeyupListeners);
    document.removeEventListener('keydown', handleKeydownListeners);
    document.addEventListener('keydown', handleKeydownListeners);
    document.removeEventListener('change', handleChangeListeners);
    document.addEventListener('change', handleChangeListeners);
    document.removeEventListener('submit', handleSubmitListeners);
    document.addEventListener('submit', handleSubmitListeners);
    document.removeEventListener('toggle', handleToggleListeners, true);
    document.addEventListener('toggle', handleToggleListeners, true);
  };
  const handleAfterAppRenderListeners = () => {
    onAfterAppRenderEventArray.forEach((callback: KIEventDataActionType) => {
      callback();
    });
  };
  const handleOnRouteChangedListener = () => {
    onRouteChangeEventArray.forEach((action: KIEventDataIdType) =>
      action.callback()
    );
  };
  const handleClickListeners = (e: KIEventType<HTMLElement>) => {
    clickEventArray.forEach((target: KIEventDataIdType) => {
      if (e.target.id === target.id) {
        target.callback(e);
      }
    });
  };
  const handleClickOutsideListeners = (e: KIEventType<HTMLElement>) => {
    clickOutsideEventArray.forEach((target: KIEventDataIdType) => {
      const el = document.getElementById(target.id);

      if (!el) return;

      if (!el.contains(e.target)) {
        target.callback(e);
      }
    });
  };
  const handleInputListeners = (e: KIEventType<HTMLElement>) => {
    inputEventArray.forEach((target: KIEventDataIdType) => {
      if (e.target.id === target.id) {
        e.preventDefault();
        target.callback(e);
      }
    });
  };
  const handleKeydownListeners = (e: KIEventType<HTMLElement>) => {
    keydownEventArray.forEach((target: KIEventDataIdType) => {
      if (e.target.id === target.id) {
        target.callback(e);
      }
    });
  };
  const handleToggleListeners = (e: KIEventType<HTMLElement>) => {
    toggleEventArray.forEach((target: KIEventDataIdType) => {
      if (e.target.id === target.id) {
        target.callback(e);
      }
    });
  };
  const handleChangeListeners = (e: KIEventType<HTMLElement>) => {
    changeEventArray.forEach((target: KIEventDataIdType) => {
      if (e.target.id === target.id) {
        e.preventDefault();
        target.callback(e);
      }
    });
  };
  const handleSubmitListeners = (e: KIEventType<HTMLElement>) => {
    submitEventArray.forEach((target: KIEventDataIdType) => {
      if (e.target.id === target.id) {
        e.preventDefault();
        target.callback(e);
      }
    });
  };
  const handleKeyupListeners = (e: KIEventType<HTMLElement>) => {
    keyupEventArray.forEach((target: KIEventDataIdType) => {
      if (!target) return;

      if (e.target.id === target.id) {
        target.callback(e);
      } else if (e.target.matches(target.id)) {
        target.callback(e);
      } else if (e.target.matches(`${target.id} *`)) {
        const closest = e.target.closest(target.id);

        if (
          (e.currentTarget.nodeType === Node.DOCUMENT_NODE
            ? e.currentTarget.documentElement
            : e.currentTarget
          ).contains(closest)
        ) {
          target.callback(e);
        }
      }
    });
  };
  /**
   * To be able to add event listeners to the "string html" produced by the
   * components, we have to use "global" event handlers.
   * Every usages of this type of function (like `addOnInput`) is to be replaced if
   * a framework is used.
   * @param {string} id The id used for the event
   * @param {Function} callback The callback to use on the event
   */
  // eslint-disable-next-line no-unused-vars
  const addOnClick = (id: string, callback: KIFunctionType) => {
    clickEventArray.push({ id, callback });
  };
  // eslint-disable-next-line no-unused-vars
  const addOnInput = (id: string, callback: KIFunctionType) => {
    inputEventArray.push({ id, callback });
  };
  // eslint-disable-next-line no-unused-vars
  const addOnKeyup = (id: string, callback: KIFunctionType) => {
    keyupEventArray.push({ id, callback });
  };
  // eslint-disable-next-line no-unused-vars
  const addOnRouteChange = (callback: KIFunctionType) => {
    onRouteChangeEventArray.push(callback);
  };
  // eslint-disable-next-line no-unused-vars
  const addOnAfterAppRender = (callback: KIFunctionType) => {
    onAfterAppRenderEventArray.push(callback);
  };
  // eslint-disable-next-line no-unused-vars
  const addOnKeydown = (id: string, callback: KIFunctionType) => {
    keyupEventArray.push({ id, callback });
  };
  // eslint-disable-next-line no-unused-vars
  const addOnChange = (id: string, callback: KIFunctionType) => {
    changeEventArray.push({ id, callback });
  };
  // eslint-disable-next-line no-unused-vars
  const addOnSubmit = (id: string, callback: KIFunctionType) => {
    submitEventArray.push({ id, callback });
  };
  // eslint-disable-next-line no-unused-vars
  const addOnToggle = (id: string, callback: KIFunctionType) => {
    toggleEventArray.push({ id, callback });
  };
  const addClickOutside = (
    id: string,
    // eslint-disable-next-line no-unused-vars
    callback: KIFunctionType
  ) => {
    clickOutsideEventArray.push({ id, callback });
  };
  const useState = (
    initValue: KILABS_UseStateValueType,
    context: string
  ): KILABS_UseStateReturnType => {
    if (!context || typeof context !== 'string' || context === '') {
      throw new Error('Missing parameter `context` for `useState`');
    }

    console.log('stateHooks', stateHooks, context);

    if (!stateHooks[context]) {
      stateHooks[context] = { state: [], index: 0 };
    }

    const contextStateIndex = stateHooks[context].index;
    const state = (
      stateHooks[context].state[contextStateIndex] !== undefined
        ? stateHooks[context].state[contextStateIndex]
        : initValue
    ) as KILABS_UseStateValueType;
    const _contextStateIndex = contextStateIndex;
    const setState = (newValue: KILABS_UseStateValueType) => {
      if (stateHooks[context].state[_contextStateIndex] !== newValue) {
        stateHooks[context].state[_contextStateIndex] = newValue;
      }

      console.log(
        'newValue',
        newValue,
        _contextStateIndex,
        stateHooks[context]
      );
      render();
    };

    stateHooks[context].index++;

    console.log(
      stateHooks,
      stateHooks[context],
      stateHooks[context].state,
      stateHooks[context].index
    );

    return [state, setState];
  };
  const useEffect = async (
    callback: unknown | Promise<KIFunctionType> | KIFunctionType,
    dependencyArray: unknown[]
  ) => {
    const oldDependencies = effectHooks[effectIndex];

    let hasChanged = true;

    if (oldDependencies) {
      hasChanged = dependencyArray.some(
        (dep: unknown, i: number) => !Object.is(dep, oldDependencies[i])
      );
    }

    console.log(dependencyArray, effectHooks[effectIndex]);

    effectHooks[effectIndex] = dependencyArray;
    effectIndex++;

    if (hasChanged && callback && typeof callback === 'function') {
      if (callback.constructor.name === 'AsyncFunction') {
        await callback();
      } else {
        callback();
      }
    }
  };

  return {
    addOnClick,
    addClickOutside,
    addOnChange,
    addOnKeydown,
    addOnInput,
    addOnToggle,
    addOnKeyup,
    addOnSubmit,
    addOnRouteChange,
    addOnAfterAppRender,
    useEffect,
    useState,
    init,
    render
  };
})();

export const {
  addOnClick,
  addClickOutside,
  addOnChange,
  addOnKeydown,
  addOnKeyup,
  addOnSubmit,
  addOnRouteChange,
  addOnAfterAppRender,
  addOnInput,
  addOnToggle,
  useEffect,
  useState,
  init,
  render
} = spa;

export default spa;
