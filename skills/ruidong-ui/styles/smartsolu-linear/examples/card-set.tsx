// smartsolu-linear · 卡片合集
//
// 三种典型卡片：Surface / Interactive / Selectable
// 以及建议卡片（带左侧严重度彩条，Diagnosis 场景专用）

import React from 'react';

// ── 1. 标准卡片（Surface 层） ──
export const SurfaceCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} className="bg-white rounded-xl shadow-surface border border-edge p-6" />
);

// ── 2. 可交互卡片（hover 微浮） ──
export const InteractiveCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    {...props}
    className="bg-white rounded-xl shadow-surface border border-edge p-6
               hover:shadow-hover hover:-translate-y-0.5 hover:border-edge-strong
               transition-all duration-200 cursor-pointer"
  />
);

// ── 3. 可选中卡片 ──
interface SelectableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export const SelectableCard: React.FC<SelectableCardProps> = ({ selected, ...props }) => (
  <div
    {...props}
    className={`bg-white rounded-xl border p-6 transition-all duration-150 cursor-pointer ${
      selected
        ? 'border-accent bg-accent-soft ring-1 ring-accent shadow-raised'
        : 'border-edge shadow-surface hover:shadow-hover hover:-translate-y-0.5'
    }`}
  />
);

// ── 4. 建议卡片（带左侧彩条，Diagnosis 场景专用） ──
interface SuggestionCardProps {
  title: string;
  description: string;
  weight?: number;
  severity?: 'critical' | 'warning' | 'info';
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  title,
  description,
  weight,
  severity = 'info',
}) => (
  <div className="relative bg-white rounded-xl border border-edge shadow-surface
                  hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200
                  overflow-hidden">
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${
      severity === 'critical' ? 'bg-red-500'   :
      severity === 'warning'  ? 'bg-amber-500' :
                                'bg-accent'
    }`} />
    <div className="p-5 pl-6">
      <div className="flex items-start gap-3">
        <h4 className="flex-1 text-sm font-bold text-ink">{title}</h4>
        {weight !== undefined && (
          <span className="text-[11px] font-bold text-ink-tertiary">{weight}%</span>
        )}
      </div>
      <p className="mt-2 text-sm text-ink-secondary leading-relaxed">{description}</p>
    </div>
  </div>
);
