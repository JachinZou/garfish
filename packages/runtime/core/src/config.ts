import { deepMerge, error } from '@garfish/utils';
import { interfaces } from './interface';

export const lifecycle: Array<Exclude<
  keyof interfaces.HooksLifecycle,
  'customLoader'
>> = [
  'beforeLoad',
  'afterLoad',
  'beforeEval',
  'afterEval',
  'beforeMount',
  'afterMount',
  'beforeUnmount',
  'afterUnmount',
  'errorLoadApp',
  'errorMountApp',
  'errorUnmountApp',
];

const defaultOptions: interfaces.Options = {
  apps: [],
  basename: '',
  domGetter: () => null,
  sandbox: {
    open: true,
    snapshot: false,
    useStrict: false,
    strictIsolation: false,
  },
  autoRefreshApp: true,
  disableStatistics: false,
  disablePreloadApp: false,
  nested: false,
  beforeLoad: async () => {},
  afterLoad: () => {},
  beforeEval: () => {},
  afterEval: () => {},
  beforeMount: () => {},
  afterMount: () => {},
  beforeUnmount: () => {},
  afterUnmount: () => {},
  errorLoadApp: (err) => error(err),
  errorMountApp: (err) => error(err),
  errorUnmountApp: (err) => error(err),
  onNotMatchRouter: () => {},
};

export const defaultLoadComponentOptions: Pick<
  interfaces.ComponentInfo,
  'cache'
> = {
  cache: true,
};

export const getDefaultOptions = () => deepMerge({}, defaultOptions);
