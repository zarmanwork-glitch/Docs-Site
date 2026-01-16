'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  FileText,
  Rocket,
  Download,
  Package,
  Component,
  Zap,
  Database,
  Activity,
  Globe,
  GitBranch,
  Target,
  Brain,
  Repeat,
  Settings,
  BookOpen,
  Book,
  Sparkles,
  Timer,
  Cpu,
  RefreshCw,
  Network,
  Folder,
  Server,
  PanelLeftIcon,
} from 'lucide-react';
import { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import docsNav from '@/docs-nav.json';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

interface NavSection {
  title: string;
  icon: string;
  basePath: string;
  items: NavItem[];
}

// Icon mapping function
function getIconForItem(title: string, href: string) {
  const iconMap: Record<string, any> = {
    // React
    'Getting Started': Rocket,
    Installation: Download,
    'React Packages Overview': Package,
    Components: Component,
    Hooks: Zap,
    useState: Database,
    useEffect: Activity,
    useContext: Globe,
    useReducer: GitBranch,
    useRef: Target,
    useMemo: Brain,
    useCallback: Repeat,
    'State Management': Settings,
    'Vite Build Tool': Zap,
    // JavaScript
    Fundamentals: Book,
    'ES6+ Features': Sparkles,
    'Async Programming': Timer,
    // Node.js
    'Core Engines': Cpu,
    'Event Loop & Execution': RefreshCw,
    'Island & Handshake Model': Network,
    'API Reference': Book,
    'File System': Folder,
    'HTTP Server': Server,
  };

  // Return mapped icon or fallback icons
  if (iconMap[title]) return iconMap[title];

  // Fallback based on common patterns
  if (title.toLowerCase().includes('getting started')) return BookOpen;
  if (title.toLowerCase().includes('install')) return Download;
  if (title.toLowerCase().includes('api')) return Book;

  return FileText; // Default icon
}

export function AppSidebar() {
  const pathname = usePathname();
  const navigation = docsNav.navigation as NavSection[];
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === 'collapsed';

  // Filter navigation based on current path
  const filteredNavigation = navigation.filter((section) =>
    pathname.startsWith(section.basePath)
  );

  // If no match, show all sections (for /docs page)
  const displayNavigation =
    filteredNavigation.length > 0 ? filteredNavigation : navigation;

  return (
    <Sidebar collapsible='icon'>
      <SidebarContent className='gap-0'>
        <SidebarGroup className='py-0'>
          <div className='flex items-center justify-between px-2 py-2.5 group-data-[collapsible=icon]:justify-center'>
            <SidebarGroupLabel className='group/label text-xs font-medium text-sidebar-foreground/70 m-0 group-data-[collapsible=icon]:hidden'>
              Documentation
            </SidebarGroupLabel>
            <button
              onClick={toggleSidebar}
              className='inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-sidebar-accent/50 transition-colors cursor-pointer group-data-[collapsible=icon]:w-full'
              aria-label='Toggle sidebar'
              title='Toggle sidebar'
            >
              <PanelLeftIcon className='h-4 w-4' />
            </button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {displayNavigation.map((section) => (
                <Collapsible
                  key={section.title}
                  defaultOpen
                  className='group/collapsible'
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className='cursor-pointer data-[state=open]:bg-sidebar-accent/50 hover:bg-sidebar-accent/50 transition-colors'
                        tooltip={isCollapsed ? section.title : undefined}
                      >
                        {section.icon === 'react' && <ReactIcon />}
                        {section.icon === 'javascript' && <JavaScriptIcon />}
                        {section.icon === 'nodejs' && <NodeIcon />}
                        <span>{section.title}</span>
                        <ChevronDown className='ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180' />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {section.items.map((item) => (
                          <NavItemComponent
                            key={item.href}
                            item={item}
                            pathname={pathname}
                            isCollapsed={isCollapsed}
                          />
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function NavItemComponent({
  item,
  pathname,
  isCollapsed,
}: {
  item: NavItem;
  pathname: string;
  isCollapsed: boolean;
}) {
  const hasChildren = item.items && item.items.length > 0;
  const isActive =
    pathname === item.href ||
    (hasChildren && item.items?.some((child) => pathname === child.href));

  const Icon = getIconForItem(item.title, item.href);

  if (hasChildren) {
    return (
      <Collapsible
        defaultOpen={isActive}
        className='group/nested'
      >
        <SidebarMenuSubItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuSubButton
              asChild
              isActive={pathname === item.href}
              className='cursor-pointer justify-between data-[state=open]:bg-sidebar-accent/50 hover:bg-sidebar-accent/30 transition-colors'
            >
              <Link
                href={item.href}
                onClick={(e) => e.stopPropagation()}
              >
                {!isCollapsed && (
                  <div className='flex items-center gap-2 flex-1'>
                    <Icon className='h-4 w-4 flex-shrink-0' />
                    <span className='truncate'>{item.title}</span>
                  </div>
                )}
                {isCollapsed && (
                  <div className='flex items-center justify-center w-full'>
                    <Icon className='h-4 w-4 flex-shrink-0' />
                  </div>
                )}
                {!isCollapsed && (
                  <ChevronDown className='h-4 w-4 transition-transform duration-200 group-data-[state=open]/nested:rotate-180 flex-shrink-0' />
                )}
              </Link>
            </SidebarMenuSubButton>
          </CollapsibleTrigger>
          {!isCollapsed && (
            <CollapsibleContent>
              <SidebarMenuSub className='ml-2 border-l border-sidebar-border pl-2'>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.href}>
                    <SidebarMenuSubButton
                      asChild
                      isActive={pathname === subItem.href}
                      className='text-xs hover:bg-sidebar-accent/30 transition-colors'
                    >
                      <Link href={subItem.href}>
                        <span className='truncate'>{subItem.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          )}
        </SidebarMenuSubItem>
      </Collapsible>
    );
  }

  if (isCollapsed) {
    return (
      <SidebarMenuSubItem>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarMenuSubButton
                asChild
                isActive={pathname === item.href}
                className='hover:bg-sidebar-accent/30 transition-colors justify-center'
              >
                <Link
                  href={item.href}
                  className='flex items-center justify-center'
                >
                  <Icon className='h-4 w-4' />
                </Link>
              </SidebarMenuSubButton>
            </TooltipTrigger>
            <TooltipContent
              side='right'
              className='ml-2'
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SidebarMenuSubItem>
    );
  }

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton
        asChild
        isActive={pathname === item.href}
        className='hover:bg-sidebar-accent/30 transition-colors'
      >
        <Link
          href={item.href}
          className='flex items-center gap-2'
        >
          <Icon className='h-4 w-4 flex-shrink-0' />
          <span className='truncate'>{item.title}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}

function ReactIcon() {
  return (
    <svg
      className='h-4 w-4 text-[#61DAFB]'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z' />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg
      className='h-4 w-4 text-[#339933]'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.12-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.08-.05.18-.05.25 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.08.04-.17.04-.25 0l-1.91-1.14c-.06-.03-.14-.04-.2-.02-.55.19-.66.22-1.18.36-.13.04-.33.1.07.29l2.49 1.47c.24.13.5.2.78.2.27 0 .54-.07.78-.2l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 00-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.06 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z' />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg
      className='h-4 w-4 text-[#F7DF1E]'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z' />
    </svg>
  );
}
