import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTheme } from '../../hooks/useTheme';
import { colorThemes, ThemeName } from '../../lib/themes';

const themeDisplayNames = {
  lightPink: 'Light Pink',
  terracotta: 'Terracotta',
  grey: 'Grey',
  obsidian: 'Obsidian',
} as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: 'var(--bg-main)',
            boxShadow: '2px 3px 4px rgba(0,0,0,0.3), -1.5px -2.5px 4px var(--bg-lighter)'
          }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: 'var(--bg-main)',
              boxShadow: 'inset 2px 3px 4px rgba(0,0,0,0.3), inset -1.5px -2.5px 4px var(--bg-lighter)'
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'var(--bg-darker)',
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center opacity-70"
                style={{
                  backgroundColor: 'var(--bg-main)',
                }}
              >
                <ChevronDownIcon className="h-5 w-5" style={{ color: 'var(--text-header)' }} />
              </div>
            </div>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items 
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl p-1 ring-1 ring-black/5 focus:outline-none"
          style={{
            backgroundColor: 'var(--bg-main)',
            boxShadow: '4px 4px 10px rgba(0,0,0,0.1), -4px -4px 10px var(--bg-lighter)'
          }}
        >
          <div className="py-1">
            <div className="px-3 py-2">
              <p className="text-sm font-medium" style={{ color: 'var(--text-header)' }}>
                {themeDisplayNames[theme]}
              </p>
            </div>
            {Object.entries(colorThemes).map(([key, themeData]) => (
              <Menu.Item key={key}>
                {({ active }) => (
                  <button
                    onClick={() => setTheme(key as ThemeName)}
                    className={`${
                      active ? 'opacity-80' : ''
                    } group flex w-full items-center rounded-xl px-3 py-2 text-sm transition-all duration-200`}
                    style={{
                      backgroundColor: active ? 'var(--bg-lighter)' : 'transparent',
                      color: 'var(--text-body)'
                    }}
                  >
                    <div
                      className="mr-3 h-4 w-4 rounded-full shadow-neuro-light"
                      style={{ backgroundColor: themeData.background }}
                    />
                    {themeDisplayNames[key as keyof typeof themeDisplayNames]}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 