// smartsolu-linear · 按钮合集
//
// 四种变体：Primary / Secondary / Ghost / Danger
// 加上深色侧边栏按钮（单独在 app-skeleton.tsx 展示）

import React from 'react';

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    {...props}
    className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium
               shadow-surface hover:bg-accent-hover active:scale-[0.98]
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all duration-150"
  />
);

export const SecondaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    {...props}
    className="px-4 py-2 rounded-lg bg-white border border-edge text-ink-secondary
               text-sm font-medium hover:bg-surface-alt hover:border-edge-strong
               active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
               transition-all duration-150"
  />
);

export const GhostButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    {...props}
    className="px-3 py-1.5 rounded-lg text-ink-tertiary text-sm
               hover:bg-surface-alt hover:text-ink-secondary
               transition-colors duration-150"
  />
);

export const DangerButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    {...props}
    className="px-4 py-2 rounded-lg bg-white border border-red-200 text-red-600
               text-sm font-medium hover:bg-red-50 active:scale-[0.98]
               disabled:opacity-50 disabled:cursor-not-allowed
               transition-all duration-150"
  />
);

// 使用：
// <PrimaryButton onClick={...}>保存方案</PrimaryButton>
// <SecondaryButton>取消</SecondaryButton>
// <GhostButton><TrashIcon /></GhostButton>
// <DangerButton>清空知识库</DangerButton>
