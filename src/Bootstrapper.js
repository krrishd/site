import request from 'superagent';

const toPreloadAndCache = [
  '/work-raw/write.md',
  '/work-raw/slice.md',
  '/work-raw/text-a-rep.md',
  '/work-raw/sitrus.md',
  '/work-raw/forward.md',
  '/work-raw/helix.md',
  '/work-raw/gocontribute.md'
];

export default () => {
  toPreloadAndCache.forEach(path => {
    request.get(path).end();
  });
}