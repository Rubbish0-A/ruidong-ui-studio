// smartsolu-linear · 应用骨架示例
//
// 这是 SmartSoluExpert v1.6.0 的主容器简化版，展示：
// - Base 层：bg-canvas 页面底色
// - Surface 层：主内容区
// - Overlay 层：顶栏（毛玻璃）+ Toast
// - 深色侧边栏 + 浅色主内容的对比分区
//
// 复制之前先确认 tailwind.config.js 和 fonts.html 已到位。

import React, { useState } from 'react';

type ViewType = 'workspace' | 'search' | 'knowledge' | 'settings';

const AppSkeleton: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('workspace');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-canvas font-sans text-ink antialiased
                    selection:bg-accent-soft selection:text-ink">
      {/* ── Sidebar（深色 Linear Panel） ── */}
      <aside className={`${isSidebarOpen ? 'w-60' : 'w-16'} bg-sidebar flex flex-col shrink-0
                        transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]
                        border-r border-sidebar-edge-subtle`}>
        {/* Logo 区 */}
        <div className="h-14 flex items-center px-4 shrink-0">
          <div className="flex items-center gap-2.5 cursor-pointer w-full overflow-hidden">
            <div className="w-8 h-8 min-w-[2rem] bg-accent rounded-lg flex items-center justify-center
                            ring-1 ring-white/10">
              <span className="text-white text-sm font-bold">R</span>
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white tracking-tight">App</span>
                <span className="text-xs text-sidebar-text-muted -mt-0.5">Agent</span>
              </div>
            )}
          </div>
        </div>

        {/* 菜单 */}
        <nav className="flex-1 py-4 px-2.5 space-y-0.5 overflow-y-auto custom-scrollbar">
          {isSidebarOpen && (
            <div className="text-xs font-medium text-sidebar-text-muted px-3 mb-2 tracking-wide">
              工作台
            </div>
          )}
          {(['workspace', 'search', 'knowledge'] as const).map(v => (
            <SidebarItem key={v} view={v} current={currentView} onClick={setCurrentView}
                         isOpen={isSidebarOpen} label={{ workspace: '方案工坊', search: '智能搜索', knowledge: '知识库' }[v]} />
          ))}
          <div className="my-4 border-t border-sidebar-edge-subtle mx-2" />
          {isSidebarOpen && (
            <div className="text-xs font-medium text-sidebar-text-muted px-3 mb-2 tracking-wide">
              系统
            </div>
          )}
          <SidebarItem view="settings" current={currentView} onClick={setCurrentView}
                       isOpen={isSidebarOpen} label="设置" />
        </nav>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* Header —— Overlay 层（毛玻璃） */}
        <header className="h-14 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]
                           flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-1.5 hover:bg-surface-alt rounded-lg text-ink-tertiary
                               transition-colors duration-150">
              ☰
            </button>
            <h1 className="text-base font-semibold text-ink tracking-tight">
              {currentView === 'workspace' && '方案工坊'}
              {currentView === 'search' && '智能搜索'}
              {currentView === 'knowledge' && '知识库'}
              {currentView === 'settings' && '系统设置'}
            </h1>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-alt text-ink-secondary
                          rounded-lg border border-edge">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium">睿动AI · Qwen Max</span>
          </div>
        </header>

        {/* Main —— Base + Surface 层 */}
        <main className="flex-1 overflow-y-auto bg-canvas p-6 custom-scrollbar">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Surface 层卡片 */}
            <div className="bg-white rounded-xl shadow-surface border border-edge p-6">
              <h2 className="text-sm font-bold text-ink mb-2">欢迎回来</h2>
              <p className="text-sm text-ink-secondary leading-relaxed">
                这是 Surface 层的标准卡片 —— 实心白底、极淡描边、双层柔和阴影。
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// ── 侧边栏单项（深色域按钮） ──
interface SidebarItemProps {
  view: ViewType;
  current: ViewType;
  onClick: (v: ViewType) => void;
  isOpen: boolean;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ view, current, onClick, isOpen, label }) => {
  const isActive = current === view;
  return (
    <button
      onClick={() => onClick(view)}
      title={label}
      className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                  text-sm font-medium transition-all duration-150 group ${
        isActive
          ? 'bg-white/[0.08] text-sidebar-text'
          : 'text-sidebar-text-tertiary hover:bg-white/[0.05] hover:text-sidebar-text-secondary'
      } ${!isOpen ? 'justify-center' : ''}`}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-accent rounded-r-full" />
      )}
      <div className="w-[18px] h-[18px] shrink-0 rounded bg-white/10" />
      {isOpen && <span className="whitespace-nowrap">{label}</span>}
    </button>
  );
};

export default AppSkeleton;
