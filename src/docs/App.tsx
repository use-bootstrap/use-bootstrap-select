import type { RouteDefinition } from '@solidjs/router'
import { For, Show, Suspense, createEffect, createSignal, lazy } from 'solid-js'
import { A, HashRouter, useIsRouting, useLocation } from '@solidjs/router'
import pkg from '../../package.json'

// Routes
const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
    info: {
      label: 'Home',
    },
  },
  {
    path: '/install/',
    component: lazy(() => import('./pages/Install')),
    info: {
      label: 'Install',
    },
  },
  {
    path: '/demo/',
    component: lazy(() => import('./pages/Demo')),
    info: {
      label: 'Demo',
    },
  },
  {
    path: '/configuration/',
    component: lazy(() => import('./pages/Configuration')),
    info: {
      label: 'Configuration',
    },
  },
  {
    path: '/methods/',
    component: lazy(() => import('./pages/Methods')),
    info: {
      label: 'Methods',
    },
  },
  {
    path: '/customize/',
    component: lazy(() => import('./pages/Customize')),
    info: {
      label: 'Customize',
    },
  },
]

function Layout(props: any) {
  // Theme
  const [theme, setTheme] = createSignal<'light' | 'dark'>('light')
  const toggleTheme = (e: Event) => setTheme((e.target as HTMLInputElement).checked ? 'dark' : 'light')
  createEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme())
  })

  const links = () => routes.map(route => ({ path: route.path, label: route.info?.label }))
  const isRouting = useIsRouting()
  const location = useLocation()

  const prevLink = () => {
    let prevLink = null as null | { path: any, label: any }
    for (let i = 0; i < links().length; i++) {
      if (links()[i].path === location.pathname) {
        if (i > 0) {
          prevLink = links()[i - 1]
        }
        break
      }
    }
    return prevLink
  }
  const nextLink = () => {
    let nextLink = null as null | { path: any, label: any }
    for (let i = 0; i < links().length; i++) {
      if (links()[i].path === location.pathname) {
        if (i < links().length - 1) {
          nextLink = links()[i + 1]
        }
        break
      }
    }
    return nextLink
  }

  return (
    <>
      <div class="sticky-top">
        <nav class="navbar navbar-expand bg-body-tertiary" data-bs-theme="dark">
          <div class="container justify-content-start">
            <a class="navbar-brand d-flex align-items-center gap-2" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /><path d="m12 12 4 10 1.7-4.3L22 16Z" /></svg>
              {pkg.name}
              <span class="badge text-bg-secondary fw-semibold">v{pkg.version}</span>
            </a>
            <div class="ms-auto navbar-nav align-items-center gap-3">
              <a class="fs-5 nav-link p-0" href={pkg.repository} target="_blank" aria-label="GitHub Project">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <label class="btn nav-link p-0 border-0 fs-5" for="bs-theme" title="Toggle color schema">
                {theme() === 'light' && (
                  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
                {theme() === 'dark' && (
                  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </label>
              <input type="checkbox" class="btn-check" id="bs-theme" autocomplete="off" onchange={toggleTheme} />
            </div>
          </div>
        </nav>
        <div class="bg-body-tertiary" style="border-bottom: var(--bs-border-width) solid var(--bs-border-color)">
          <div class="container pt-3">
            <nav class="overflow-x-auto" id="main-nav" style="margin-bottom: -1px">
              <ul class="nav nav-underline flex-nowrap">
                <For each={links()}>{link => (
                  <li class="nav-item">
                    <A class="nav-link" href={link.path} end>{link.label}</A>
                  </li>
                )}
                </For>
                <Show when={isRouting()}>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">
                      <div class="spinner-border spinner-border-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </a>
                  </li>
                </Show>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="container py-3">
        <div class="pt-4" role="main">
          {props.children}
          <div class="d-flex justify-content-between gap-3 mt-4">
            <Show when={prevLink()} fallback={<span></span>}>
              <a
                href={prevLink()?.path}
                class="btn link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-start w-50"
              >
                <span class="small">Previous page</span>
                {prevLink()?.label}
              </a>
            </Show>
            <Show when={nextLink()}>
              <a
                href={nextLink()?.path}
                class="btn link-body-emphasis text-decoration-none border d-inline-flex flex-column align-items-end w-50"
              >
                <span class="small">Next page</span>
                {nextLink()?.label}
              </a>
            </Show>
          </div>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <Suspense>
      <HashRouter root={Layout}>{routes}</HashRouter>
    </Suspense>
  )
}
